import Image from "next/image"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

const Banner = () => {
  return (
    <div className="relative h-[70vh] px-10 rounded-lg w-full mt-15">

      {/* MOBILE VIEW  */}
      <div className=" ">
        <Image
          src="/images/productImage5.jpg"
          alt="AdImage"
          fill
          className="object-cover brightness-20"
        />
  
        <div className="flex flex-col gap-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] md:w-[40%]">
          <p className="text-white text-center w-full leading-7 md:leading-9 md:text-[20px]">
            Be the first to get alerted about new arrivals, dicounts and exclusive offers. Subscribe to our newsletter and stay ahead of the fashion curve.
          </p>
          <Input className="border-0 border-b rounded-none focus-visible:border-b focus-visible:ring-0 focus-visible:ring-0 text-slate-300 placeholder:text-slate-300 text-[14px]" 
          placeholder="Enter your email here for updates"/>
          <Button 
            variant="outline"
            className="bg-white rounded-sm py-2 cursor-pointer w-full mx-auto text-white font-bold text-black mt-5"
          >
            SUBSCRIBE NOW
          </Button>
        </div>
      </div>
  
    </div>
  )
}

export default Banner