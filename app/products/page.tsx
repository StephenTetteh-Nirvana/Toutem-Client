import Image from "next/image"
import ProductCard from "@/components/products/ProductCard"
import { Button } from "@/components/ui/button"
import { CircleArrowDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent, 
  DropdownMenuGroup, 
  DropdownMenuItem
 } from "@/components/ui/dropdown-menu"

const page = () => {
    return (
      <div>
        <div className="w-full h-[40vh] md:h-[35vh] relative">
          <Image
            src="/images/productImage5.jpg"
            width={1000}
            height={1000}
            alt="BannerImage"
            className="w-full h-full object-cover brightness-40"
          />
          <div className="absolute top-0 flex items-center justify-center w-full h-full">
            <h1 className="text-white text-4xl font-semibold">Products</h1>
            <p></p>
          </div>
        </div>

        {/* PRODUCTS SECTION  */}
        <div className="px-3 py-4">
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  className="flex items-center gap-2 rounded-sm px-5 py-4 cursor-pointer">
                  Categories
                  <CircleArrowDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuItem>Tops</DropdownMenuItem>
                  <DropdownMenuItem>Bottoms</DropdownMenuItem>
                  <DropdownMenuItem>Shoes</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
         
            <Input 
              className="py-4"
              placeholder="Search for products..."
            />
          </div>
          <div className="mx-auto grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 mt-5 gap-2">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>

      </div>

    )
}

export default page