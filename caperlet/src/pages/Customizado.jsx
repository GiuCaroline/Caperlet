import '../assets/styles/App.css'
import Nav from '../components/Nav.jsx'
import { Plus, Minus } from "lucide-react"
import { Sparkle } from "phosphor-react"
import { Heart } from "lucide-react"
import { Palette } from "lucide-react"
import { Gift } from "lucide-react"

function Customizado() {
    return(
      <div className="min-h-screen flex flex-col montserrat-f">        
        <main className="flex-1 flex flex-col">
            <section className="relative flex flex-col items-center bg-linear-to-br from-(--c1) from-50% to-(--c2) p-30 w-[100%]">
                <div className="flex flex-row gap-x-[2rem]">
                    <span onClick={()=>{window.location="/loja"}} className="flex items-center justify-center text-base px-6 py-1.5 bg-[rgba(152,92,240,0.1)]
                    text-(--c8) rounded-3xl cursor-pointer gap-x-[0.5rem] font-medium">
                    <Sparkle size={25} weight="fill"/>
                    Padrão gourmet
                    </span>
                    <span className="flex items-center justify-center text-base px-6 py-1.5 bg-(--c4) 
                    text-(--c1) rounded-3xl cursor-pointer gap-x-[0.5rem] font-medium">
                    <Sparkle size={25} weight="fill"/>
                    Customizados
                    </span>
                </div>
                <h2 className="text-7xl text-white cursor-default font-extrabold mt-15">O DOCE DOS</h2>
                <h2 className="text-7xl text-(--c4) cursor-default font-extrabold">SONHOS DOCES</h2>
                <p className="text-white cursor-default max-w-2xl text-2xl mt-5 font-light text-center">
                    Design customizado que reflete o seu sabor de forma única em cada detalhe
                </p>
                <span className="absolute bottom-8 flex flex-row items-center gap-x-5 w-auto bg-(--c3) py-1 px-10 border-1 border-(--c12) rounded-full">
                  <button className="flex items-center p-2 bg-(--c12)
                  text-white rounded-full cursor-pointer">
                    <Sparkle className="text-white" size={25} weight="fill"/>
                  </button>
                  <p className="text-white font-medium cursor-pointer">Escolha da base</p>
                  <div className="flex-1 h-[2px] w-25 bg-(--c12) rounded-full"></div>

                  <button className="flex items-center p-2 bg-(--c14)
                  text-white rounded-full cursor-pointer">
                    <Heart className="text-(--c15)" size={25}/>
                  </button>
                  <p className="text-(--c15) font-medium cursor-pointer">Sabores</p>
                  <div className="flex-1 h-[2px] bg-(--c12) rounded-full"></div>

                   <button onClick={()=>{window.location="/customizadoColoracao"}} className="flex items-center p-2 bg-(--c14)
                  text-white rounded-full cursor-pointer">
                    <Palette className="text-(--c15)" size={25}/>
                  </button>
                  <p className="text-(--c15) font-medium cursor-pointer">Coloração</p>
                  <div className="flex-1 h-[2px] bg-(--c12) rounded-full"></div>

                     <button className="flex items-center p-2 bg-(--c14)
                  text-white rounded-full cursor-pointer">
                    <Gift className="text-(--c15)" size={25}/>
                  </button>
                  <p className="text-(--c15) font-medium cursor-pointer">Seleção de pacote</p>

                </span>
            </section>
            <section className="bg-(--c3) p-15 flex w-[100%]">
              <div className='w-[50%]'>
                
              </div>
              <div className='w-[50%] ml-[5%]'>
                
              </div>

            </section>
        </main>
      </div>
    )
}

export default Customizado