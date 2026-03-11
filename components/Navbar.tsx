'use client'

import { Menu, X } from "lucide-react"
import { useState } from "react"
import { ShoppingCart, CircleUserRound } from "lucide-react"
import Image from "next/image"

const Navbar = () => {
  const [open,setOpen] = useState(false)

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
        <li>FAQ</li>
        <li>CONTACT US</li>
      </ul>

      <div>
        <button className="cursor-pointer sm:hidden">
          {!open ? 
          <Menu color="white" onClick={()=>setOpen(true)}/> 
          : 
          <X color="white" onClick={()=>setOpen(false)}/>
          }
        </button>
        <div className="hidden sm:flex sm:gap-4">
          <ShoppingCart color="white" className="cursor-pointer" />
          <CircleUserRound color="white" className="cursor-pointer" />
        </div>
      </div>
    </div>

    {/* MOBILE NAVIGATION  */}
      <div className={`absolute top-10 left-5 w-[90%] bg-white/10 backdrop-blur-md 
      border border-white/20 rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${open ? "h-56 opacity-100 visible z-10" : "h-0 opacity-0 invisible"} 
        sm:hidden flex flex-col gap-2 justify-center items-center bg-[#F9FAFB]`}
      >
        <ul className="flex flex-col items-center text-white mt-5">
          <li className="hover:border-b hover:border-slate-200 cursor-pointer">HOME</li>
          <li className="hover:border-b hover:border-slate-200 cursor-pointer">FAQ</li>
          <li className="hover:border-b hover:border-slate-200 cursor-pointer">SHOP</li>
          <li className="hover:border-b hover:border-slate-200 cursor-pointer">CONTACT</li>
        </ul>
        <div className="mt-3 flex gap-3">
          <ShoppingCart color="white" className="cursor-pointer" />
          <CircleUserRound color="white" className="cursor-pointer" />
        </div>
      </div>
    </>
  )
}

export default Navbar