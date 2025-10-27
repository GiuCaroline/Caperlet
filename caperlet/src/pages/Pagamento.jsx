import '../assets/styles/App.css'
import { ArrowLeft, User, Tag, Shield, CreditCard, Calendar, CalendarDays, Truck, Lock, Mail, Phone, MapPinned } from "lucide-react"
import { Handbag } from "phosphor-react"
import { useState } from 'react'

function Pagamento() {
    const [dataEntrega, setDataEntrega] =  useState(dataMinima());
    function dataMinima() {
        const hoje = new Date();
        hoje.setDate(hoje.getDate() + 3); // Adiciona 3 dias à data atual

        const ano = hoje.getFullYear();
        const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // Meses começam do zero
        const dia = String(hoje.getDate()).padStart(2, '0');

        return `${ano}-${mes}-${dia}`;
    }
    return(
        <div className='dark:bg-(--c3) bg-(--c24) montserrat-f md:pb-[20%]'>
            <main className="flex-1 flex p-15 px-25 flex-col">
                <div onClick={()=>{window.history.back()}} className='flex items-center gap-2 cursor-pointer w-[13%]'>
                    <ArrowLeft className='text-(--c20)'/>
                    <p className='text-(--c20)'>Voltar pro carrinho</p>
                </div>
                <div className='mb-8 mt-3 flex '>
                    <Handbag size={55} className="bg-(--c21) rounded-full p-2 text-(--c4)"  />
                    <div className='flex flex-col ml-3'>
                        <h2 className='dark:text-white text-(--c27) font-bold text-2xl'>Finalizando pedido</h2>
                        <p className='dark:text-white text-(--c27) font-light'>Confira os dados de envio e pagamento</p>
                    </div>
                </div>
                <section className="dark:bg-(--c3) bg-(--c24) flex w-full">
                    <div className='w-[92%] gap-10 flex flex-col'>
                        <div className="p-8 rounded-xl border dark:border-(--c10) border-(--c25) bg-transparent w-full">
                            <div className="flex flex-col">
                                <h1 className="text-3xl font-bold mb-3 dark:text-white text-(--c27) text-left cursor-default">Informações de envio</h1>

                                <div className='flex gap-10 flex-row w-full'>
                                    <div className='flex flex-col w-full'>
                                        <p className='dark:text-white text-(--c27) ml-1 font-semibold'>Nome</p>
                                        <div className="relative w-full">
                                            <User size={23} className="absolute left-3 top-1/2 -translate-y-1/2 text-(--c5)" />
                                            <input id="nome" className='w-full dark:text-white text-(--c27) border-1 dark:border-(--c10)
                                            border-(--c25) rounded-lg px-10 py-1'></input>
                                        </div>
                                    </div>
                                    
                                    <div className='flex flex-col w-full'>
                                        <p className='dark:text-white text-(--c27) ml-1 font-semibold'>Sobrenome</p>
                                        <div className="relative w-full">
                                            <input id='sobrenome' className='w-full dark:text-white text-(--c27) border-1 dark:border-(--c10)
                                            border-(--c25) rounded-lg px-3 py-1'></input>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex gap-10 flex-row w-full mt-[2%]'>
                                    <div className='flex flex-col w-full'>
                                        <p className='dark:text-white text-(--c27) ml-1 font-semibold'>Email</p>
                                        <div className="relative w-full">
                                            <Mail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#969696]" />
                                            <input id='email' className='w-full dark:text-white text-(--c27) border-1 dark:border-(--c10)
                                            border-(--c25) rounded-lg px-10 py-1'></input>
                                        </div>
                                    </div>
                                    
                                    <div className='flex flex-col w-full'>
                                        <p className='dark:text-white text-(--c27) ml-1 font-semibold'>Telefone</p>
                                        <div className="relative w-full">
                                            <Phone size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#969696]" />
                                            <input id='telefone' className='w-full dark:text-white text-(--c27) border-1 dark:border-(--c10)
                                            border-(--c25) rounded-lg px-10 py-1'></input>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col mt-[2%]'>
                                    <p className='dark:text-white text-(--c27) ml-1 font-semibold'>Endereço</p>
                                    <div className="relative w-full">
                                        <MapPinned size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#969696]" />
                                        <input id='endereco' className='w-full dark:text-white text-(--27) border-1 dark:border-(--c10)
                                        border-(--c25) rounded-lg px-10 py-1'></input>
                                    </div>
                                </div>

                                <div className='flex gap-10 flex-row w-full mt-[2%]'>
                                    <div className='flex flex-col w-full'>
                                        <p className='dark:text-white text-(--c27) ml-1 font-semibold'>Cidade</p>
                                        <input id='cidade' className='w-full dark:text-white text-(--c27) border-1 dark:border-(--c10)
                                        border-(--c25) rounded-lg px-3 py-1'></input>
                                    </div>
                                    
                                    <div className='flex flex-col w-full'>
                                        <p className='dark:text-white text-(--c27) ml-1 font-semibold'>Estado</p>
                                        <input id='estado' className='w-full dark:text-white text-(--c27) border-1 dark:border-(--c10)
                                        border-(--c25) rounded-lg px-3 py-1'></input>
                                    </div>

                                    <div className='flex flex-col w-full'>
                                        <p className='dark:text-white text-(--c27) ml-1 font-semibold'>CEP</p>
                                        <input id='cep' className='w-full dark:text-white text-(--c27) border-1 dark:border-(--c10)
                                        border-(--c25) rounded-lg px-3 py-1'></input>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>   

                        <div className="p-8 rounded-xl border border-(--c10) bg-transparent w-[100%]">
                            <div className="flex flex-col">
                                <h1 className="text-3xl font-bold mb-3 text-white text-left cursor-default">Entrega</h1>

                                <div className='flex gap-10 flex-row w-full'>
                                    <div className='flex flex-col w-full'>
                                        <p className='text-white ml-1 font-semibold'>Data de entrega</p>
                                        <div className="relative w-full">
                                            <CalendarDays size={23}className="absolute left-3 top-1/2 -translate-y-1/2 text-(--c5)" />
                                            <input id="dataEntrega" name='dataEntrega' type='date' min={dataMinima()} value={dataEntrega} onChange={(e) => {setDataEntrega(e.target.value)}} className='w-[100%] border-1 border-(--c10) invert rounded-lg pl-10 pr-2 py-1'></input>
                                        </div>
                                        <div className="bg-(--c24)/20 text-white border border-(--c25) rounded-lg p-4 mt-3">
                                            <div className="flex items-start gap-3">
                                                <Truck className="w-5 h-5 text-(--c25) text-accent mt-0.5 flex-shrink-0" />
                                                <div className="space-y-1">
                                                <p className="text-sm font-medium text-foreground">Pedidos entregues de 3 a 7 dias úteis</p>
                                                <p className="text-xs text-muted-foreground text-(--c20)">
                                                    Seus doces delicados serão cuidadosamente embalados com controle de temperatura para garantir a condição perfeita na chegada.
                                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                

                            </div>
                        </div>

                        <div className="p-8 rounded-xl border dark:border-(--c10) border-(--c25) bg-transparent w-full">
                            <div className="flex flex-col">
                                <h1 className="text-3xl font-bold mb-3 dark:text-white text-(--c27) text-left cursor-default">Informações de pagamento</h1>

                                <div className='flex flex-row gap-3'>
                                    <button className='cursor-pointer border-1 border-(--c8) bg-(--c8) text-(--c3) rounded-lg w-[10%] text-sm'>Crédito</button>
                                    <button className='cursor-pointer border-1 border-(--c8) bg-transparent text-(--c8) rounded-lg w-[10%] text-sm'>Débito</button>
                                    <button className='cursor-pointer border-1 border-(--c8) bg-transparent text-(--c8) rounded-lg w-[10%] text-sm'>Pix</button>
                                </div>

                                <div className='flex flex-col mt-[2%]'>
                                    <p className='dark:text-white text-(--c27) ml-1 font-semibold'>Número do cartão</p>
                                    <div className="relative w-full">
                                        <CreditCard size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#969696]" />
                                        <input id='cartao' className='w-full dark:text-white text-(--c27) border-1 dark:border-(--c10)
                                        border-(--c25) rounded-lg px-10 py-1'></input>
                                    </div>
                                </div>

                                <div className='flex gap-10 flex-row w-full mt-[2%]'>
                                    <div className='flex flex-col w-full'>
                                        <p className='dark:text-white text-(--c27) ml-1 font-semibold'>Data de expiração</p>
                                        <div className="relative w-full">
                                            <Calendar size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-(--c5)" />
                                            <input id='expiracao' className='w-full dark:text-white text-(--c27) border-1 dark:border-(--c10)
                                            border-(--c25) rounded-lg px-10 py-1'></input>
                                        </div>
                                    </div>
                                    
                                    <div className='flex flex-col w-full'>
                                        <p className='dark:text-white text-(--c27)  ml-1 font-semibold'>CVV</p>
                                        <div className="relative w-full">
                                            <Lock size={20} className="absolute left-3 top-1/2 -translate-y-1/2 " />
                                            <input id='cvv' className='w-full dark:text-white text-(--c27) border-1 dark:border-(--c10)
                                            border-(--c25) rounded-lg px-10 py-1'></input>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col mt-[2%]'>
                                    <p className='dark:text-white text-(--c27) ml-1 font-semibold'>Nome como está no cartão</p>
                                    <input id='nomeCard' className='w-full dark:text-white text-(--c27) border-1 dark:border-(--c10)
                                        border-(--c25) rounded-lg px-3 py-1'></input>
                                </div>

                            </div>
                        </div>

                    <div className='w-[50%] ml-[5%]'>
                        <div className="p-8 rounded-xl border dark:border-(--c10) border-(--c25) bg-transparent w-full">
                            <h1 className="text-3xl font-bold mb-3 dark:text-white text-(--c27) text-left cursor-default">Resumo do pedido</h1>
                            
                            <div className='flex'>
                                <div className="relative w-full">
                                    <Tag size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#969696]" />
                                    <input placeholder='código promocional' className='w-[95%] placeholder:text-[#969696] text-(--c27) dark:text-white border-1
                                    dark:border-(--c10) border-(--c25) rounded-lg px-9 py-[0.7px]'></input>
                                </div>

                                <button className='border-1 border-(--c8) cursor-pointer rounded-lg text-(--c8) text-sm px-4'>Aplicar</button>
                            </div>
                            
                            <div className="w-full mt-[5%] flex-1 h-[2px] dark:bg-(--c10) bg-(--c25) rounded-full"></div>

                            <div className="grid grid-cols-2 mt-[2%]">
                                <p className="text-base dark:text-white text-(--c27) text-left cursor-default">
                                Subtotal
                                </p>
                                <p className="text-base text-(--c5) text-right cursor-default">
                                R$1678,00
                                </p>
                            </div>

                            <div className="grid grid-cols-2 mt-1">
                                <p className="text-base dark:text-white text-(--c27) text-left cursor-default">
                                Código promocional
                                </p>
                                <p className="text-base text-(--c5) text-right cursor-default">
                                -<span>R$00,00</span>
                                </p>
                            </div>

                            <div className="grid grid-cols-2 mt-1">
                                <p className="text-base dark:text-white text-(--c27) text-left cursor-default">
                                Frete
                                </p>
                                <p className="text-base text-(--c5) text-right cursor-default">
                                R$00,00
                                </p>
                            </div>
                            
                            <div className="w-full mt-[2%] flex-1 h-[2px] dark:bg-(--c10) bg-(--c25) rounded-full"></div>

                            <div className='grid grid-cols-2 mt-[2%]'>
                                <p className="text-xl dark:text-white text-(--c27) text-left cursor-default font-bold">
                                Total
                                </p>
                                <p className="text-xl text-(--c8) text-right cursor-default font-bold">
                                R$1678,00
                                </p>
                            </div>

                            <div className='flex items-center flex-col'>
                                <button className='cursor-pointer bg-(--c23) text-white text-xl rounded-lg w-full py-2 font-semibold mt-[2%]'>Finalizar pedido</button>
                                <p className='cursor-default dark:text-white text-(--c27) text-[11px] font-light flex items-end mt-[1%]'>
                                    <Shield className='dark:text-white text-(--c27)' size={18}/>Suas informações de pagamento são encripitadas como forma de segurança</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Pagamento