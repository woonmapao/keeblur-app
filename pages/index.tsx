import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'


const Home: NextPage = () => {
  return (
    <div className="h-[1000px]">
      <Head>
        <title>Keeblur - Homepages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      
    </div>
  )
}

export default Home
