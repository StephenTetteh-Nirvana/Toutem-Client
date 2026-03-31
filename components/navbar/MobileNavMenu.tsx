"use client"

import { ShoppingCart,CircleUserRound } from "lucide-react"
import { Button } from "../ui/button"
import { usePathname } from "next/navigation"
import Link from "next/link"

const MobileNavMenu = () => {
  const pathname = usePathname()

  return (
    <div 
      className=""
    > 
      <ul className="flex flex-col">
        <Link href="/">
          <li className={pathname === '/' ? 'text-black font-bold' : 'text-gray-600 hover:text-black'}>HOME</li>
        </Link>
        <Link href="/products">
          <li className={pathname === '/products' ? 'text-black font-bold' : 'text-gray-600 hover:text-black'}>SHOP</li>
        </Link>
        <Link href="/contact">
          <li className={pathname === '/contact' ? 'text-black font-bold' : 'text-gray-600 hover:text-black'}>CONTACT US</li>
        </Link>
      </ul>
      <div className="mt-3 flex gap-3">
        <Link href="/cart">
          <ShoppingCart className="cursor-pointer" />
        </Link>
        <CircleUserRound className="cursor-pointer" />
      </div>
      <Button className="mt-2 py-4 bg-black/70 cursor-pointer">
        Get Started
      </Button>
    </div>
  )
}

export default MobileNavMenu