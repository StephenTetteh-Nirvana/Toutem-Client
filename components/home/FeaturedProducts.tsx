'use client'

import Image from "next/image"
import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { motion } from "motion/react"
import Link from "next/link"

const featuredProducts = [
  {
    image:"/images/productImage6.jpg",
  },
  {
    image:"/images/productImage6.jpg",
  },
  {
    image:"/images/productImage6.jpg",
  },
  {
    image:"/images/productImage6.jpg",
  }
]

const FeaturedProducts = () => {
  return (
    <div className="mt-4 px-5">
      <div className="flex flex-col gap-1">
        <h1 className="text-center text-[30px] font-italic">Featured Products</h1>
        <p className="text-center text-slate-400 -mt-2">FIND YOUR NICHE</p>
      </div>

      {/* PRODUCT CARDS  */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }} 
        className="mx-auto grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 mt-5 gap-2"
      >
        {featuredProducts.map((product,index)=>(
          <Card key={index} className="p-0 m-0 h-[200px] lg:h-[270px] group border-0 bg-transparent shadow-none">
            <Image
              src={product.image}
              width={700}
              height={700}
              alt='productImage' 
              className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105 cursor-pointer brightness-95"
            />
          </Card>
        ))}
      </motion.div>

      {/* BUTTON TO ROUTE TO PRODUCTS PAGE  */}
      <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ duration: 0.6, delay: 0.5 }} 
        className="mt-7 w-full flex items-center justify-center"
      >
        <Link
          href="/products"
        >
          <Button
            variant="outline" 
            className="rounded-full py-5 px-10 border border-black  cursor-pointer hover:bg-black hover:text-white hover:font-semibold">
            BROWSE ALL PRODUCTS
          </Button>
        </Link>
      </motion.div>
    </div>

  )
}

export default FeaturedProducts