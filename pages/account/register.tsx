import React from 'react'
import Head from 'next/head'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/footer'
import RegisterForm from '../../components/AuthComponent/RegisterForm'

const register = () => {
    return (
        <>
            <Navbar />
            <RegisterForm />
            <Footer />

        </>
    )
}

export default register