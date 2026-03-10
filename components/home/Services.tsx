import Image from "next/image"

const services = [
  {
    icon:"/icons/essential-oils.png",
    text: "Essential oils"
  },
  {
    icon:"/icons/natural-cosmetics.png",
    text: "Natural cosmetics"
  },
  {
    icon:"/icons/diffusers.png",
    text: "Diffusers",
    backgroundImage: "#5FD788"
  },
  {
    icon:"/icons/aromatherapy.png",
    text: "Aromatherapy"
  }
]

const Services = () => {
  return (
    <div className="mx-auto grid grid-cols-2 lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 mt-10 gap-3">
      {services.map((service)=>(
        <div key={service.text} className="flex flex-col items-center justify-center
         bg-[#F9FAFB] shadow shadow-black/30 rounded-2xl p-2 gap-1"
        >
          <Image
            src={service.icon}
            width={500}
            height={500}
            alt='Service' 
            className="w-[50px] h-auto sm:w-[60px]"
          />
          <p className="text-primary text-center text-[15px]">{service.text}</p>
        </div>
      ))}
    </div>
  )
}

export default Services