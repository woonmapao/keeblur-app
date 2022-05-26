import React from 'react'
import ProductCard from './productCard'
const FeaturedProducts = () => {
    return (
        <>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-10 pt-5 pb-6'>
                <ProductCard image="images/bg1.jpeg" title="JTK Hanami" price="฿4,080" />
                <ProductCard image="images/bg2.jpeg" title="GMK Zìmō" price="฿6,500" />
                <ProductCard image="images/bg3.jpeg" title="ePBT Kavala" price="฿349" />
                <ProductCard image="images/bg4.jpeg" title="JTK Hanami" price="฿3,100" />
                <ProductCard image="images/products/pd1.jpeg" title="Mechlovin' Exclusive E6-V2" price="฿2,000" />
                <ProductCard image="images/products/pd2.webp" title="C³ Banana Split Switch (10 switches)" price="฿400" />
            </div>

        </>
    )
}

export default FeaturedProducts