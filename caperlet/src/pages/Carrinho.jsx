import '../assets/styles/App.css'
import { Plus, Minus } from "lucide-react"
import { ArrowLeft } from "lucide-react"
import { Trash2, Tag, Shield } from "lucide-react"
import { Handbag } from "phosphor-react"

function Carrinho(){
    return(
        <div className='bg-(--c3) montserrat-f md:pb-[20%]'>
            <main className="flex-1 flex p-15 px-25 flex-col">
                <div  onClick={()=>{window.history.back()}} className='flex items-center gap-2 cursor-pointer w-[13%]'>
                    <ArrowLeft className='text-(--c20)'/>
                    <p className='text-(--c20)'>Continuar comprando</p>
                </div>
                <div className='mb-[3%] mt-[1%] flex '>
                    <Handbag size={55} className="bg-(--c21) rounded-full p-2" color='#C09AF8' />
                    <div className='flex flex-col ml-[2%]'>
                        <h2 className='text-white font-bold text-2xl'>Carrinho de compras</h2>
                        <p className='text-white font-light'>2 itens no seu carrinho</p>
                    </div>
                </div>
                <section className="bg-(--c3)  flex w-[100%]">
                    <div className='w-[92%] gap-10 flex flex-col'>
                        <div class="p-8 rounded-xl border border-(--c10) bg-transparent w-[100%]">
                            <div class="flex flex-row gap-6">
                                <div className="w-[15%] aspect-square rounded-lg overflow-hidden">
                                    <img
                                        src="/images/BrigadeiroProd.png"
                                        alt="Brigadeiro meio amargo"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex justify-between gap-90'>
                                        <p className='text-white font-bold text-2xl cursor-default'>Brigadeiro meio amargo</p>
                                        <Trash2 className='text-white cursor-pointer' size={20}/>
                                    </div>
                                    <p className='text-(--c11) text-sm cursor-default'>Massa de chocolate suiço meio amargo, finalizado com um chocolate françês em pó</p>

                                    <div className='items-center flex'>
                                        <p className='cursor-default mt-[1%] text-[11px] border-2 border-(--c8) p-[1px] text-(--c8) rounded-md'>unidade</p>
                                    </div>

                                    <div className="flex items-center gap-3 mt-1">
                                        <button className="flex items-center justify-center w-7 h-7 
                                        rounded-md bg-(--c9) border-(--c8) border-2 text-white text-lg font-bold cursor-pointer">
                                            <Minus className="text-white" size={17}/>
                                        </button>
                                        <span className="text-white font-medium cursor-default">2</span>
                                        <button className="flex items-center justify-center w-7 h-7
                                        rounded-md bg-(--c9) border-(--c8) border-2 text-white text-lg font-bold cursor-pointer">
                                            <Plus className="text-white" size={17}/>
                                        </button>
                                        
                                        <div className='ml-[70%]'>
                                            <p className='text-(--c20) font-light text-xs text-right cursor-default'>R$15,00/unidade</p>
                                            <p className='text-(--c4) font-bold text-2xl mt-[-5px] cursor-default'>R$30,00</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-8 rounded-xl border border-[#2a2a2a] bg-transparent w-[100%]">
                            <div class="flex flex-row gap-6">
                                <div className="w-[15%] aspect-square rounded-lg overflow-hidden">
                                    <img
                                        src="/images/MacaronProd.png"
                                        alt="Macaron de Chocolate ao leite"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex justify-between gap-110'>
                                        <p className='text-white font-bold text-2xl cursor-default'>Macaron francês</p>
                                        <Trash2 className='text-white cursor-pointer' size={20}/>
                                    </div>
                                    <p className='text-(--c11) text-sm cursor-default'>Petalas de rosas, raspas de chocolate belga</p>

                                    <div className='items-center flex'>
                                        <p className='cursor-default mt-2 text-[11px] border-2 border-(--c8) p-[1px] text-(--c8) rounded-md'>Pacote (16)</p>
                                    </div>

                                    <div className="flex items-center gap-3 mt-1">
                                        <button className="flex items-center justify-center w-7 h-7 
                                        rounded-md bg-(--c9) border-(--c8) border-2 text-white text-lg font-bold cursor-pointer">
                                            <Minus className="text-white" size={17}/>
                                        </button>
                                        <span className="text-white font-medium cursor-default">8</span>
                                        <button className="flex items-center justify-center w-7 h-7
                                        rounded-md bg-(--c9) border-(--c8) border-2 text-white text-lg font-bold cursor-pointer">
                                            <Plus className="text-white" size={17}/>
                                        </button>
                                        
                                        <div className='ml-[66%]'>
                                            <p className='text-(--c20) font-light text-xs text-right  cursor-default'>R$206,00/pacote</p>
                                            <p className='text-(--c4) font-bold text-2xl mt-[-5px]  cursor-default'>R$1648,00</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='w-[50%] ml-[5%]'>
                        <div class="p-8 rounded-xl border border-(--c10) bg-transparent w-[100%]">
                            <h1 class="text-3xl font-bold mb-3 text-white text-left cursor-default">Resumo do pedido</h1>
                            
                            <div className='flex'>
                                <div className="relative w-full">
                                    <Tag size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#969696]" />
                                    <input placeholder='código promocional' className='placeholder:text-[#969696] w-[95%] text-white border-1 border-(--c10) rounded-lg px-9 py-[0.7px]'></input>
                                </div>

                                <button className='border-1 border-(--c8) cursor-pointer rounded-lg text-(--c8) text-sm px-4'>Aplicar</button>
                            </div>
                            
                            <div className="w-full mt-[5%] flex-1 h-[2px] bg-(--c10) rounded-full"></div>

                            <div class="grid grid-cols-2 mt-[2%]">
                                <p class="text-base text-white text-left cursor-default">
                                Subtotal
                                </p>
                                <p class="text-base text-[#969696] text-right cursor-default">
                                R$1678,00
                                </p>
                            </div>

                            <div class="grid grid-cols-2 mt-1">
                                <p class="text-base text-white text-left cursor-default">
                                Código promocional
                                </p>
                                <p class="text-base text-[#969696] text-right cursor-default">
                                -<span>R$00,00</span>
                                </p>
                            </div>

                            <div class="grid grid-cols-2 mt-1">
                                <p class="text-base text-white text-left cursor-default">
                                Frete
                                </p>
                                <p class="text-base text-[#969696] text-right cursor-default">
                                R$00,00
                                </p>
                            </div>
                            
                            <div className="w-full mt-[2%] flex-1 h-[2px] bg-(--c10) rounded-full"></div>

                            <div className='grid grid-cols-2 mt-[2%]'>
                                <p class="text-xl text-white text-left cursor-default font-bold">
                                Total
                                </p>
                                <p class="text-xl text-(--c8) text-right cursor-default font-bold">
                                R$1678,00
                                </p>
                            </div>

                            <div className='flex items-center flex-col'>
                                <button className='cursor-pointer bg-(--c8) text-white text-xl rounded-lg w-full py-2 font-semibold mt-[2%]'  onClick={()=>{window.location="/pagamento"}}>Continuar pedido</button>
                                <p className='cursor-default text-white text-[11px] font-light flex items-end mt-[1%]'>
                                    <Shield className='text-white' size={18}/>Suas informações de pagamento são encripitadas como forma de segurança</p>
                            </div>
                        </div>
                    </div>
            </section>
            </main>
        </div>
    )
}

export default Carrinho