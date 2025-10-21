import '../assets/styles/App.css'
import { Sun, LogIn } from "lucide-react"
import { Handbag } from "phosphor-react"
import { href } from 'react-router-dom'
import { useLocation } from "react-router-dom";


function Nav() {
    const location = useLocation();

    const purpleShadowRoutes = ["/carrinho"];
    const greenShadowRoutes = ["/pagamento"];

    let shadowClass = "";

    if (purpleShadowRoutes.includes(location.pathname)) {
      shadowClass = "drop-shadow-[0_20px_20px_rgba(152,92,240,1.0)]";
    }

    if (greenShadowRoutes.includes(location.pathname)) {
      shadowClass = "drop-shadow-[0_20px_20px_rgba(34,197,94,1.0)]";
    }

    return(
    <nav className={`bg-(--c3) py-6 px-[4rem] flex items-center justify-between montserrat-f ${shadowClass}`}>
        <h1 className="text-4xl font-extrabold cursor-default">
          <span className="text-(--c4)">CA</span>
          <span className="text-white">PERLET</span>
        </h1>
        <div className="text-white flex items-center text-[1.2rem] list-none gap-x-[5rem]">
          <li className="cursor-pointer"><a href="/">Home</a></li>
          <li className="cursor-pointer"><a href="/loja">Loja</a></li>
          <li className="cursor-pointer"><a href="">Sobre nós</a></li>
          <li className="cursor-pointer"><a href="#footer">Contato</a></li>
        </div>
        <div className="flex gap-x-[1rem] items-center">
          <Sun size={23} className="text-white cursor-pointer"/>
          <button onClick={()=>{window.location="/login"}} className="p-[0.2rem] flex items-center w-25 gap-x-1 bg-transparent border-2 border-solid text-(--c4) rounded-4xl cursor-pointer">
            <LogIn className="text-(--c4) w-8"/>
            Login
          </button>
          <Handbag onClick={()=>{window.location="/carrinho"}} className="text-white cursor-pointer" size={23}/>
        </div>
    </nav>
    )
}

export default Nav