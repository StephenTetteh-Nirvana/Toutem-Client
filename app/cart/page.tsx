import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import Link from "next/link"

const page = () => {
    return (
      <div className="h-[70vh] flex items-center justify-center">
        <div>
          <div className="rounded flex items-center justify-center">
            <ShoppingBag color="black" size={50} className="mx-auto"/>
          </div>


          <h1 className="mt-5 font-bold text-2xl text-center">Shopping Cart</h1>
          <p className="text-center text-slate-600">Your cart is currently empty.</p>
          <Link href="/products">
            <Button className="bg-black/90 text-white rounded-md py-4 cursor-pointer hover:bg-gray-800 transition-colors duration-300 w-full mt-3"> Continue Shopping </Button>
          </Link>
        </div>
      </div>
    )
}

export default page