import { Card } from "../ui/card"
import { Button } from "../ui/button"
import { Heart, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
      <div className="flex flex-col gap-1">
        <Link href={`/products/productPage/${product.id}`}>
        <Card 
          className="p-0 m-0 relative h-[200px] lg:h-[300px] group ring-0"
        >
            <img
              src={product.image}
              alt='productImage' 
              className="w-full h-full object-contain object-center 
              transition-transform duration-300 group-hover:scale-105 cursor-pointer"
            />
     
      
          {/* <Image
            src={product.image}
            width={700}
            height={700}
            alt='productImage' 
            className="w-full h-full object-contain object-center 
            transition-transform duration-300 group-hover:scale-105 cursor-pointer"
          /> */}

          {/* Favorite button  */}
          <Button
          className="absolute top-10 right-2 bg-black/80 flex items-center justify-center 
          rounded-full h-8 w-8 cursor-pointer
          hover:scale-110 transition-transform duration-300 z-50"
          >
            <Heart color="white" />
          </Button>
        </Card>
      </Link>


        {/* PRODUCT NAME AND PRICE  */}
        <div className="w-full px-2 flex items-center justify-between">
            <div className="flex flex-col">
              <p className=" line-clamp-1 text-black text-[15px] font-semibold">{product?.title}</p>
              <p className="text-black text-[14px]">GHS {product?.price}</p>
            </div>
            <Button 
              className="bg-slate-200 flex items-center justify-center rounded-full h-8 w-8 
              cursor-pointer border border-slate-300 hover:scale-110 transition-transform duration-300"
            >
              <ShoppingCart color="black" />
            </Button>
          </div>
      </div>

    )
}

export default ProductCard