import '../assets/styles/App.css'
import Nav from '../components/Nav.jsx'
import { Star } from "lucide-react";
import { ShoppingBag } from "lucide-react";

function Home() {
    return(
      <div className="min-h-screen bg-linear-to-br from-(--c1) from-50% to-(--c2) flex flex-col montserrat-f">
        <Nav />
        
        <main className="flex-1 flex  flex-row items-start justify-between p-6">
          <div className="p-[7rem] flex flex-col">
            <span className="flex items-center text-lg px-6 mb-6 w-[15rem] py-1.5 bg-(--c4) 
            text-white rounded-3xl cursor-default gap-x-[0.5rem]">
              <Star className="w-5.5 stroke-white fill-white" />
              Robusto e ousado
            </span>

            <h2 className="text-8xl text-(--c4) cursor-default font-extrabold">BRIGADEIRO</h2>
            <h2 className="text-8xl text-white cursor-default font-extrabold mb-4">MEIO<br/>AMARGO</h2>
            <p className="text-(--c5) cursor-default max-w-2xl text-xl mb-4">
              Massa de chocolate suíço meio amargo, finalizado com um chocolate francês em pó.
            </p>

            <div className="flex flex-row gap-x-[3rem]">
              <p className="text-(--c4) mt-5 text-3xl font-bold max-w-2xl">
                <span className="underline cursor-default">R$15,00/unidade</span><br/>
                <span className="underline cursor-default text-white font-extralight text-lg">Ou comprar o </span><span className="cursor-pointer underline text-lg font-extralight">pacote fechado</span>
              </p>
              <button className="flex items-center gap-x-[0.5rem] mt-6 px-6 py-6 
              bg-white text-black rounded-full text-lg cursor-pointer hover:scale-105 transition">
                  <ShoppingBag className="w-6 text-black" />
                  Por no carrinho
              </button>
            </div>
          </div>
          
          <div className="px-[6rem] mb-10 flex justify-center">
            <img 
              src="/images/BrigadeiroHome.png" 
              alt="Brigadeiro meio amargo" 
              className="shadow-lg max-w-md"
            />
            <div className="absolute bottom-[-13rem] right-50 w-[1px] h-[80px] bg-(--c1)"></div>
          </div>
        </main>

        <footer className="bg-white text-gray-500 text-sm text-center p-4">
          © 2025 - Feito por Giulia e Muchas💻
        </footer>
      </div>
    )
}

export default Home