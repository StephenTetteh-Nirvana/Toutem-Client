import Banner from "@/components/home/Banner";
import ExploreCollection from "@/components/home/ExploreCollection";
import BestSellers from "@/components/home/BestSellers";
import CarouselSection from "@/components/home/CarouselSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";

export default function Home() {
  return (
    <div>
      <main>
        <CarouselSection/>
        <FeaturedProducts/>
        {/* <ExploreCollection/>
        <BestSellers/> */}
        <Banner/>
        {/* <Blog/> */}
      </main>
    </div>
  )
}
