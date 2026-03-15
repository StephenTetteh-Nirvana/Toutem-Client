import { Card } from "../ui/card"
import Image from "next/image"

const ProductCard = () => {
    return (
        <Card className="p-0 m-0 h-[200px] lg:h-[300px] group border-0 bg-transparent shadow-none">
            <Image
                src="/images/productImage6.jpg"
                width={700}
                height={700}
                alt='productImage' 
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105 cursor-pointer brightness-95"
            />
        </Card>
    )
}

export default ProductCard