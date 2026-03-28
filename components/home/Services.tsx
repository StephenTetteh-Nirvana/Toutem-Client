import { Card} from "../ui/card"
import { ShieldCheck, DollarSign, Headset } from "lucide-react"

const Services = () => {
    return (
        <div className="mt-10 w-full px-6 md:px-10">
          <h1 className="text-center text-[30px] md:text-[35px] font-semibold">Why Shop With Us?</h1>

          {/* // CARDS  */}
          <div className="mt-5 flex flex-col gap-10 items-center md:flex-row md:items-center">

            <div className="flex-1">
              <Card className="px-3 flex items-center justify-center py-10 shadow-lg">
                <div className="flex flex-col gap-1 items-center justify-center">
                  <div className="rounded-full flex items-center justify-center bg-slate-100 w-15 h-15">
                    <DollarSign size={30} color="#2666CF" />
                  </div>
                  <h1 className="text-center text-[18px]">Secure Payments</h1>
                  <p 
                    className="text-center text-slate-500"
                  >
                    Shop with confidence using our encrypted and trusted payment methods.
                  </p>
                </div>
              </Card>
            </div>

            <div className="flex-1">
              <Card className="px-3 flex items-center justify-center py-10 shadow-lg">
                <div className="flex flex-col gap-1 items-center justify-center">
                  <div className="rounded-full flex items-center justify-center bg-slate-100 w-15 h-15">
                    <ShieldCheck size={30} color="#2666CF" />
                  </div>
                  <h1 className="text-center text-[18px]">Quality Products</h1>
                  <p 
                    className="text-center text-slate-500"
                  >
                    We carefully select and verify all products to ensure you receive only the best quality items.
                  </p>
                </div>
              </Card>
            </div>

            <div className="flex-1">
              <Card className="px-3 flex items-center justify-center py-10 shadow-lg">
                <div className="flex flex-col gap-1 items-center justify-center">
                  <div className="rounded-full flex items-center justify-center bg-slate-100 w-15 h-15">
                    <Headset size={30} color="#2666CF" />
                  </div>
                  <h1 className="text-center text-[18px]">Customer Support</h1>
                  <p 
                    className="text-center text-slate-500"
                  >
                    Our support team is always ready to help and make sure your shopping experience is smooth.
                  </p>
                </div>
              </Card>
            </div>

          </div>
        </div>
    )
}

export default Services