import '../assets/styles/App.css'
import { Plus, Minus } from "lucide-react"
import { Sparkle } from "phosphor-react"
import CaminhoCustom from '../components/CaminhoCustom.jsx'

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
                <h2 className="text-7xl text-white cursor-default font-extrabold mt-[5%]">O DOCE DOS</h2>
                <h2 className="text-7xl text-(--c4) cursor-default font-extrabold">SONHOS DOCES</h2>
                <p className="text-white cursor-default max-w-2xl text-2xl mt-[2%] font-light text-center">
                    Design customizado que reflete o seu sabor de forma única em cada detalhe
                </p>
                <CaminhoCustom/>
            </section>
            <section className="bg-(--c3) p-15 flex w-[100%]">
              <div className='w-[50%]'>
                <div class="p-8 rounded-xl border border-(--c12) bg-transparent w-full">
                  <h1 class="text-4xl font-bold mb-[5%] text-white text-left cursor-default">Escolha até 2 cores</h1>

                  <div class="grid grid-cols-2 gap-6">
                    <div className='cursor-pointer border-2 p-5 flex-col flex justify-center rounded-2xl bg-[rgba(53,41,22,0.2)] border-(--c12)
                    hover:scale-105 transition-all duration-300'>
                      <img
                        src="/images/Brigadeiro1.png"
                        alt="Brigadeiro meio amargo"
                      />
                      <p className='font-semibold text-white text-lg mt-[2%]'>Brigadeiro trufado</p>
                      <p className='font-light text-xs text-white'>R$10,00 cada</p>
                    </div>

                    <div className='cursor-pointer border-4 p-5 flex-col flex justify-center rounded-2xl bg-[rgba(53,41,22,0.2)] border-(--c7)
                    hover:scale-105 transition-all duration-300'>
                      <div className='relative'>
                        <img
                          src="/images/Macaron1.png"
                          alt="Macaron de Chocolate ao leite"
                          className='w-full'
                        />
                        <div
                          class="absolute top-2 right-2 w-4 h-4 rounded-full bg-(--c7) border-4 border-(--c12)"
                        ></div>
                        <p className='font-semibold text-white text-lg mt-[2%]'>Macaron francês</p>
                        <p className='font-light text-xs text-white'>R$12,00 cada</p>
                      </div>
                    </div>

                    <div className='cursor-pointer border-2 p-5 flex-col flex justify-center rounded-2xl bg-[rgba(53,41,22,0.2)] border-(--c12)
                    hover:scale-105 transition-all duration-300'>
                      <img
                        src="/images/Bombom1.png"
                        alt="Bombom"
                      />
                      <p className='font-semibold text-white text-lg mt-[2%]'>Bombom recheado</p>
                      <p className='font-light text-xs text-white'>R$12,00 cada</p>
                    </div>

                    <div className='cursor-pointer border-2 p-5 flex-col flex justify-center rounded-2xl bg-[rgba(53,41,22,0.2)] border-(--c12)
                    hover:scale-105 transition-all duration-300'>
                      <img
                        src="/images/Nougat1.png"
                        alt="Nougat"
                          className='w-full'
                      />
                      <p className='font-semibold text-white text-lg mt-[2%]'>Nougat clássico</p>
                      <p className='font-light text-xs text-white'>R$15,00 cada</p>
                    </div>

                    </div>
                  </div>
                  
                  <div class="grid grid-cols-2 gap-[31rem] mt-[3%] w-full">
                    <button className='w-full h-[2.3rem] text-(--c13) font-bold cursor-default opacity-[0.5]
                    bg-[rgba(53,41,22,0.2)] border-1 border-(--c12) rounded-md'>Regredir</button>
                    
                    <button className='w-full h-[2.3rem] text-white font-bold cursor-pointer 
                    bg-(--c12) border-1 border-(--c12) rounded-md' onClick={()=>{window.location="/customizadoSabor"}}>Avançar</button>
                  </div>
              </div>
              <div className='w-[50%] ml-[5%]'>
                <div class="p-8 rounded-xl border border-(--c12) bg-transparent w-full flex flex-col">
                  <h1 class="text-4xl font-bold mb-[5%] text-white text-left cursor-default">Sua criação açucarada</h1>

                  <img
                    src="/images/MacaronEdicao.png"
                    alt="Macaron de Chocolate ao leite"
                  />

                  <h2 className='text-white font-bold text-xl mt-[4%] cursor-default'>Tipo de base</h2>
                  <p class="text-base text-(--c16) text-left cursor-default">
                    Macaron francês
                  </p>

                  <h2 className='text-white font-bold text-xl mt-[4%] cursor-default'>Tamanho do pacote</h2>
                  <p class="text-base text-(--c16) text-left cursor-default">
                    Pequeno (8 peças)
                  </p>

                  <div className="mt-6 mb-4 h-[2px] w-[100%] bg-(--c12) rounded-full cursor-default"></div>

                  <div class="grid grid-cols-2">
                    <p class="text-base text-white text-left cursor-default font-bold">
                      Preço base
                    </p>
                    <p class="text-base text-[#777777] text-right cursor-default font-bold">
                      R$96,00
                    </p>
                  </div>

                  <div class="grid grid-cols-2 mt-1">
                    <p class="text-base text-white text-left cursor-default font-bold">
                      Taxa de customização
                    </p>
                    <p class="text-base text-[#777777] text-right cursor-default font-bold">
                      R$24,00
                    </p>
                  </div>

                  <div class="grid grid-cols-2 mt-1">
                    <p class="text-base text-white text-left cursor-default font-bold">
                      Upgrade de pacote
                    </p>
                    <p class="text-base text-[#777777] text-right cursor-default font-bold">
                      R$00,00
                    </p>
                  </div>

                  <div className="mt-4 mb-4 h-[2px] w-[100%] bg-(--c12) rounded-full"></div>

                  <div class="grid grid-cols-2 mt-1">
                    <p class="text-lg text-(--c4) text-left cursor-default font-bold">
                      Total por pacote
                    </p>
                    <p class="text-base text-(--c8) text-right cursor-default font-bold">
                      R$120,00
                    </p>
                  </div>

                  <div class="grid grid-cols-2 mt-1">
                    <p class="text-base text-white text-left cursor-default font-bold">
                      Quantidade de pacotes
                    </p>
                    <div className="flex items-center gap-3 justify-end">
                      <button className="flex items-center justify-center w-7 h-7 
                      rounded-md bg-(--c9) border-(--c12) border-2 text-white text-lg font-bold cursor-pointer">
                        <Minus className="text-(--c17)" size={17}/>
                      </button>
                      <span className="text-white font-medium cursor-default">8</span>
                      <button className="flex items-center justify-center w-7 h-7
                      rounded-md bg-(--c9) border-(--c12) border-2 text-white text-lg font-bold cursor-pointer">
                        <Plus className="text-(--c17)" size={17}/>
                      </button>
                    </div>
                  </div>

                  <div class="grid grid-cols-2 mt-[4%]">
                    <h2 className='text-white font-bold text-xl cursor-default'>Total da compra</h2>
                    <p class="text-xl text-(--c7) text-right cursor-default font-bold">
                      R$960,00
                    </p>
                  </div>

                  <button className='w-full h-[2.3rem] text-white font-bold cursor-pointer mt-[4%]
                    bg-(--c12) border-1 border-(--c12) rounded-md'>Adicionar ao carrinho</button>
                </div>
              </div>
            </section>
        </main>
      </div>
    )
}

export default Customizado