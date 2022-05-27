import React, { useEffect, useState, useRef } from 'react'
import SlidersData from './SlidersData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaAngleDown } from 'react-icons/fa';
import { motion } from 'framer-motion'
import { setInterval } from 'timers';
import {loopdown} from '../../Variants/Variants'

type Sliders = {
    slides: any
}
let count = 0

const Sliders = ({ slides }: Sliders) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => {
        setOffsetY(window.pageYOffset)
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        setSlider()
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    

    const setSlider = ()=>{
        setInterval(()=>{
            // nextSlide()
        },8000)
    }

    const nextSlide = () => {
        count = (count + 1) % length
        setCurrent(count)

    }

    const prevSlide = () => {
        const prevLength = length
        count = (current + prevLength - 1) % length
        setCurrent(count)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

   
    

    return (
        <>
            <section>
                
                {SlidersData.map((slide, index) => {
                    return <motion.div
                        className={index === current ? ' transition-opacity opacity-1 duration-500 -z-50 overflow-hidden' : ' transition-opacity opacity-5 duration-500 -z-50 overflow-hidden '}
                        key={index}
                    >
                        {index === current && (
                            <div className='h-[100vh] w-[100%] object-contain'>
                                <img src={slide.image} alt={slide.titleName} className='absolute w-[100%] h-full object-cover -z-10 top-0' style={{ transform: `translateY(${offsetY * .5}px)` }}  />
                            </div>
                            
                        )}
                    </motion.div>
                })}
                <motion.div ><FaArrowAltCircleLeft className='text-white hover:text-red-600 text-xl absolute top-[80%] left-[25%] md:top-[50%] md:text-white md:left-24 cursor-pointer' onClick={prevSlide} /></motion.div>
                <motion.div ><FaArrowAltCircleRight className='text-white  hover:text-red-600 text-xl absolute top-[80%] right-[25%] md:top-[50%] md:right-24 cursor-pointer' onClick={nextSlide} /></motion.div>
                <motion.div variants={loopdown} initial="initial" animate="animate" className='text-white text-4xl flex justify-center items-center absolute top-[90%] left-[46.5%] md:left-[48%]' ><FaAngleDown /></motion.div>
            </section>
        </>
    )
}

export default Sliders