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
import { motion } from "motion/react"
import Autoplay from "embla-carousel-autoplay"


import data from "@/carouselData"
import Image from "next/image"
import Link from "next/link"

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
                    className="absolute top-0 w-full h-full flex flex-col items-center justify-center z-[999]"
                  >
                    <motion.h1 
                      initial={{ y: 10, opacity: 0}}
                      animate={{ y: 0 ,opacity: 1}}
                      transition={{ delay: 0.5 }}
                      className="text-white text-[40px] md:text-[50px] text-center font-bold"
                    >
                      {item.title}
                    </motion.h1>
                    <motion.p 
                      initial={{ y: 10, opacity: 0}}
                      animate={{ y: 0 ,opacity: 1}}
                      transition={{ delay: 0.8 }}
                      className="text-white text-center text-[15px] md:text-[20px] md:w-[700px] w-[90%]">{item.description}
                    </motion.p>

                    {/* BUTTONS  */}
                    <motion.div
                      initial={{ scale: 0.96, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="mt-5 flex items-center gap-5 z-10"
                    >
                      <Link href="/products">
                      <Button
                        className="rounded-full px-6 py-5 text-white hover:cursor-pointer bg-green-700 group flex items-center gap-2 hover:bg-green-800 transition-all text-[15px]"
                      >
                        Shop Now
                        <MoveRight className="ml-1 group-hover:ml-3 transition-all duration-300" />
                      </Button>
                      </Link>

                      <Button
                        variant="outline"
                        className="rounded-full px-6 py-5 text-black border-white hover:bg-white hover:cursor-pointer transition-all text-[15px]"
                      >
                        Learn More
                      </Button>
                    </motion.div>

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
                    <div 
                      className="hidden lg:flex absolute top-0 flex items-center justify-between w-full h-full px-10"
                    >
                      <CarouselPrevious 
                        className="pointer-events-auto static border border-white cursor-pointer bg-transparent h-10 w-10 text-white"
                      />
                      <CarouselNext 
                        className="pointer-events-auto static border border-white cursor-pointer bg-transparent h-10 w-10 text-white" 
                      />
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
