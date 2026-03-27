import { Card } from "../ui/card"
import { Button } from "../ui/button"
import { Plus } from "lucide-react"
import Image from "next/image"

const ProductCard = () => {
    return (
        <Card 
          className="relative p-0 m-0 h-[200px] lg:h-[300px] group border-0 
          bg-transparent shadow-none rounded-sm"
        >
          <Image
            src="/images/productImage6.jpg"
            width={700}
            height={700}
            alt='productImage' 
            className="w-full h-full object-cover object-center 
            transition-transform duration-300 group-hover:scale-105 cursor-pointer"
          />

          <div className="absolute bottom-0 w-full bg-black/80 shadow-lg px-2 py-2 flex items-center justify-between">
            <div className="flex flex-col">
              <p className="text-white text-[14px] font-bold line-clamp-1 tracking-wider">Nike BackPack</p>
              <p className="text-white">GHS 400</p>
            </div>
            <Button 
              className="bg-white flex items-center justify-center rounded-full h-8 w-8 cursor-pointer"
            >
              <Plus color="black"/>
            </Button>
          </div>
        </Card>
    )
}

export default ProductCard