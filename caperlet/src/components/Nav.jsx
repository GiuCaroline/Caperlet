import '../assets/styles/App.css'
import { Sun, LogIn, ShoppingBag } from "lucide-react";

function Nav() {
    return(
    <nav className="bg-(--c3) shadow-md py-6 px-[4rem] flex items-center montserrat-f">
        <h1 className="text-4xl font-extrabold ">
          <span className="text-(--c4)">CA</span>
          <span className="text-white">PERLET</span>
        </h1>
        <div className="text-white flex items-center px-[10rem] text-[1.2rem] list-none gap-x-[5rem]">
          <li>Home</li>
          <li>Loja</li>
          <li>Sobre nós</li>
          <li>Contato</li>
        </div>
        <div className="flex gap-x-[1rem] items-center">
          <Sun className="w-16 text-white cursor-pointer"/>
          <button className="p-[0.2rem] flex items-center w-30 gap-x-2 bg-transparent border-2 border-solid text-(--c4) rounded-4xl cursor-pointer">
            <LogIn className="text-(--c4) w-16"/>
            Login
          </button>
          <ShoppingBag className="w-16 text-white cursor-pointer"/>
        </div>
    </nav>
    )
}

export default Nav