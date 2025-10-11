import '../assets/styles/App.css'
import Nav from '../components/Nav.jsx'
import { Star } from "lucide-react"
import { ShoppingBag } from "lucide-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

function Home() {
    return(
      <div className="min-h-screen bg-linear-to-br from-(--c1) from-50% to-(--c2) flex flex-col montserrat-f">
        <main className="flex-1 flex flex-row items-start justify-between p-6">
          <div className="p-[7rem] flex flex-col">
            <span className="justify-center flex items-center text-lg px-6 mb-6 w-[15rem] py-1.5 bg-(--c4) 
            text-white rounded-3xl cursor-default gap-x-[1rem]">
              <Star className="w-5.5 stroke-white fill-white" />
              Robusto e ousado
            </span>

            <h2 className="text-8xl text-(--c4) cursor-default font-extrabold">BRIGADEIRO</h2>
            <h2 className="text-8xl text-white cursor-default font-extrabold mb-4">MEIO<br/>AMARGO</h2>
            <p className="text-(--c5) cursor-default max-w-2xl text-xl mb-4">
              Massa de chocolate suíço meio amargo, finalizado com um chocolate francês em pó.
            </p>

            <div className="flex flex-row gap-x-[3rem] mt-20">
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

            <div className="flex flex-row gap-x-[1rem] items-center mt-25">
              <p className="text-(--c6) text-[1.5rem] cursor-default">01/03</p>
              <button className="flex items-center p-4 bg-black opacity-[80%]
              text-white rounded-full cursor-pointer">
                <ChevronLeft className="text-(--c7)" size={28}/>
              </button>
              <button className="flex items-center p-4 bg-black opacity-[80%]
              text-white rounded-full cursor-pointer">
                <ChevronRight className="text-(--c7)" size={28}/>
              </button>
            </div>
          </div>
          
          <div className="px-[6rem] flex justify-center">
            <img 
              src="/images/BrigadeiroHome.png" 
              alt="Brigadeiro meio amargo" 
              className="shadow-lg max-w-md"
            />
            <div className="absolute bottom-[-13rem] right-50 w-[1px] h-[80px] bg-(--c1)"></div>
          </div>
        </main>
      </div>
    )
}

export default Home