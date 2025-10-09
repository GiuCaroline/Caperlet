import '../assets/styles/App.css'
import Nav from '../components/Nav.jsx'
import { Plus, Minus } from "lucide-react"
import { Sparkle } from "phosphor-react"

function LojaPadrao() {
    return(
      <div className="min-h-screen flex flex-col montserrat-f">        
        <main className="flex-1 flex flex-col">
            <section className="flex flex-col items-center bg-linear-to-br from-(--c1) from-50% to-(--c2) p-30 w-[100%]">
                <div className="flex flex-row gap-x-[2rem]">
                    <span className="flex items-center justify-center text-base px-6 py-1.5 bg-(--c4) 
                    text-(--c1) rounded-3xl cursor-pointer gap-x-[0.5rem] font-medium">
                    <Sparkle size={25} weight="fill"/>
                    Padrão gourmet
                    </span>
                    <span onClick={()=>{window.location="/customizado"}} className="flex items-center justify-center text-base px-6 py-1.5 bg-[rgba(152,92,240,0.1)]
                    text-(--c8) rounded-3xl cursor-pointer gap-x-[0.5rem] font-medium">
                    <Sparkle size={25} weight="fill"/>
                    Customizados
                    </span>
                </div>
                <h2 className="text-7xl text-white cursor-default font-extrabold mt-15">PADRÃO</h2>
                <h2 className="text-7xl text-(--c4) cursor-default font-extrabold">GOURMET</h2>
                <p className="text-white cursor-default max-w-2xl text-2xl mt-5 font-light text-center">
                Descubra as coleções da casa, onde a loja se torna uma galeria e cada peça é uma arte comestível.
                </p>
            </section>
            <section className="bg-(--c3) py-12 flex flex-col items-center w-[100%]">
              <div className="flex flex-row gap-x-20">
                <div className="bg-(--c9) rounded-xl shadow-lg overflow-hidden w-[21rem] border-(--c10) border-1
                transition hover:scale-[1.02] hover:shadow-[#C09AF8]/20 hover:border-(--c8) duration-300">
                  <img
                    src="/images/BrigadeiroProd.png"
                    alt="Brigadeiro meio amargo"
                    className="mt-3"
                  />

                  <div className="p-5">
                    <h2 className="text-xl font-bold text-white mb-1 cursor-default">
                      Brigadeiro meio amargo
                    </h2>

                    <p className="text-sm text-(--c11) mb-3 leading-snug font-light cursor-default">
                      Massa de chocolate suíço meio amargo, finalizado com um chocolate
                      francês em pó.
                    </p>

                    <div className="flex gap-2 mb-4">
                      <span className="cursor-pointer flex items-center gap-1 px-5 bg-(--c4) py-1 text-white rounded-lg text-xs font-semibold">
                        <Sparkle size={14} />
                        Unidade
                      </span>
                      <span className="cursor-pointer flex items-center gap-1 px-4 py-1 bg-[rgba(152,92,240,0.1)] text-(--c8)
                       rounded-lg text-xs font-semibold">
                        <Sparkle size={14} />
                        Pacote (12)
                      </span>
                    </div>

                    <div className="text-white font-bold text-2xl cursor-default">
                      R$15,00
                      <span className="text-xs text-white font-normal cursor-default">por unidade</span>
                    </div>

                    <div className="flex items-center gap-3 mt-3">
                      <button className="flex items-center justify-center w-7 h-7 
                      rounded-md bg-transparent border-white border-2 text-white  text-lg font-bold cursor-pointer
                      transition hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(255,255,255,0.09)] duration-300">
                        <Minus />
                      </button>
                      <span className="text-white font-medium cursor-default">0</span>
                      <button className="flex items-center justify-center w-7 h-7
                      rounded-md bg-transparent border-white border-2 text-white text-lg font-bold cursor-pointer
                      transition hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(255,255,255,0.09)] duration-300">
                        <Plus />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative bg-(--c9) rounded-xl shadow-lg overflow-hidden w-[22rem] border-(--c10) border-1
                transition hover:scale-[1.02] hover:shadow-[#C09AF8]/20 hover:border-(--c8) duration-300">
                  <img
                    src="/images/MacaronProd.png"
                    alt="Macaron de Chocolate ao leite"
                    className="mt-3"
                  />

                  <div className="p-5">
                    <h2 className="text-xl font-bold text-white mb-1 cursor-default">
                      Macaron de chocolate ao leite
                    </h2>

                    <p className="text-sm text-(--c11) mb-3 leading-snug font-light cursor-default">
                      Feito com farinha de amêndoas e recheado com ganache de chocolate ao leite.
                    </p>

                    <div className="flex gap-2 mb-4">
                      <span className="cursor-pointer flex items-center gap-1 px-4 py-1 bg-[rgba(152,92,240,0.1)] text-(--c8)
                       rounded-lg text-xs font-semibold">
                        <Sparkle size={14} />
                        Unidade
                      </span>
                      <span className="cursor-pointer flex items-center gap-1 px-5 bg-(--c4) py-1 text-white rounded-lg text-xs font-semibold">
                        <Sparkle size={14} />
                        Pacote (8)
                      </span>
                    </div>

                    <div className="text-white font-bold text-2xl cursor-default">
                      R$180,00
                      <span className="text-xs text-white font-normal cursor-default">por pacote</span>
                      <span className="bg-[#362915]/60 text-[10px] font-normal text-[#8C601C]/60 cursor-default
                      p-1 rounded-full justify-end right-2 absolute">poupe R$20,00</span>
                    </div>

                    <div className="flex items-center gap-3 mt-3">
                      <button className="flex items-center justify-center w-7 h-7 
                      rounded-md bg-transparent border-white border-2 text-white  text-lg font-bold cursor-pointer
                      transition hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(255,255,255,0.09)] duration-300">
                        <Minus />
                      </button>
                      <span className="text-white font-medium cursor-default">0</span>
                      <button className="flex items-center justify-center w-7 h-7
                      rounded-md bg-transparent border-white border-2 text-white text-lg font-bold cursor-pointer
                      transition hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(255,255,255,0.09)] duration-300">
                        <Plus />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-(--c9) rounded-xl shadow-lg overflow-hidden w-[21rem] border-(--c10) border-1
                transition hover:scale-[1.02] hover:shadow-[#C09AF8]/20 hover:border-(--c8) duration-300">
                  <img
                    src="/images/MacaronFrutProd.png"
                    alt="Macaron de Frutas Vermelhas"
                    className="mt-3"
                  />

                  <div className="p-5">
                    <h2 className="text-lg font-bold text-white mb-1 cursor-default">
                      Macaron de frutas vermelhas
                    </h2>

                    <p className="text-xs text-(--c11) mb-3 leading-snug font-light cursor-default">
                      Massa de amêndoas delicadamente aerada, recheada com ganache de rosas e finalizada
                       com uma rosa artesanal em açúcar.
                    </p>

                    <div className="flex gap-2 mb-4">
                      <span className="cursor-pointer flex items-center gap-1 px-5 bg-(--c4) py-1 text-white rounded-lg text-xs font-semibold">
                        <Sparkle size={14} />
                        Unidade
                      </span>
                      <span className="cursor-pointer flex items-center gap-1 px-4 py-1 bg-[rgba(152,92,240,0.1)] text-(--c8)
                       rounded-lg text-xs font-semibold">
                        <Sparkle size={14} />
                        Pacote (8)
                      </span>
                    </div>

                    <div className="text-white font-bold text-2xl cursor-default">
                      R$20,00
                      <span className="text-xs text-white font-normal cursor-default">por unidade</span>
                    </div>

                    <div className="flex items-center gap-3 mt-3">
                      <button className="flex items-center justify-center w-7 h-7 
                      rounded-md bg-transparent border-white border-2 text-white  text-lg font-bold cursor-pointer
                      transition hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(255,255,255,0.09)] duration-300">
                        <Minus />
                      </button>
                      <span className="text-white font-medium cursor-default">0</span>
                      <button className="flex items-center justify-center w-7 h-7
                      rounded-md bg-transparent border-white border-2 text-white text-lg font-bold cursor-pointer
                      transition hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(255,255,255,0.09)] duration-300">
                        <Plus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
            </section>
        </main>

        <footer className="bg-white text-gray-500 text-sm text-center p-4">
          © 2025 - Feito por Giulia e Muchas💻
        </footer>
      </div>
    )
}

export default LojaPadrao