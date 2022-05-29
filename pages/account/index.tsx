import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Navbar from '../../components/navbar/Navbar'


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Account - Keeblur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
    </div>
  )
}

export default Home


export const getServerSideProps: GetServerSideProps = async () => {
	// check if the user is logged in
	const ifAuthenticated = false

	if (!ifAuthenticated) {
		return { redirect: { destination: '/account/login', permanent: false } }
	}

	return { props: {} }
}