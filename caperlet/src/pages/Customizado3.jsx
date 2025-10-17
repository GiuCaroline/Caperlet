import '../assets/styles/App.css'
import { Plus, Minus } from "lucide-react"
import { Sparkle } from "phosphor-react"
import CaminhoCustom from '../components/CaminhoCustom.jsx'

function Customizado3() {
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
                <CaminhoCustom/>
            </section>
            <section className="bg-(--c3) p-15 flex w-[100%]">
              <div className='w-[50%]'>
                <div class="p-8 rounded-xl border border-(--c12) bg-transparent w-[45rem]">
                  <h1 class="text-4xl font-bold mb-6 text-white text-left cursor-default">Escolha até 2 cores</h1>

                  <div class="grid grid-cols-2 gap-6">
                    <div className='border-2 p-5 rounded-2xl bg-[rgba(53,41,22,0.2)] border-(--c12)
                    hover:scale-105 transition-all duration-300'>
                      <div
                        class="relative bg-[#8B00FF] h-[120px] cursor-pointer rounded-2xl border-4 border-transparent"
                      ></div>
                    </div>

                    <div className='border-4 p-5 rounded-2xl bg-[rgba(53,41,22,0.2)] border-(--c7)
                    hover:scale-105 transition-all duration-300'>
                      <div
                        class="relative bg-[#4EEDB2] h-[120px] cursor-pointer
                        rounded-2xl"
                      >
                        <div
                          class="absolute top-2 right-2 w-4 h-4 rounded-full bg-(--c7) border-4 border-(--c12)"
                        ></div>
                      </div>
                    </div>

                    <div className='border-2 p-5 rounded-2xl bg-[rgba(53,41,22,0.2)] border-(--c12)
                    hover:scale-105 transition-all duration-300'>
                      <div
                        class="relative bg-[#FFEB3B] h-[120px] cursor-pointer rounded-2xl 
                        border-4 border-transparent"
                      ></div>
                    </div>

                    <div className='border-2 p-5 rounded-2xl bg-[rgba(53,41,22,0.2)] border-(--c12)
                    hover:scale-105 transition-all duration-300'>
                      <div
                        class="relative bg-[#E91E63] h-[120px] cursor-pointer rounded-2xl 
                        border-4 border-transparent"
                      ></div>
                    </div>
                  </div>

                  <p class="mt-6 text-sm text-white text-left cursor-default">
                    1 de 2 cores selecionadas
                  </p>
                </div>
                <div className='p-8 rounded-xl border border-(--c12) bg-transparent w-[45rem] mt-5'>
                  <h1 class="text-4xl font-bold mb-6 text-white text-left cursor-default">Selecione até 2 detalhes</h1>

                  <div className='flex flex-wrap gap-[1.5rem] justify-center'>
                    <button className='cursor-pointer text-white w-[18rem] bg-[rgba(0,0,0,0.5)]
                     rounded-md border-1 border-(--c12) pl-[1rem] text-left font-medium'>Folha de ouro</button>

                    <button className='cursor-pointer text-white w-[18rem] bg-[rgba(0,0,0,0.5)]
                     rounded-md border-1 border-(--c12) text-left pl-[1rem] font-medium'>Frutas desidratadas</button>

                    <button className='cursor-pointer text-(--c7) w-[18rem] bg-(--c12)
                     rounded-md border-1 border-(--c12) text-left pl-[1rem] font-medium'>Pétalas de rosas (comestíveis)</button>

                    <button className='cursor-pointer text-white w-[18rem] bg-[rgba(0,0,0,0.5)]
                     rounded-md border-1 border-(--c12) text-left pl-[1rem] font-medium'>Pó de cacau</button>

                    <button className='cursor-pointer text-white w-[18rem] bg-[rgba(0,0,0,0.5)]
                     rounded-md border-1 border-(--c12) text-left pl-[1rem] font-medium'>Flores cristalizadas</button>

                    <button className='cursor-pointer text-(--c7) w-[18rem] bg-(--c12)
                     rounded-md border-1 border-(--c12) text-left pl-[1rem] font-medium'>Raspas de chocolate belga</button>

                    <button className='cursor-pointer text-white w-[18rem] bg-[rgba(0,0,0,0.5)]
                     rounded-md border-1 border-(--c12) text-left pl-[1rem] font-medium'>Flor de sal</button>

                    <button className='cursor-pointer text-white w-[18rem] bg-[rgba(0,0,0,0.5)]
                     rounded-md border-1 border-(--c12) text-left pl-[1rem] font-medium'>Folhas de hortelã glaceadas</button>

                    <button className='cursor-pointer text-white w-[18rem] bg-[rgba(0,0,0,0.5)]
                     rounded-md border-1 border-(--c12) text-left pl-[1rem] font-medium'>Lâminas de coco desidratado</button>

                    <button className='cursor-pointer text-white w-[18rem] bg-[rgba(0,0,0,0.5)]
                     rounded-md border-1 border-(--c12) text-left pl-[1rem] font-medium'>Pó perolado artesanal</button>

                    <div class="grid grid-cols-2 gap-[18rem]">
                        <p class="mt-6 text-sm text-white text-left cursor-default">
                          1 de 2 detalhes selecionadas
                        </p>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-[31rem] mt-5 w-[45rem]">
                  <button className='w-[7rem] h-[2.3rem] text-(--c13) font-bold cursor-pointer 
                  bg-[rgba(53,41,22,0.2)] border-1 border-(--c12) rounded-md' onClick={()=>{window.location="/customizadoColoracao"}}>Regredir</button>
                  
                  <button className='w-[7rem] h-[2.3rem] text-white font-bold cursor-pointer 
                  bg-(--c12) border-1 border-(--c12) rounded-md'  onClick={()=>{window.location="/customizadoPacote"}}>Avançar</button>
                </div>
              </div>
              <div className='w-[50%] ml-[5%]'>
                <div class="p-8 rounded-xl border border-(--c12) bg-transparent w-[45rem] flex flex-col">
                  <h1 class="text-4xl font-bold mb-6 text-white text-left cursor-default">Sua criação açucarada</h1>

                  <img
                    src="/images/MacaronEdicao.png"
                    alt="Macaron de Chocolate ao leite"
                    className="mt-3"
                  />

                  <h2 className='text-white font-bold text-xl mt-5'>Tipo de base</h2>
                  <p class="text-base text-(--c16) text-left cursor-default">
                    Macaron francês
                  </p>

                  <h2 className='text-white font-bold text-xl mt-5'>Tamanho do pacote</h2>
                  <p class="text-base text-(--c16) text-left cursor-default">
                    Pequeno (8 peças)
                  </p>

                  <h2 className='text-white font-bold text-xl mt-5'>Cor principal</h2>
                  <div
                    class="top-2 right-2 w-4 h-4 rounded-full bg-[#4EEDB2]"
                  ></div>

                  <h2 className='text-white font-bold text-xl mt-5'>Detalhes</h2>
                  <p class="text-base text-(--c16) text-left cursor-default">
                    Petalas de rosas, raspas de chocolate belga
                  </p>

                  <div className="mt-6 mb-4 h-[2px] w-[100%] bg-(--c12) rounded-full"></div>

                  <div class="grid grid-cols-2">
                    <p class="text-base text-white text-left cursor-default w-[15rem] font-bold">
                      Preço base
                    </p>
                    <p class="text-base text-[#777777] text-right cursor-default font-bold">
                      R$96,00
                    </p>
                  </div>

                  <div class="grid grid-cols-2 mt-1">
                    <p class="text-base text-white text-left cursor-default w-[15rem] font-bold">
                      Taxa de customização
                    </p>
                    <p class="text-base text-[#777777] text-right cursor-default font-bold">
                      R$24,00
                    </p>
                  </div>

                  <div class="grid grid-cols-2 mt-1">
                    <p class="text-base text-white text-left cursor-default w-[15rem] font-bold">
                      Upgrade de pacote
                    </p>
                    <p class="text-base text-[#777777] text-right cursor-default font-bold">
                      R$00,00
                    </p>
                  </div>

                  <div className="mt-4 mb-4 h-[2px] w-[100%] bg-(--c12) rounded-full"></div>

                  <div class="grid grid-cols-2 mt-1">
                    <p class="text-lg text-(--c4) text-left cursor-default w-[15rem] font-bold">
                      Total por pacote
                    </p>
                    <p class="text-base text-(--c8) text-right cursor-default font-bold">
                      R$120,00
                    </p>
                  </div>

                  <div class="grid grid-cols-2 mt-1">
                    <p class="text-base text-white text-left cursor-default w-[15rem] font-bold">
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

                  <div class="grid grid-cols-2 mt-7">
                    <h2 className='text-white font-bold text-xl'>Total da compra</h2>
                    <p class="text-xl text-(--c7) text-right cursor-default font-bold">
                      R$960,00
                    </p>
                  </div>

                  <button className='w-[100%] h-[2.3rem] text-white font-bold cursor-pointer mt-7
                    bg-(--c12) border-1 border-(--c12) rounded-md'>Adicionar ao carrinho</button>
                </div>
              </div>

            </section>
        </main>
      </div>
    )
}

export default Customizado3