'use client'

import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const Navbar = () => {
  const [open,setOpen] = useState(false)

  return (
    <>
    <div className="absolute top-5 left-5 w-[95%] md:w-[97%] rounded-full mx-auto  px-10 flex justify-between items-center shadow shadow-gray-200 py-3 h-[60px]">
      <div className="flex gap-4 items-center">
        <Image
          src="/icons/logo.png"
          alt="Logo"
          width={500}
          height={500}
          className="w-auto h-auto"
        />
        <h3 className="font-[500] text-white">Toutem</h3>
      </div>

      <ul className="hidden sm:flex sm:gap-2 font-[400] text-white">
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>SHOP</li>
        <li>CONTACT</li>
      </ul>

      <div>
        <button className="cursor-pointer sm:hidden">
          {!open ? <Menu color="white" onClick={()=>setOpen(true)}/> : <X color="white" onClick={()=>setOpen(false)}/>}
        </button>
        <div className="hidden sm:flex sm:gap-4">
          <Image
            src="/icons/shoppingBag.png"
            width={500}
            height={500}
            alt='Shopping Bag'
            className="w-auto h-auto"
          />
            <Image
            src="/icons/search.png"
            width={500}
            height={500}
            alt='Search'
            className="w-auto h-auto"
          />
        </div>
      </div>
    </div>

    {/* MOBILE NAVIGATION  */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "h-56 opacity-100 visible" : "h-0 opacity-0 invisible"} 
        sm:hidden flex flex-col gap-2 justify-center items-center bg-[#F9FAFB]`}
      >
        <ul className="flex flex-col items-center text-white">
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>SHOP</li>
          <li>CONTACT</li>
        </ul>
        <div className="mt-3 flex gap-3">
          <Image
            src="/icons/shoppingBag.png"
            width={500}
            height={500}
            alt='Shopping Bag'
            className="w-auto h-auto"
          />
          <Image
            src="/icons/search.png"
            width={500}
            height={500}
            alt='Search'
            className="w-auto h-auto"
          />
        </div>
      </div>
    </>
  )
}

export default Navbar