"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { Button } from "../ui/button"

const ExploreCollection = () => {
  return (
    <section className="mt-20 flex flex-col md:flex-row md:justify-between md:px-10 gap-3 items-center justify-center">
      <motion.div
        initial={{ scale: 0.80, opacity: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Image
          src="/images/productImage6.jpg"
          width={500}
          height={500}
          alt="cover"
          className="w-[300px] h-auto md:w-[350px]"
        />
      </motion.div>

      <motion.div
        initial={{ scale: 0.80, opacity: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }} 
        className="flex flex-col gap-3 w-[75%] sm:w-[500px]">
        <h2 className="text-xl text-center sm:text-2xl sm:text-end sm:font-bold">Improve your style with Rolex</h2>
        <p className="text-center text-[14px] sm:text-end sm:text-[15px]">
          Precision and craftsmanship define every Rolex timepiece, 
          bringing purpose and confidence to every moment of your day.
          With a legacy of excellence and timeless design, each watch is built to complement your style.
        </p>
        <Button className="text-white bg-primary text-center rounded-md py-5 md:mt-4 cursor-pointer">EXPLORE THE COLLECTION</Button>
      </motion.div>
    </section>
  )
}

export default ExploreCollection