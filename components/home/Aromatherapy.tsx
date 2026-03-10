import Image from "next/image"

const Aromatherapy = () => {
  return (
    <section className="mt-20 flex flex-col sm:flex-row sm:justify-between gap-3 items-center justify-center">
      <div className="relative sm:-left-35">
        <Image
          src="/images/aromatherapyBackground.png"
          width={500}
          height={500}
          alt="cover"
          className="w-auto h-auto sm:w-[250px]"
        />
        <Image
          src="/images/aromatherapyImage.png"
          width={500}
          height={500}
          alt="cover"
          className="w-auto h-auto absolute top-1/2 left-1/2 transform -translate-x-[45%] -translate-y-[60%]
          sm:w-[400px] sm:ml-15"
        />
      </div>

      <div className="flex flex-col gap-3 w-[75%] sm:w-[500px]">
        <h2 className="text-xl text-center sm:text-2xl sm:text-end sm:font-bold">Improve your well-being with Aromatherapy</h2>
        <p className="text-center text-[14px] sm:text-end sm:text-[15px]">
            Diffusing can be exactly what you need to add purpose and focus to your daily tasks. 
            We've got tons of fun diffuser blends, with scents to suit every mood, day and situation.
        </p>
        <button className="text-white bg-primary text-center rounded-md py-3 sm:mt-4">EXPLORE THE COLLECTION</button>
      </div>
    </section>
  )
}

export default Aromatherapy