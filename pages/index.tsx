import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'
import Contents from '../components/Contents/Contents'
import Sliders from '../components/herosection/slider/sliders'
import SlidersData from '../components/herosection/slider/SlidersData'
import Subscription from '../components/Subscription/Subscription'
import Footer from '../components/footer/footer'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Keeblur - Homepages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Sliders slides={SlidersData} />
      <Contents />
      <Subscription />
      <Footer />
    </div>
  )
}

export default Home
