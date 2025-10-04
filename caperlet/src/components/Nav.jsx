import '../assets/styles/App.css'
import { Sun, LogIn } from "lucide-react"
import { Handbag } from "phosphor-react"

function Nav() {
    return(
    <nav className="bg-(--c3) shadow-md py-6 px-[4rem] flex items-center montserrat-f">
        <h1 className="text-4xl font-extrabold cursor-default">
          <span className="text-(--c4)">CA</span>
          <span className="text-white">PERLET</span>
        </h1>
        <div className="text-white flex items-center px-[17rem] text-[1.2rem] list-none gap-x-[5rem]">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Loja</li>
          <li className="cursor-pointer">Sobre nós</li>
          <li className="cursor-pointer">Contato</li>
        </div>
        <div className="flex gap-x-[1rem] items-center">
          <Sun size={23} className="text-white cursor-pointer"/>
          <button className="p-[0.2rem] flex items-center w-25 gap-x-1 bg-transparent border-2 border-solid text-(--c4) rounded-4xl cursor-pointer">
            <LogIn className="text-(--c4) w-8"/>
            Login
          </button>
          <Handbag  className="text-white cursor-pointer" size={23}/>
        </div>
    </nav>
    )
}

export default Nav