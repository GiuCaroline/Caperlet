import '../assets/styles/App.css'
import { Plus, Minus } from "lucide-react"
import { ArrowLeft } from "lucide-react"
import { Trash2 } from "lucide-react"
import { Handbag } from "phosphor-react"

function Carrinho(){
    return(
        <div className='bg-(--c3) montserrat-f'>
            <main className="flex-1 flex p-15 px-25 flex-col">
                <div className='flex items-center gap-2 cursor-pointer w-[13%]'  onClick={()=>{window.location="/loja"}}>
                    <ArrowLeft className='text-(--c20)'/>
                    <p className='text-(--c20)'>Continuar comprando</p>
                </div>
                <div className='mb-8 mt-3 flex '>
                    <Handbag size={55} className="bg-(--c21) rounded-full p-2" color='#C09AF8' />
                    <div className='flex flex-col ml-3'>
                        <h2 className='text-white font-bold text-2xl'>Carrinho de compras</h2>
                        <p className='text-white font-light'>2 itens no seu carrinho</p>
                    </div>
                </div>
                <section className="bg-(--c3)  flex w-[100%]">
                    <div className='w-[92%] gap-10 flex flex-col'>
                        <div class="p-8 rounded-xl border border-[#2a2a2a] bg-transparent w-[100%]">
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
                                        <p className='cursor-default mt-2 text-[11px] border-2 border-(--c8) p-[1px] text-(--c8) rounded-md'>unidade</p>
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
                        <div class="p-8 rounded-xl border border-(--c12) bg-transparent w-[30rem] flex flex-col">
                        </div>
                    </div>
            </section>
            </main>
        </div>
    )
}

export default Carrinho