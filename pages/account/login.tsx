import React from 'react'
import Head from 'next/head'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/footer'
import LoginForm from '../../components/AuthComponent/LoginForm'
import { GetServerSideProps } from 'next'



const login = () => {
    return (
        <div className="">
            <Head>
                <title>Login - Keeblur</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <LoginForm />
            <Footer />
        </div>
    )
}

export default login

export const getServerSideProps: GetServerSideProps = async () => {
	// check if the user is logged in
	const ifAuthenticated = false

	if (ifAuthenticated) {
		return { redirect: { destination: '/login', permanent: false } }
	}

	return { props: {} }
}