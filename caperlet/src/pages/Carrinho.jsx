import '../assets/styles/App.css'
import { Tag, Shield, ArrowLeft } from "lucide-react"
import { Handbag } from "phosphor-react"
import CardCart from '../components/CardCart'

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
                        <CardCart/>
                    </div>
                    <div className='w-[50%] ml-[5%]'>
                        <div className="p-8 rounded-xl border border-(--c10) bg-transparent w-[100%]">
                            <h1 className="text-3xl font-bold mb-3 text-white text-left cursor-default">Resumo do pedido</h1>
                            
                            <div className='flex'>
                                <div className="relative w-full">
                                    <Tag size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#969696]" />
                                    <input placeholder='código promocional' className='placeholder:text-[#969696] w-[95%] text-white border-1 border-(--c10) rounded-lg px-9 py-[0.7px]'></input>
                                </div>

                                <button className='border-1 border-(--c8) cursor-pointer rounded-lg text-(--c8) text-sm px-4'>Aplicar</button>
                            </div>
                            
                            <div className="w-full mt-[5%] flex-1 h-[2px] bg-(--c10) rounded-full"></div>

                            <div className="grid grid-cols-2 mt-[2%]">
                                <p className="text-base text-white text-left cursor-default">
                                Subtotal
                                </p>
                                <p className="text-base text-[#969696] text-right cursor-default">
                                R$1678,00
                                </p>
                            </div>

                            <div className="grid grid-cols-2 mt-1">
                                <p className="text-base text-white text-left cursor-default">
                                Código promocional
                                </p>
                                <p className="text-base text-[#969696] text-right cursor-default">
                                -<span>R$00,00</span>
                                </p>
                            </div>

                            <div className="grid grid-cols-2 mt-1">
                                <p className="text-base text-white text-left cursor-default">
                                Frete
                                </p>
                                <p className="text-base text-[#969696] text-right cursor-default">
                                R$00,00
                                </p>
                            </div>
                            
                            <div className="w-full mt-[2%] flex-1 h-[2px] bg-(--c10) rounded-full"></div>

                            <div className='grid grid-cols-2 mt-[2%]'>
                                <p className="text-xl text-white text-left cursor-default font-bold">
                                Total
                                </p>
                                <p className="text-xl text-(--c8) text-right cursor-default font-bold">
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