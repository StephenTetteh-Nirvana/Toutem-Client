import { ShoppingCart,CircleUserRound } from "lucide-react"

const MobileNavMenu = () => {
    return (
      <div 
        className="mt-5"
      > 
        <ul className="flex flex-col items-center text-white mt-5">
          <li 
            className="hover:border-b hover:border-slate-200 cursor-pointer"
          >
            HOME
          </li>
          <li 
            className="hover:border-b hover:border-slate-200 cursor-pointer"
          >
            FAQ
          </li>
          <li 
            className="hover:border-b hover:border-slate-200 cursor-pointer"
          >
            SHOP
          </li>
          <li 
            className="hover:border-b hover:border-slate-200 cursor-pointer"
          >
            CONTACT
          </li>
        </ul>
        <div className="mt-3 flex gap-3">
          <ShoppingCart color="white" className="cursor-pointer" />
          <CircleUserRound color="white" className="cursor-pointer" />
        </div>
      </div>
    )
}

export default MobileNavMenu