import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/herosection/Hero'


const Home: NextPage = () => {
  return (
    <div className="h-[1000px]">
      <Head>
        <title>Keeblur - Homepages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Hero/>
      
    </div>
  )
}

export default Home
