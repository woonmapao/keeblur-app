import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaCaretDown, FaShoppingCart, FaUserAlt, FaSearch, FaBars } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [isSroll, setIsSroll] = useState(false)
    const [isOpen, setIsOpen] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSroll(true)
            } else {
                setIsSroll(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <>
            {isSroll ? <header>
                <div className='font-[MinimalBold] text-2xl flex fixed top-0 w-full  justify-between items-center  md:px-24 px-10 h-24 bg-white transition-all duration-300'>
                    <div className=''>
                        <Link href="/">
                            <a>
                                Keeblur
                            </a>
                        </Link>

                    </div>
                    <div className='font-[MinimalRecular] hidden md:flex text-2xl space-x-6'>
                        <div className='hover:text-neutral-500'>Shop</div>
                        <div className='hover:text-neutral-500'>Categories</div>
                        <div className='hover:text-neutral-500'>Contact Us</div>
                    </div>
                    <div className='hidden space-x-4 md:flex text-[16px] '>
                        <motion.div whileHover={{ scale: 1.1 }}><FaSearch /></motion.div>
                        <motion.div whileHover={{ scale: 1.1 }}><FaShoppingCart /></motion.div>
                        <motion.div whileHover={{ scale: 1.1 }}><FaUserAlt /></motion.div>
                    </div>
                    <div className='md:hidden flex justify-center items-end'>
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <div className=''><FaBars /></div>
                        </motion.div>
                    </div>
                </div>
            </header> :
                <header>
                    <div className='font-[MinimalBold] text-2xl flex  justify-between items-center bg-transparent md:px-24 px-10 h-24 text-white transition-all duration-300'>
                        <div className=''>
                            <Link href="/">
                                <a>
                                    Keeblur
                                </a>
                            </Link>

                        </div>
                        <div className='font-[MinimalRecular] hidden md:flex text-2xl space-x-6'>
                            <div className='hover:text-neutral-500'>Shop</div>
                            <div className='hover:text-neutral-500'>Categories</div>
                            <div className='hover:text-neutral-500'>Contact Us</div>
                        </div>
                        <div className='hidden space-x-4 md:flex text-[16px] '>
                            <motion.div whileHover={{ scale: 1.1 }}><FaSearch /></motion.div>
                            <motion.div whileHover={{ scale: 1.1 }}><FaShoppingCart /></motion.div>
                            <motion.div whileHover={{ scale: 1.1 }}><FaUserAlt /></motion.div>
                        </div>
                        <div className='md:hidden flex justify-center items-end'>
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <div className=''><FaBars /></div>
                            </motion.div>
                        </div>
                    </div>
                </header>}
            {/* <header>
                <div className='font-[MinimalBold] text-2xl flex  justify-between items-center  md:px-24 px-10 h-24'>
                    <div className=''>
                        <Link href="/">
                            <a>
                                Keeblur
                            </a>
                        </Link>

                    </div>
                    <div className='font-[MinimalRecular] hidden md:flex text-2xl space-x-6'>
                        <div>Shop</div>
                        <div>Categories</div>
                        <div>Contact Us</div>
                    </div>
                    <div className='hidden space-x-4 md:flex text-[16px] '>
                        <motion.div whileHover={{ scale: 1.1 }}><FaSearch /></motion.div>
                        <motion.div whileHover={{ scale: 1.1 }}><FaShoppingCart /></motion.div>
                        <motion.div whileHover={{ scale: 1.1 }}><FaUserAlt /></motion.div>
                    </div>
                    <div className='md:hidden flex justify-center items-end'>
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <div className=''><FaBars /></div>
                        </motion.div>
                    </div>
                </div>
            </header> */}
        </>
    )
}

export default Navbar