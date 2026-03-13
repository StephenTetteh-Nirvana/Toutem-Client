import Image from "next/image"
import { Button } from "../ui/button"

const Advertisement = () => {
  return (
    <div className="relative h-[70vh] w-full mt-15">

      {/* MOBILE VIEW  */}
      <div className="sm:hidden">
        <Image
          src="/images/productImage5.jpg"
          alt="AdImage"
          fill
          className="object-cover brightness-40"
        />
  
        <div className="flex flex-col gap-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%]">
          <p className="text-white text-center text-2xl font-semibold  w-full">
            Upgrade your wardrobe with our latest arrivals and timeless essentials.
          </p>
          <Button 
            variant="outline"
            className="bg-white rounded-full py-2 cursor-pointer w-[200px] mx-auto text-white font-bold text-black"
          >
            SHOP ALL
          </Button>
        </div>
      </div>

      {/* TABLETS AND LAPTOPS VIEW  */}
      <div className="hidden sm:flex sm:justify-between h-full">
        <div className="bg-primary flex flex-col items-start gap-3 justify-center px-15">
          <p className="text-white text-3xl font-semibold w-[80%]">
            Upgrade your wardrobe with our latest arrivals and timeless essentials.
          </p>
          <button className="bg-white rounded-md py-2 w-[50%] font-semibold">SHOP ALL</button>
        </div>

        <div className="w-full h-full">
          <Image
            src="/images/productImage5.jpg"
            alt="AdImage"
            width={900}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
  )
}

export default Advertisement