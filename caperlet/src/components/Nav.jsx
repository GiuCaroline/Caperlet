import '../assets/styles/App.css'
import { Sun, Moon, LogIn } from "lucide-react"
import { Handbag } from "phosphor-react"
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { AArrowUp, AArrowDown, Contrast, Eclipse, Hand } from 'lucide-react';

function Nav({darkMode, isDark}) {
  const location = useLocation();
  const [isLogged, setIsLogged] = useState(false);
  let shadowClass = "";
  
  if(location.pathname === "/carrinho" || location.pathname === "/pagamento"){
    const purpleShadowRoutes = ["/carrinho", "/pagamento"];
    
    if (purpleShadowRoutes.includes(location.pathname)) {
      shadowClass = "drop-shadow-[0_20px_20px_rgba(215,92,240,1.0)]";
    }
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          shadowClass("shadow-md");
        } else {
          shadowClass("");
        }
      };
    
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [location.pathname]);
  }

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    const password = localStorage.getItem("userPassword");
    if (email && password) {
      setIsLogged(true);
    }

  }, []);

  function handleLogout() {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    localStorage.removeItem("userAdmin")
    setIsLogged(false);
  }

  return(
    <nav className={`dark:bg-(--c32) bg-(--c24) py-6 px-[4rem] flex items-center justify-between montserrat-f ${location.pathname === "/carrinho" || location.pathname === "/pagamento" ? shadowClass : ''}`}>
        <a href="/"> 
          <h1 className="text-4xl font-extrabold cursor-default cursor-pointer">
            <span className="text-(--c4)">CA</span>
            <span className="dark:text-white text-(--c27)">PERLET</span>
          </h1>
        </a>
        <div className="dark:text-white text-(--c27) flex items-center text-[1.2rem] list-none gap-x-[5rem]">
          {localStorage.getItem("userAdmin") && 
          <li className="cursor-pointer relative flex justify-center">
            <a href="/cadastroProduto" className=''>Cadastro Produtos</a>
            {location.pathname == "/cadastroProduto" && <div className="h-[4px] bottom-[-0.2rem] absolute w-full bg-(--c26) rounded-full cursor-default"></div>}
          </li>}
          <li className="cursor-pointer relative flex justify-center">
            <a href="/loja">Loja</a>
            {(location.pathname == "/loja" || location.pathname == "/customizado") && <div className="h-[4px] bottom-[-0.2rem] absolute w-full bg-(--c26) rounded-full cursor-default"></div>}
          </li>
          <li className="cursor-pointer relative flex justify-center">
            <a href="">Sobre nós</a>
            {location.pathname == "/sobre" && <div className="h-[4px] bottom-[-0.2rem] absolute w-full bg-(--c26) rounded-full cursor-default"></div>}
          </li>
          <li className="cursor-pointer relative flex justify-center"><a href="#footer">Contato</a></li>
        </div>
        <div className="flex gap-x-[1rem] items-center">
          <button onClick={()=>{darkMode()}}>
            {isDark ? 
            <Sun size={23} className="dark:text-white text-(--c27) cursor-pointer"/>
            :
            <Moon size={23} className="dark:text-white text-(--c27) cursor-pointer"/>
            }
          </button>
          <button onClick={()=>{isLogged? handleLogout(): window.location.href="/login"}}  className="p-[0.2rem] flex items-center w-25 gap-x-1 bg-transparent border-2 border-solid text-(--c4) rounded-4xl cursor-pointer">
            {isLogged ? 
              <><LogIn className="text-(--c4) w-8"/> <span className="text-(--c4) pr-2">Logout</span></>
             : 
              <><LogIn className="text-(--c4) w-8"/> <span className='text-(--c4) pr-2'>Login</span></>
             }
          </button>
          <Handbag onClick={()=>{window.location="/carrinho"}} className="dark:text-white text-(--c27) cursor-pointer" size={23}/>
            
          <button id="libras">
            <Hand />
          </button> 

          <button id="aumentar-texto">
            <AArrowUp  />
          </button>

          <button id="diminuir-texto">
            <AArrowDown />
          </button>

          <button id="alternar-contraste">
            <Contrast  />
          </button>

          <button id="preto-e-branco">
            <Eclipse  />
          </button>

        </div>
    </nav>
    )
}

export default Nav