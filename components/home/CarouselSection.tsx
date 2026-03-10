"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { useState, useEffect } from "react"
import { Button } from "../ui/button"
import { MoveRight } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"


import data from "@/carouselData"
import Image from "next/image"

const CarouselSection = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="w-full h-[100vh]">
      <Carousel setApi={setApi} 
        className="w-full rounded-none relative"
        plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      >
        <CarouselContent className="ml-0">
          {data.map((item, index) => (
            <CarouselItem key={index} className="pl-0">
              <Card className="rounded-none border-0 p-0 w-full">
                <CardContent className="relative w-full h-full p-0 flex items-center justify-center">
                  <Image 
                    src={item.image}
                    width={1000}
                    height={1000}
                    sizes="100vw"
                    alt="CarouselImage"
                    className="w-full h-[100vh] object-cover object-center relative brightness-40"
                  />
                  <div 
                    className="absolute top-0 w-full h-full flex flex-col items-center justify-center"
                  >
                    <h1 className="text-white text-[40px] md:text-[50px] text-center font-bold">{item.title}</h1>
                    <p className="text-white text-center text-[15px] md:text-[25px] md:w-[700px] w-[90%]">{item.description}</p>

                    {/* BUTTONS  */}
                    <div className="mt-5 flex items-center gap-5 transition-all ease-in-out">
                      <Button 
                        className="rounded-full p-4 bg-0 text-white cursor-pointer bg-green-700 group"
                      >
                        Shop Now
                        <MoveRight className="group-hover:ml-2 transition-[margin] ease-in-out" />
                      </Button>
                      <Button 
                        variant="outline"
                        className="rounded-full p-4 bg-0 text-white cursor-pointer"
                      >
                        Learn More
                      </Button>
                    </div>

                    {/* SLIDER INDEX INDICATORS  */}
                    <div className="absolute bottom-5 flex items-center gap-2">
                      {data.map((_, i) => (
                        <div
                          key={i}
                          onClick={()=> api?.scrollTo(i)}
                          className={`h-2 w-2 rounded-sm  transition-all cursor-pointer ${
                            current === i + 1 ? "bg-white w-6" : "bg-white/50"
                          }`}
                        />
                    ))}
                    </div>

                    {/* CAROUSEL SLIDER BUTTONS  */}
                    <div className="hidden lg:flex absolute top-0 flex items-center justify-between w-full h-full px-10">
                      <CarouselPrevious className="static border border-white cursor-pointer bg-0 h-10 w-10 text-white" />
                      <CarouselNext className=" static border border-white cursor-pointer bg-0 h-10 w-10 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div> */}
    </div>
  )
}

export default CarouselSection
