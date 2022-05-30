require('dotenv').config()
const express = require('express')
const next = require('next')
const https = require('https')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const saltRounds = 10

const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

mongoose.connect('mongodb://localhost:27017/keeblurDB')

app.prepare().then(() => {
  const server = express()

  server.use(cookieParser())
  server.use(cors({ credentials: true, origin: ['http://localhost:3000'] }))
  server.use(express.static('public'))
  server.use(express.urlencoded({ extended: true }))

  const customerSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    email: {
      type: String,
      unique: true,
      required: String,
    },
    password: String,
  })

  const Customer = mongoose.model('Customer', customerSchema)

  server.post('/', (req, res) => {
    const email = req.body.email

    const data = {
      members: [
        {
          email_address: email,
          status: 'subscribed',
        },
      ],
    }

    const jsonData = JSON.stringify(data)

    const url =
      'https://us13.api.mailchimp.com/3.0/lists/' + process.env.LIST_ID
    const options = {
      method: 'POST',
      auth: 'woonmapao:' + process.env.API_KEY,
    }

    const request = https.request(url, options, (response) => {
      response.on('data', function (data) {
        console.log(JSON.parse(data))
      })
    })

    request.write(jsonData)
    request.end()

    res.redirect('/')
    //tell user that email is subscribed
  })

  server.post('/register', (req, res) => {
    const { fName, lName, email, password, conPassword } = req.body

    if (password === conPassword) {
      bcrypt.hash(password, saltRounds, (err, hash) => {
        const newCustomer = new Customer({
          fName: fName,
          lName: lName,
          email: email,
          password: hash,
        })
        newCustomer.save((err) => {
          if (err) {
            console.log(err)
            res.redirect('/account/register')
          } else {
            res.redirect('/account/login')
            //success registered
          }
        })
      })
    } else {
      res.redirect('/account/register')
      // tell user password mismatch
      // finding way to tell user
    }
  })

  server.post('/login', (req, res) => {
    const { email, password } = req.body

    Customer.findOne({ email: email }, (err, foundCustomer) => {
      if (err) {
        console.log(err)
        res.redirect('/account/login')
      } else {
        if (foundCustomer) {
          bcrypt.compare(password, foundCustomer.password, (err, result) => {
            if (result) {
              //login action in progress
              const token = jwt.sign(
                { _id: foundCustomer._id },
                process.env.KEEBLUR_APP_TOO_GOOD
              )

              res.cookie('jwt', token, {
                httpOnly: true,
                maxAge: 1 * 60 * 60 * 1000,
              })
              res.redirect('/account')
            } else {
              //wrong password do something
              res.redirect('/account/login')
            }
          })
        }
      }
    })
  })

  server.get('/account', (req, res) => {
    const cookie = req.cookies['jwt']
    const claims = jwt.verify(cookie, process.env.KEEBLUR_APP_TOO_GOOD)

    console.log(claims);
    console.log("yoyo");
    if (claims) {
      //do something or maybe do nothing
    } else {
      res.redirect('/account/login')
    }
  })

  //   server.post('/logout', (req, res) => {
  //     res.cookie('jwt', '', { maxAge: 0 })
  //   })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})
