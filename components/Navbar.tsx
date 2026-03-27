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
      className="flex justify-between items-center py-3 px-8 h-[60px] z-50"
    >
      <div className="flex gap-2 items-center">
        <Image
          src="/icons/logo.png"
          alt="Logo"
          width={400}
          height={400}
          className="w-auto h-auto"
        />
        <h3 className="font-[500] text-lg">EliteFits</h3>
      </div>

      <ul className="hidden sm:flex sm:gap-2 font-[400]">
        <li>HOME</li>
        <li>SHOP</li>
        <li>CONTACT US</li>
      </ul>

      <div>
        <button className="cursor-pointer sm:hidden">
          {!open ? 
          <Menu onClick={()=>toggleMenu()}/> 
          : 
          <X onClick={()=>toggleMenu()}/>
          }
        </button>
        <div className="hidden sm:flex sm:gap-4">
          <ShoppingCart className="cursor-pointer" />
          <CircleUserRound className="cursor-pointer" />
        </div>
      </div>
    </div>

      {/* MOBILE NAVIGATION  */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{height: 0, opacity: 0}}
            animate={{height: 150, opacity: 1}}
            exit={{height: 0, opacity: 0}} 
            className="w-full flex flex-col items-center justify-center overflow-hidden"
          >
            <MobileNavMenu/>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar