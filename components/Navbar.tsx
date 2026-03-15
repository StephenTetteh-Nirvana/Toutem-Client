'use client'

import { Menu, X } from "lucide-react"
import { useState } from "react"
import { ShoppingCart, CircleUserRound } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import MobileNavMenu from "./navbar/MobileNavMenu"

const Navbar = () => {
  const [open,setOpen] = useState(false)

  const toggleMenu = () => {
  setOpen(prev => !prev)
  }

  return (
    <>
    <div 
      className="absolute top-5 left-5 w-[90%] md:w-[95%] rounded-full mx-auto px-10 
      flex justify-between items-center py-3 h-[60px] bg-white/10 backdrop-blur-md 
      border border-white/20 rounded-2xl shadow-lg z-50"
    >
      <div className="flex gap-4 items-center">
        <Image
          src="/icons/logo.png"
          alt="Logo"
          width={500}
          height={500}
          className="w-auto h-auto"
        />
        <h3 className="font-[500] text-white">EliteFits</h3>
      </div>

      <ul className="hidden sm:flex sm:gap-2 font-[400] text-white">
        <li>HOME</li>
        <li>SHOP</li>
        <li>CONTACT US</li>
      </ul>

      <div>
        <button className="cursor-pointer sm:hidden">
          {!open ? 
          <Menu color="white" onClick={()=>toggleMenu()}/> 
          : 
          <X color="white" onClick={()=>toggleMenu()}/>
          }
        </button>
        <div className="hidden sm:flex sm:gap-4">
          <ShoppingCart color="white" className="cursor-pointer" />
          <CircleUserRound color="white" className="cursor-pointer" />
        </div>
      </div>
    </div>

      {/* MOBILE NAVIGATION  */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{height: 0, opacity: 0}}
            animate={{height: 200, opacity: 1}}
            exit={{height: 0, opacity: 0}} 
            className="absolute top-10 left-5 z-10 w-[90%] bg-white/10 backdrop-blur-md flex flex-col items-center justify-center  
        border border-white/20 rounded-xl shadow-lg overflow-hidden"
          >
            <MobileNavMenu/>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar