import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { motion } from 'framer-motion'


interface Props{
    image:any,
    title:String,
    price:String
}

const ProductCard = ({image,title,price}:Props) => {
  return (
      
    <div className=' '>
        <motion.div whileHover={{scale:1.1}} className=' relative hover:border-2 p-4 transition-all duration-100' >
            <img src={image} className='mb-2' alt="" width={300}/>
            <h2 className='mb-2'>{title}</h2>
            <span>{price}</span>
            <div className=' absolute bottom-4 right-3 bg-black text-white p-2 hover:bg-red-600'><FaShoppingCart/></div>
        </motion.div>
        
        
       
        
    </div>
    
  )
}

export default ProductCard