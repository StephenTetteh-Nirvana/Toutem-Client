import Image from "next/image"

const Footer = () => {
  return (
    <div className="bg-[#F3F4F6] mt-15">
    <section className="flex flex-col items-center justify-center py-5 
      sm:flex-row sm:justify-between sm:px-10"
    >
      <div className="flex gap-4">
        <Image
          src="/icons/logo.png"
          alt="Logo"
          width={500}
          height={500}
          className="w-auto h-auto"
        />
        <h4 className="font-[500]">Toutem</h4>
      </div>

      <div className="flex flex-col gap-6 mt-10 sm:flex-row sm:justify-center">
        <div>
          <h2 className="text-primary text-center text-[15px] font-[600]">Customer Support</h2>
          <ul className="text-center text-[14px] mt-2">
           <li>Shipping</li>
           <li>Free Return</li>
           <li>Track your Order</li>
           <li>Gift Cards</li>
          </ul>
        </div>
        <div>
          <h2 className="text-primary text-center text-[15px] font-[600]">About Us</h2>
          <ul className="text-center text-[14px] mt-2">
           <li>Our Values</li>
           <li>Sustainability</li>
           <li>Brand Ambassadors</li>
           <li>Fitness Professionals</li>
          </ul>
        </div>
        <div>
          <h2 className="text-primary text-center text-[15px] font-[600]">Help</h2>
          <ul className="text-center text-[14px] mt-2">
           <li>Leader Support</li>
           <li>Pleasant Grove Product Center</li>
           <li>Brand Ambassadors</li>
           <li>Recall-Important Safety Information</li>
          </ul>
        </div>
      </div>
    </section>


    <section className="mt-10 text-center pb-4">
      <p className="text-[14px] text-slate-500">Copyright &copy; 2025 Toutem</p>
      <p className="text-center text-[13px] text-slate-500">All Rights Reserved</p>
    </section>
    
    </div>
  )
}

export default Footer