import '../assets/styles/App.css'
import { Sun, LogIn } from "lucide-react"
import { Handbag } from "phosphor-react"
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { AArrowUp, AArrowDown, Contrast, Eclipse, Hand } from 'lucide-react';

function Nav() {
  const location = useLocation();
  const [isLogged, setIsLogged] = useState(false);
  let shadowClass = "";
  
  if(location.pathname === "/carrinho" || location.pathname === "/pagamento"){
    const purpleShadowRoutes = ["/carrinho"];
    const greenShadowRoutes = ["/pagamento"];
    
    if (purpleShadowRoutes.includes(location.pathname)) {
      shadowClass = "drop-shadow-[0_20px_20px_rgba(215,92,240,1.0)]";
    }
  
    if (greenShadowRoutes.includes(location.pathname)) {
      shadowClass = "drop-shadow-[0_20px_20px_rgba(34,197,94,1.0)]";
    }
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setShadowClass("shadow-md");
        } else {
          setShadowClass("");
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
    setIsLogged(false);
  }

  return(
    <nav className={`dark:bg-(--c3) bg-(--c24) py-6 px-[4rem] flex items-center justify-between montserrat-f ${location.pathname === "/carrinho" || location.pathname === "/pagamento" ? shadowClass : ''}`}>
        <h1 className="text-4xl font-extrabold cursor-default">
          <span className="text-(--c4)">CA</span>
          <span className="dark:text-white text-(--c27)">PERLET</span>
        </h1>
        <div className="dark:text-white text-(--c27) flex items-center text-[1.2rem] list-none gap-x-[5rem]">
          <li className="cursor-pointer"><a href="/cadastroProduto">Cadastro Produtos</a></li>
          <li className="cursor-pointer"><a href="/loja">Loja</a></li>
          <li className="cursor-pointer"><a href="">Sobre nós</a></li>
          <li className="cursor-pointer"><a href="#footer">Contato</a></li>
        </div>
        <div className="flex gap-x-[1rem] items-center">
          <Sun size={23} className="dark:text-white text-(--c27) cursor-pointer"/>
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