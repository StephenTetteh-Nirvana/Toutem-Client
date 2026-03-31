import { Card } from "../ui/card"
import { Button } from "../ui/button"
import { Heart, ShoppingCart } from "lucide-react"
import Image from "next/image"

const ProductCard = () => {
    return (
      <div className="flex flex-col gap-1">
        <Card 
          className="p-0 m-0 relative h-[200px] lg:h-[300px] group ring-0"
        >
          <Image
            src="/images/productImage6.jpg"
            width={700}
            height={700}
            alt='productImage' 
            className="w-full h-full object-contain object-center 
            transition-transform duration-300 group-hover:scale-105 cursor-pointer"
          />

          {/* Favorite button  */}
          <Button
          className=" absolute top-10 right-2 bg-black/80 flex items-center justify-center rounded-full h-8 w-8 cursor-pointer border border-slate-300 hover:scale-110 transition-transform duration-300"
          >
            <Heart color="white" />
          </Button>
        </Card>

        {/* PRODUCT NAME AND PRICE  */}
        <div className="w-full px-2 flex items-center justify-between">
            <div className="flex flex-col">
              <p className=" line-clamp-1 text-black text-[15px] font-semibold">Nike BackPack</p>
              <p className="text-black text-[14px]">GHS 400</p>
            </div>
            <Button 
              className="bg-slate-200 flex items-center justify-center rounded-full h-8 w-8 cursor-pointer border border-slate-300 hover:scale-110 transition-transform duration-300"
            >
              <ShoppingCart color="black" />
            </Button>
          </div>
      </div>

    )
}

export default ProductCard