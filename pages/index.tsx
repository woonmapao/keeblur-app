import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'
import Contents from '../components/Contents/Contents'
import Sliders from '../components/herosection/slider/sliders'
import SlidersData from '../components/herosection/slider/SlidersData'
import Subscription from '../components/Subscription/Subscription'

const Home: NextPage = () => {
  return (
    <div className="h-full">
      <Head>
        <title>Keeblur - Homepages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Sliders slides={SlidersData}/>
      <Contents/>
      <Subscription/>
    </div>
  )
}

export default Home
