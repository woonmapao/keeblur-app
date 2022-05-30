import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaCaretDown, FaShoppingCart, FaUserAlt, FaSearch, FaBars, FaRegWindowClose } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeIn } from '../Variants/Variants'


const Navbar = () => {
    const [isSroll, setIsSroll] = useState(false)
    const [isOpenCate, setIsOpenCate] = useState(false)
    const [isOpenMenu, setIsOpenMenu] = useState(false)


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
            {isSroll ?
                <motion.header variants={fadeIn("d")} initial="initial" animate="animate">
                    <div className='font-[MinimalBold] text-2xl flex fixed  top-0 w-full  justify-between items-center  md:px-24 px-10 h-24 bg-white transition-all duration-300 z-50'>
                        <div className=''>
                            <Link href="/">
                                <a>
                                    Keeblur
                                </a>
                            </Link>

                        </div>
                        <div className='font-[MinimalRecular] hidden md:flex text-xl space-x-8'>
                            <Link href="/shops">
                                <a>
                                    <div className='hover:text-neutral-500'>SHOP</div>
                                </a>

                            </Link>
                            <div className='hover:text-neutral-500 cursor-pointer' onClick={() => { setIsOpenCate(!isOpenCate) }}>CATEGORIES {isOpenCate ? <span className='text-[14px]'>▲</span> : <span className='text-[14px]'>▼</span>}</div>

                            <Link href="/Contacts">
                                <a>
                                    <div className='hover:text-neutral-500'>CONTACT US</div>
                                </a>
                            </Link>
                        </div>
                        <div className='hidden space-x-4 md:flex text-[16px] '>
                            <motion.div whileHover={{ scale: 1.1 }}><FaShoppingCart /></motion.div>
                            <motion.div whileHover={{ scale: 1.1 }}><FaUserAlt /></motion.div>
                        </div>
                        <div className='md:hidden flex justify-center items-end'>
                            {isOpenMenu ? <motion.div whileHover={{ scale: 1.1 }} onClick={() => { setIsOpenMenu(!isOpenMenu) }}>
                                <div className=''><FaRegWindowClose /></div>
                            </motion.div> : <motion.div whileHover={{ scale: 1.1 }} onClick={() => { setIsOpenMenu(!isOpenMenu) }}>
                                <div className=''><FaBars /></div>
                            </motion.div>}
                        </div>
                    </div>
                    {isOpenMenu ? <div className='md:hidden flex fixed flex-col justify-start left-[78%] rounded-md top-20 py-4 px-6 font-[MinimalRecular]  bg-[#e1e3e6] text-black'>
                        <div>Shop</div>
                        <div className='pt-2'>Categories</div>
                        <div className='flex flex-row pt-2'>
                            <Link href="/cart">
                                <a>
                                    <motion.div whileHover={{ scale: 1.1 }}><FaShoppingCart /></motion.div>
                                </a>
                            </Link>
                            <Link href="/account">
                                <a>
                                    <motion.div whileHover={{ scale: 1.1 }}><FaUserAlt /></motion.div>
                                </a>
                            </Link>
                        </div>
                    </div> : <div className=''></div>}
                    {isOpenCate ? <div className='md:flex hidden flex-col fixed w-[10%] left-[44%] justify-start top-[4.5rem] p-4 bg-[#e1e3e6] text-black font-[MinimalRecular] z-[999] rounded-md'>
                        <Link href="/">
                            <a className='p-2 hover:bg-red-500 rounded transition-colors hover:text-white'>Keyboards</a>
                        </Link>
                        <Link href="/">
                            <a className='p-2 hover:bg-red-500 rounded transition-colors hover:text-white'>Keycaps</a>
                        </Link>
                        <Link href="/">
                            <a className='p-2 hover:bg-red-500 rounded transition-colors hover:text-white'>Switchese</a>
                        </Link>
                        <Link href="/">
                            <a className='p-2 hover:bg-red-500 rounded transition-colors hover:text-white'>Deskmat</a>
                        </Link>



                    </div> :
                        <div>Hi</div>}
                </motion.header> :
                <motion.header>
                    <div className='font-[MinimalBold] text-2xl relative flex z-50 justify-between items-center bg-transparent md:px-24 px-10 h-24 text-white transition-all duration-300 '>
                        <div className=''>
                            <Link href="/">
                                <a>
                                    Keeblur
                                </a>
                            </Link>

                        </div>
                        <div className='font-[MinimalRecular] hidden md:flex text-xl space-x-8'>
                            <Link href="/shop">
                                <a>
                                    <div className='hover:text-neutral-500'>SHOP</div>
                                </a>

                            </Link>
                            <div className='hover:text-neutral-500 cursor-pointer' onClick={() => { setIsOpenCate(!isOpenCate) }}>CATEGORIES {isOpenCate ? <span className='text-[14px]'>▲</span> : <span className='text-[14px]'>▼</span>}</div>
                            <Link href="/contacts">
                                <a>
                                    <div className='hover:text-neutral-500'>CONTACT US</div>
                                </a>
                            </Link>
                        </div>
                        <div className='hidden space-x-4 md:flex text-[16px] '>

                            <Link href="/cart">
                                <a>
                                    <motion.div whileHover={{ scale: 1.1 }}><FaShoppingCart /></motion.div>
                                </a>
                            </Link>
                            <Link href="/account">
                                <a>
                                    <motion.div whileHover={{ scale: 1.1 }}><FaUserAlt /></motion.div>
                                </a>
                            </Link>

                        </div>
                        <div className='md:hidden flex justify-center items-end'>
                            {isOpenMenu ? <motion.div whileHover={{ scale: 1.1 }} onClick={() => { setIsOpenMenu(!isOpenMenu) }}>
                                <div className=''><FaRegWindowClose /></div>
                            </motion.div> : <motion.div whileHover={{ scale: 1.1 }} onClick={() => { setIsOpenMenu(!isOpenMenu) }}>
                                <div className=''><FaBars /></div>
                            </motion.div>}

                        </div>
                    </div>
                    {isOpenMenu ? <div className='md:hidden flex fixed flex-col justify-start left-[78%] rounded-md top-20 py-4 px-6 font-[MinimalRecular]  bg-[#282828] text-white'>
                        <div className='pt-2'>
                            <Link href="/shop">
                                <a>
                                    Shop
                                </a>
                            </Link>
                        </div>
                        <div className='pt-2'>
                            <Link href="/categories">
                                <a>
                                    Categories
                                </a>
                            </Link>
                        </div>
                        <div className='flex flex-row pt-2'>
                            <motion.div whileHover={{ scale: 1.1 }}><FaShoppingCart /></motion.div>
                            <motion.div whileHover={{ scale: 1.1 }} className="pl-4"><FaUserAlt /></motion.div>
                        </div>
                    </div> : <div className=''></div>}
                    {isOpenCate ? <div className='md:flex hidden flex-col fixed w-[10%] left-[44%] justify-start top-[4.5rem] p-4 bg-[#282828] text-white font-[MinimalRecular]  rounded-md'>
                        <Link href="/">
                            <a className='p-2 hover:bg-red-500 rounded transition-colors hover:text-white'>Keyboards</a>
                        </Link>
                        <Link href="/">
                            <a className='p-2 hover:bg-red-500 rounded transition-colors hover:text-white'>Keycaps</a>
                        </Link>
                        <Link href="/">
                            <a className='p-2 hover:bg-red-500 rounded transition-colors hover:text-white'>Switchese</a>
                        </Link>
                        <Link href="/">
                            <a className='p-2 hover:bg-red-500 rounded transition-colors hover:text-white'>Deskmat</a>
                        </Link>
                    </div> :
                        <div></div>}
                </motion.header>
            }




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