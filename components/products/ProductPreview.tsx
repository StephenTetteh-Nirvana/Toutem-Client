"use client"

import { useParams } from "next/navigation"
import { dummyProducts } from "@/dummyProducts"
import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"
import Image from "next/image"

const ProductPreview = () => {
  const { id } = useParams()
  const foundProduct = dummyProducts.find((p)=> p.id === Number(id))

  return ( 
    <div className="flex flex-col gap-2 md:flex-row md:items-center">
      {/* using default local image for now, will replace with dynamic image later  */}
      <div className="flex items-center justify-center">
        <Image
          src="/images/productImage6.jpg"
          alt="productDisplay here"
          width={400}
          height={400}
          className="w-[400px] h-[400px]"
        />
      </div>


      {/* product title and description  */}
      <div className="px-10">
        <h1 className="border-b border-slate-600 font-semibold pb-2">{foundProduct?.title}</h1>
        <p className="mt-3 text-gray-600 text-sm mb-4">{foundProduct?.description}</p>
        <p className="text-lg font-semibold">GHS {foundProduct?.price}</p>

        {/* product quantity and add to cart button */}
        <div className="mt-2 flex items-center gap-4 md:flex-flex-col">
          <Button 
            className="bg-slate-200 flex items-center justify-center rounded-md h-8 w-8 
            cursor-pointer border-0 hover:scale-110 transition-transform duration-300"
          >
            <Minus color="black" />
          </Button>

           <p>1</p>

          <Button 
            className="bg-slate-200 flex items-center justify-center rounded-md h-8 w-8 
            cursor-pointer border-0 hover:scale-110 transition-transform duration-300"
          >
            <Plus color="black" />
          </Button>

         {/* add to cart button  */}
          <Button 
            className="bg-black/90 text-white rounded-md w-[200px] py-4 cursor-pointer 
            hover:bg-gray-800 transition-colors duration-300"
          > 
            Add To Cart 
          </Button>
        </div>
      </div>
      {/* additional space  */}
      <div className="h-[120px] flex md:hidden">
      
      </div>
    </div>
  )
}

export default ProductPreview;