import { ShoppingCart,CircleUserRound } from "lucide-react"

const MobileNavMenu = () => {
    return (
      <div 
        className=""
      > 
        <ul className="flex flex-col">
          <li 
            className="hover:border-b hover:border-slate-200 cursor-pointer"
          >
            HOME
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
          <ShoppingCart className="cursor-pointer" />
          <CircleUserRound className="cursor-pointer" />
        </div>
      </div>
    )
}

export default MobileNavMenu