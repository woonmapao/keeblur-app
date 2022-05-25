import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'
import Contents from '../components/Contents/Contents'
import Sliders from '../components/herosection/slider/sliders'
import SlidersData from '../components/herosection/slider/SlidersData'


const Home: NextPage = () => {
  return (
    <div className="h-[100vh]">
      <Head>
        <title>Keeblur - Homepages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Sliders slides={SlidersData}/>
      <Contents/>
      
    </div>
  )
}

export default Home
