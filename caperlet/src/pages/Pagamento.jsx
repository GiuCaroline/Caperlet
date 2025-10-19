import '../assets/styles/App.css'
import { Plus, Minus } from "lucide-react"
import { ArrowLeft } from "lucide-react"
import { User, Tag, Shield } from "lucide-react"
import { Mail, Phone, MapPinned } from "lucide-react"
import { CreditCard, Calendar, Lock } from "lucide-react"
import { Handbag } from "phosphor-react"

function Pagamento() {
    return(
        <div className='bg-(--c3) montserrat-f md:pb-[20%]'>
            <main className="flex-1 flex p-15 px-25 flex-col">
                <div onClick={()=>{window.history.back()}} className='flex items-center gap-2 cursor-pointer w-[13%]'>
                    <ArrowLeft className='text-(--c20)'/>
                    <p className='text-(--c20)'>Voltar pro carrinho</p>
                </div>
                <div className='mb-8 mt-3 flex '>
                    <Handbag size={55} className="bg-(--c22) rounded-full p-2" color='#15D33E' />
                    <div className='flex flex-col ml-3'>
                        <h2 className='text-white font-bold text-2xl'>Finalizando pedido</h2>
                        <p className='text-white font-light'>Confira os dados de envio e pagamento</p>
                    </div>
                </div>
                <section className="bg-(--c3) flex w-[100%]">
                    <div className='w-[92%] gap-10 flex flex-col'>
                        <div class="p-8 rounded-xl border border-(--c10) bg-transparent w-[100%]">
                            <div class="flex flex-col">
                                <h1 class="text-3xl font-bold mb-3 text-white text-left cursor-default">Informações de envio</h1>

                                <div className='flex gap-10 flex-row w-full'>
                                    <div className='flex flex-col w-full'>
                                        <p className='text-white ml-1 font-semibold'>Nome</p>
                                        <div className="relative w-full">
                                            <User size={23} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#969696]" />
                                            <input id="nome" className='w-[100%] text-white border-1 border-(--c10) rounded-lg px-10 py-1'></input>
                                        </div>
                                    </div>
                                    
                                    <div className='flex flex-col w-full'>
                                        <p className='text-white ml-1 font-semibold'>Sobrenome</p>
                                        <div className="relative w-full">
                                            <input id='sobrenome' className='w-[100%] text-white border-1 border-(--c10) rounded-lg px-3 py-1'></input>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex gap-10 flex-row w-full mt-[2%]'>
                                    <div className='flex flex-col w-full'>
                                        <p className='text-white ml-1 font-semibold'>Email</p>
                                        <div className="relative w-full">
                                            <Mail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#969696]" />
                                            <input id='email' className='w-[100%] text-white border-1 border-(--c10) rounded-lg px-10 py-1'></input>
                                        </div>
                                    </div>
                                    
                                    <div className='flex flex-col w-full'>
                                        <p className='text-white ml-1 font-semibold'>Telefone</p>
                                        <div className="relative w-full">
                                            <Phone size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#969696]" />
                                            <input id='telefone' className='w-[100%] text-white border-1 border-(--c10) rounded-lg px-10 py-1'></input>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col mt-[2%]'>
                                    <p className='text-white ml-1 font-semibold'>Endereço</p>
                                    <div className="relative w-full">
                                        <MapPinned size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#969696]" />
                                        <input id='endereco' className='w-[100%] text-white border-1 border-(--c10) rounded-lg px-10 py-1'></input>
                                    </div>
                                </div>

                                <div className='flex gap-10 flex-row w-full mt-[2%]'>
                                    <div className='flex flex-col w-full'>
                                        <p className='text-white ml-1 font-semibold'>Cidade</p>
                                        <input id='cidade' className='w-[100%] text-white border-1 border-(--c10) rounded-lg px-3 py-1'></input>
                                    </div>
                                    
                                    <div className='flex flex-col w-full'>
                                        <p className='text-white ml-1 font-semibold'>Estado</p>
                                        <input id='estado' className='w-[100%] text-white border-1 border-(--c10) rounded-lg px-3 py-1'></input>
                                    </div>

                                    <div className='flex flex-col w-full'>
                                        <p className='text-white ml-1 font-semibold'>CEP</p>
                                        <input id='cep' className='w-[100%] text-white border-1 border-(--c10) rounded-lg px-3 py-1'></input>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="p-8 rounded-xl border border-[#2a2a2a] bg-transparent w-[100%]">
                            <div class="flex flex-col">
                                <h1 class="text-3xl font-bold mb-3 text-white text-left cursor-default">Informações de pagamento</h1>

                                <div className='flex flex-row gap-3'>
                                    <button className='cursor-pointer border-1 border-(--c23) bg-(--c23) text-(--c3) rounded-lg w-[10%] text-sm'>Crédito</button>
                                    <button className='cursor-pointer border-1 border-(--c23) bg-transparent text-(--c23) rounded-lg w-[10%] text-sm'>Débito</button>
                                    <button className='cursor-pointer border-1 border-(--c23) bg-transparent text-(--c23) rounded-lg w-[10%] text-sm'>Pix</button>
                                </div>

                                <div className='flex flex-col mt-[2%]'>
                                    <p className='text-white ml-1 font-semibold'>Número do cartão</p>
                                    <div className="relative w-full">
                                        <CreditCard size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#969696]" />
                                        <input id='cartao' className='w-[100%] text-white border-1 border-(--c10) rounded-lg px-10 py-1'></input>
                                    </div>
                                </div>

                                <div className='flex gap-10 flex-row w-full mt-[2%]'>
                                    <div className='flex flex-col w-full'>
                                        <p className='text-white ml-1 font-semibold'>Data de expiração</p>
                                        <div className="relative w-full">
                                            <Calendar size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#969696]" />
                                            <input id='expiracao' className='w-[100%] text-white border-1 border-(--c10) rounded-lg px-10 py-1'></input>
                                        </div>
                                    </div>
                                    
                                    <div className='flex flex-col w-full'>
                                        <p className='text-white ml-1 font-semibold'>CVV</p>
                                        <div className="relative w-full">
                                            <Lock size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#969696]" />
                                            <input id='cvv' className='w-[100%] text-white border-1 border-(--c10) rounded-lg px-10 py-1'></input>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col mt-[2%]'>
                                    <p className='text-white ml-1 font-semibold'>Nome como está no cartão</p>
                                    <input id='nomeCard' className='w-[100%] text-white border-1 border-(--c10) rounded-lg px-3 py-1'></input>
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
                                    <input placeholder='código promocional' className='w-[95%] text-[#969696] border-1 border-(--c10) rounded-lg px-9 py-[0.7px]'></input>
                                </div>

                                <button className='border-1 border-(--c23) cursor-pointer rounded-lg text-(--c23) text-sm px-4'>Aplicar</button>
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
                                <p class="text-xl text-(--c23) text-right cursor-default font-bold">
                                R$1678,00
                                </p>
                            </div>

                            <div className='flex items-center flex-col'>
                                <button className='cursor-pointer bg-(--c23) text-white text-xl rounded-lg w-full py-2 font-semibold mt-[2%]'>Finalizar pedido</button>
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

export default Pagamento