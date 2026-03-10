import Advertisement from "@/components/home/Advertisement";
import Aromatherapy from "@/components/home/Aromatherapy";
import BestSellers from "@/components/home/BestSellers";
import Blog from "@/components/home/Blog";
import HeroSection from "@/components/home/HeroSection";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <div>
      <main className="py-7 px-5 sm:px-15">
        <HeroSection/>
        <Services/>
        <Aromatherapy/>
        <BestSellers/>
        <Advertisement/>
        {/* <Blog/> */}
      </main>
    </div>
  )
}
