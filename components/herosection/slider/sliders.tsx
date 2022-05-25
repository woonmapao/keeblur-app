import React, { useEffect, useState, useRef } from 'react'
import SlidersData from './SlidersData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { motion } from 'framer-motion'
import { setInterval } from 'timers';

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
            nextSlide()
        },6000)
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
                        className={index === current ? ' transition-opacity opacity-1 duration-1000 -z-50 ' : ' transition-opacity opacity-5 duration-1000 -z-50 '}
                        key={index}
                    >
                        {index === current && (
                            <img src={slide.image} alt={slide.titleName} className='w-full h-screen relative top-[-100px] -z-50' style={{ transform: `translateY(${offsetY * 0.5}px)` }} />
                        )}
                    </motion.div>
                })}
                <FaArrowAltCircleLeft className='text-white text-xl absolute top-[270px] left-40 md:top-[50%] md:left-24' onClick={prevSlide} />
                <FaArrowAltCircleRight className='text-white text-xl absolute top-[270px] right-40 md:top-[50%] md:right-24' onClick={nextSlide} />
            </section>
        </>
    )
}

export default Sliders