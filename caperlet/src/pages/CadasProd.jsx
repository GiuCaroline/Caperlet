import '../assets/styles/App.css'
import { Dessert, ArrowLeft } from "lucide-react"
import { CakeSlice, ChevronDown , BadgeDollarSign } from "lucide-react"
import { Package } from "lucide-react"
import { useState } from "react";

function CadasProd(){
    const [preview, setPreview] = useState(null);

    function handleFile(e) {
        const file = e.target.files[0];
        if (!file) return;

        const url = URL.createObjectURL(file);
        setPreview(url);
    }
    return(
        <main className="flex-1 flex p-15 px-25 flex-col dark:bg-(--c3) bg-white montserrat-f">
            <div  onClick={()=>{window.history.back()}} className='text-(--c20) flex items-center gap-2 cursor-pointer w-[15%] transition duration-300 transform-cpu hover:text-(--c16)'>
                <ArrowLeft />
                <p>Continuar gerenciando</p>
            </div>
            <div className='mb-[3%] mt-[1%] flex items-center'>
                <Dessert size={55} className="bg-(--c21) rounded-full p-2" color='#C09AF8' />
                <div className='flex flex-col ml-[2%]'>
                    <h2 className='dark:text-white font-bold text-2xl'>Adicionando produtos</h2>
                </div>
            </div>

             <section className="dark:bg-(--c3) bg-white flex w-[100%]">
                    <div className='w-[92%] gap-5 flex flex-col'>
                        <div className="p-8 rounded-xl border border-(--c10) bg-transparent w-[100%]">
                           <div className="flex flex-col">
                                <h1 className="text-3xl font-bold mb-3 dark:text-white text-left cursor-default">Informações do doce</h1>

                                <div className='flex gap-10 flex-row w-full'>
                                    <div className='flex flex-col w-full'>
                                        <p className='dark:text-white ml-1 font-semibold cursor-default'>Nome</p>
                                        <div className="relative w-full">
                                            <CakeSlice size={23} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#969696]" />
                                            <input id="nomeDoce" className='w-[100%] dark:text-white border-1 border-(--c10) rounded-lg pl-10 pr-3 py-1'></input>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col w-full">
                                        <label className="dark:text-white ml-1 font-semibold cursor-default">Tipo</label>

                                        <div className="relative w-full">
                                            <select id="tipoDoce"
                                            className="w-full appearance-none bg-transparent dark:text-white border border-(--c10) rounded-lg px-3 py-1 pr-8"
                                            >
                                                <option value=""            className="dark:bg-(--c9) text-(--c15)">Selecione</option>
                                                <option value="Macaron"     className="dark:bg-(--c9) dark:text-white">Macaron</option>
                                                <option value="Bolo"        className="dark:bg-(--c9) dark:text-white">Bolo</option>
                                                <option value="Brigadeiro"  className="dark:bg-(--c9) dark:text-white">Brigadeiro</option>
                                                <option value="Creme"       className="dark:bg-(--c9) dark:text-white">Creme</option>
                                                <option value="Torta"       className="dark:bg-(--c9) dark:text-white">Torta</option>
                                            </select>

                                            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-white w-4 h-4" />
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col mt-[2%]'>
                                    <p className='dark:text-white ml-1 font-semibold cursor-default'>Descrição</p>
                                    <textarea id="descricaoDoce"
                                        className="bg-transparent dark:text-white p-4 w-full h-[6rem] rounded-xl border border-(--c10) outline-none resize-none"
                                        placeholder="Descreva o doce que será adicionado"
                                    ></textarea>
                                </div>

                                <div className='flex gap-10 flex-row w-full mt-[3%]'>
                                    <div className='flex flex-col w-full'>
                                        <h1 className="underline text-xl font-bold mb-2 text-(--c4) text-left cursor-default">Unidade</h1>
                                        <p className='dark:text-white ml-1 font-semibold cursor-default'>Preço</p>
                                        <div className="relative w-full">
                                            <BadgeDollarSign size={23} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#969696]" />
                                            <input id='precoUni' type="number" step="0.01" className='w-[100%] dark:text-white border-1 border-(--c10) rounded-lg pl-10 pr-3 py-1'></input>
                                        </div>
                                    </div>
                                    
                                    <div className="w-[1px] bg-(--c10) self-stretch"></div>

                                    <div className='flex flex-col w-full'>
                                        <h1 className="underline text-xl font-bold mb-2 text-(--c4) text-left cursor-default">Pacote</h1>
                                        <div className='flex gap-10 flex-row w-full'>
                                            <div className="flex flex-col w-full">
                                                <p className='dark:text-white ml-1 font-semibold cursor-default'>Qtd. por pacote</p>
                                                <div className="relative w-full">
                                                    <Package size={23} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#969696]" />
                                                    <input id='tamanhoPacote' type="number"className='w-[100%] dark:text-white border-1 border-(--c10) rounded-lg pl-10 pr-3 py-1'></input>
                                                </div>
                                            </div>

                                            <div className='flex flex-col w-full'>
                                                <p className='dark:text-white ml-1 font-semibold cursor-default'>Preço</p>
                                                <div className="relative w-full">
                                                    <BadgeDollarSign size={23} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#969696]" />
                                                    <input id='precoPacote' type="number" step="0.01" className='w-[100%] dark:text-white border-1 border-(--c10) rounded-lg pl-10 pr-3 py-1'></input>
                                                </div>
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="w-full">                            
                            <button className='w-full h-[2.3rem] text-white font-bold cursor-pointer 
                            bg-(--c8) border-0 rounded-md'>Adicionar</button>
                        </div>
                    </div>
                    <div className='w-[50%] ml-[5%]'>
                        <div className="p-8 rounded-xl border border-(--c10) bg-transparent w-full">
                            <div className='mb-[5%] flex justify-center w-full h-auto'>
                                {preview && (
                                    <img
                                    src={preview}
                                    alt="preview"
                                    className="max-h-[25rem] rounded-lg border border-(--c10) w-auto"
                                    />
                                )}
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFile}
                                className="w-full cursor-pointer dark:text-white file:cursor-pointer file:rounded-full file:border-0 file:bg-(--c8) file:px-4 file:py-2 file:text-sm
                                file:font-normal file:mr-2 file:text-white hover:file:bg-(--c21)"
                            />

                        </div>
                    </div>
            </section>
        </main>
    )
}

export default CadasProd