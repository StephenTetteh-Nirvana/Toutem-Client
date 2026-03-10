import Advertisement from "@/components/home/Advertisement";
import Aromatherapy from "@/components/home/Aromatherapy";
import BestSellers from "@/components/home/BestSellers";
import Blog from "@/components/home/Blog";
import CarouselSection from "@/components/home/CarouselSection";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <div>
      <main>
        <CarouselSection/>
        <Services/>
        <Aromatherapy/>
        <BestSellers/>
        <Advertisement/>
        {/* <Blog/> */}
      </main>
    </div>
  )
}
