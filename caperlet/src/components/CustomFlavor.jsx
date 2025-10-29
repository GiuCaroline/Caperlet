import '../assets/styles/App.css'
import { Plus, Minus, FileImage } from "lucide-react"
import { Sparkle } from "phosphor-react"
import { useState } from 'react'

function CustomFlavor({moveStep}) {
    const [quantity, setQuantity] = useState(1)
    const [customCart, setCustomCart] = useState(localStorage.getItem('customCart') ? 
    JSON.parse(localStorage.getItem('customCart')) : {
        quantity: quantity,
        package: { packageSize: 8, packagePrice: 0 },
        description: ''});

    let customTax = customCart.base ? ((customCart.base.price * 0.25) * customCart.package.packageSize) : 0
    let packPrice = customCart.base ?
                    Number((customCart.base.price * customCart.package.packageSize) + (customTax) + ((customCart.package.packagePrice))) : 0;
        
    function selectFlavor(flavorName){
        let selectedFlavors = customCart.flavors || [];
        if(selectedFlavors.includes(flavorName)){
            selectedFlavors = selectedFlavors.filter(flavor => flavor !== flavorName);
        } else {
            if(selectedFlavors.length < 3){
                selectedFlavors.push(flavorName);
            }
        }
        const updatedCart = { ...customCart, flavors: selectedFlavors };
        setCustomCart(updatedCart);
        localStorage.setItem("customCart", JSON.stringify(updatedCart));
    }

    function encreaseQuantity(){
        const updatedCustomCart = {
            ...customCart,
            quantity: quantity + 1
        }
        setQuantity(quantity + 1)
        setCustomCart(updatedCustomCart)
        localStorage.setItem('customCart', JSON.stringify(updatedCustomCart))
    }

    function decreaseQuantity(){
        if(quantity > 1){
            const updatedCustomCart = {
                ...customCart,
                quantity: quantity - 1
            }
            setQuantity(quantity - 1)
            setCustomCart(updatedCustomCart)
            localStorage.setItem('customCart', JSON.stringify(updatedCustomCart))
        }
    }
    return(
        <section className="bg-(--c3) p-15 flex w-[100%]">
              <div className='w-full'>
                <div className='p-8 rounded-xl border border-(--c12) bg-transparent w-full'>
                  <h1 className="text-4xl font-bold mb-[4%] text-white text-left cursor-default">Selecione até 3 sabor(es)</h1>

                  <div className='flex flex-wrap gap-[1.5rem] justify-center'>
                    <button onClick={()=>{selectFlavor("Mel de lavanda")}} disabled={customCart.flavors?.length >= 3 && !customCart.flavors?.includes("Mel de lavanda")} className={`${customCart.flavors?.includes("Mel de lavanda") ? 'bg-(--c12)' : 'bg-[rgba(0,0,0,0.5)]'} ${customCart.flavors?.length >= 3 && !customCart.flavors?.includes("Mel de lavanda") && 'opacity-50 cursor-not-allowed'} border-1 border-(--c12) cursor-pointer text-white w-[45%] h-[2rem] 
                     rounded-md pl-[1rem] text-left font-medium transition duration-300`}>Mel de lavanda</button>

                    <button onClick={()=>{selectFlavor("Frutas vermelhas")}} disabled={customCart.flavors?.length >= 3 && !customCart.flavors?.includes("Frutas vermelhas")} className={`${customCart.flavors?.includes("Frutas vermelhas") ? 'bg-(--c12)' : 'bg-[rgba(0,0,0,0.5)]'} ${customCart.flavors?.length >= 3 && !customCart.flavors?.includes("Frutas vermelhas") && 'opacity-50 cursor-not-allowed'} border-1 border-(--c12) cursor-pointer text-white w-[45%] h-[2rem] 
                     rounded-md pl-[1rem] text-left font-medium transition duration-300`}>Frutas vermelhas</button>

                    <button onClick={()=>{selectFlavor("Chá preto")}} disabled={customCart.flavors?.length >= 3 && !customCart.flavors?.includes("Chá preto")} className={`${customCart.flavors?.includes("Chá preto") ? 'bg-(--c12)' : 'bg-[rgba(0,0,0,0.5)]'} ${customCart.flavors?.length >= 3 && !customCart.flavors?.includes("Chá preto") && 'opacity-50 cursor-not-allowed'} border-1 border-(--c12) cursor-pointer text-white w-[45%] h-[2rem] 
                     rounded-md pl-[1rem] text-left font-medium transition duration-300`}>Chá preto</button>

                    <button onClick={()=>{selectFlavor("Champanhe")}} disabled={customCart.flavors?.length >= 3 && !customCart.flavors?.includes("Champanhe")} className={`${customCart.flavors?.includes("Champanhe") ? 'bg-(--c12)' : 'bg-[rgba(0,0,0,0.5)]'} ${customCart.flavors?.length >= 3 && !customCart.flavors?.includes("Champanhe") && 'opacity-50 cursor-not-allowed'} border-1 border-(--c12) cursor-pointer text-white w-[45%] h-[2rem] 
                     rounded-md pl-[1rem] text-left font-medium transition duration-300`}>Champanhe</button>

                    <button onClick={()=>{selectFlavor("Baunilha")}} disabled={customCart.flavors?.length >= 3 && !customCart.flavors?.includes("Baunilha")} className={`${customCart.flavors?.includes("Baunilha") ? 'bg-(--c12)' : 'bg-[rgba(0,0,0,0.5)]'} ${customCart.flavors?.length >= 3 && !customCart.flavors?.includes("Baunilha") && 'opacity-50 cursor-not-allowed'} border-1 border-(--c12) cursor-pointer text-white w-[45%] h-[2rem] 
                     rounded-md pl-[1rem] text-left font-medium transition duration-300`}>Baunilha</button>

                    <button onClick={()=>{selectFlavor("Licor alcoólico")}} disabled={customCart.flavors?.length >= 3 && !customCart.flavors?.includes("Licor alcoólico")} className={`${customCart.flavors?.includes("Licor alcoólico") ? 'bg-(--c12)' : 'bg-[rgba(0,0,0,0.5)]'} ${customCart.flavors?.length >= 3 && !customCart.flavors?.includes("Licor alcoólico") && 'opacity-50 cursor-not-allowed'} border-1 border-(--c12) cursor-pointer text-white w-[45%] h-[2rem] 
                     rounded-md pl-[1rem] text-left font-medium transition duration-300`}>Licor alcoólico</button>

                    <button onClick={()=>{selectFlavor("Pistache")}} disabled={customCart.flavors?.length >= 3 && !customCart.flavors?.includes("Pistache")} className={`${customCart.flavors?.includes("Pistache") ? 'bg-(--c12)' : 'bg-[rgba(0,0,0,0.5)]'} ${customCart.flavors?.length >= 3 && !customCart.flavors?.includes("Pistache") && 'opacity-50 cursor-not-allowed'} border-1 border-(--c12) cursor-pointer text-white w-[45%] h-[2rem] 
                     rounded-md pl-[1rem] text-left font-medium transition duration-300`}>Pistache</button>

                    <button onClick={()=>{selectFlavor("Caramelo salgado")}} disabled={customCart.flavors?.length >= 3 && !customCart.flavors?.includes("Caramelo salgado")} className={`${customCart.flavors?.includes("Caramelo salgado") ? 'bg-(--c12)' : 'bg-[rgba(0,0,0,0.5)] border-1 border-(--c12)'} ${customCart.flavors?.length >= 3 && !customCart.flavors?.includes("Caramelo salgado") && 'opacity-50 cursor-not-allowed'} border-1 border-(--c12) cursor-pointer text-white w-[45%] h-[2rem] 
                     rounded-md pl-[1rem] text-left font-medium transition duration-300`}>Caramelo salgado</button>

                    <button onClick={()=>{selectFlavor("Chocolate branco")}} disabled={customCart.flavors?.length >= 3 && !customCart.flavors?.includes("Chocolate branco")} className={`${customCart.flavors?.includes("Chocolate branco") ? 'bg-(--c12)' : 'bg-[rgba(0,0,0,0.5)]'} ${customCart.flavors?.length >= 3 && !customCart.flavors?.includes("Chocolate branco") && 'opacity-50 cursor-not-allowed'} border-1 border-(--c12) cursor-pointer text-white w-[45%] h-[2rem] 
                     rounded-md pl-[1rem] text-left font-medium transition duration-300`}>Chocolate branco</button>

                    <button onClick={()=>{selectFlavor("Chocolate amargo")}} disabled={customCart.flavors?.length >= 3 && !customCart.flavors?.includes("Chocolate amargo")} className={`${customCart.flavors?.includes("Chocolate amargo") ? 'bg-(--c12)' : 'bg-[rgba(0,0,0,0.5)]'} ${customCart.flavors?.length >= 3 && !customCart.flavors?.includes("Chocolate amargo") && 'opacity-50 cursor-not-allowed'} border-1 border-(--c12) cursor-pointer text-white w-[45%] h-[2rem] 
                     rounded-md pl-[1rem] text-left font-medium transition duration-300`}>Chocolate meio amargo</button>

                    <div className="grid grid-cols-2 gap-[18rem]">
                        <p className="mt-[2%] text-sm text-white text-left cursor-default">
                          {customCart.flavors?.length || 0} de 3 sabores selecionados
                        </p>
                    </div>
                  </div>
                </div>
                  <div className="grid grid-cols-2 gap-[31rem] mt-5 w-[45rem]">
                    <button className='w-full h-[2.3rem] text-(--c13) font-bold cursor-pointer 
                    bg-[rgba(53,41,22,0.2)] border-1 border-(--c12) rounded-md' onClick={()=>{moveStep(0)}}>Regredir</button>
                    
                    <button className='w-full h-[2.3rem] text-white font-bold cursor-pointer 
                    bg-(--c12) border-1 border-(--c12) rounded-md' onClick={()=>{moveStep(2)}}>Avançar</button>
                  </div>
              </div>
              <div className='w-[50%] ml-[5%]'>
                  <div className="p-8 rounded-xl border border-(--c12) bg-transparent w-[45rem] flex flex-col">
                    <h1 className="text-4xl font-bold mb-6 text-white text-left cursor-default">Sua criação açucarada</h1>

                    {
                        customCart.base
                        ?
                        <img
                        src={customCart.base?.image || "/images/Macaron1.png"}
                        alt="Macaron francês"
                        className="mt-3 w-full"
                        /> 
                        :
                        <div class="flex items-center justify-center h-78 animate-pulse mb-auto mt-auto bg-(--c10) rounded-md w-full">
                            <FileImage size={55} className='text-(--c6)'></FileImage>
                        </div>
                    }

                    <h2 className='text-white font-bold text-xl mt-5 cursor-default'>Tipo de base</h2>
                    <p className={`${customCart.base?.name ? 'text-(--c16)' : 'h-3 bg-(--c10) animate-pulse rounded-md w-48 mb-auto mt-auto'} text-base text-left cursor-default`}>
                      {customCart.base?.name || ''}
                    </p>

                    <div className={`${customCart.package ? 'block' : 'hidden'}`}>
                        <h2 className='text-white font-bold text-xl mt-5 cursor-default'>Tamanho do pacote</h2>
                        <p className={`${customCart.package?.packageSize ? 'text-(--c16)' : 'h-3 bg-(--c10) animate-pulse rounded-md w-48 mb-auto mt-auto'} text-base text-left cursor-default`}>
                        {customCart.package?.packageSize ? `${customCart.package.packageSize} unidades` : ''}
                        </p>
                    </div>

                    <div className={`${customCart.flavors ? 'block' : 'hidden'}`}>
                        <h2 className='text-white font-bold text-xl mt-5'>Sabores</h2>
                        <p className="text-base text-(--c16) text-left cursor-default">
                        {customCart.flavors ? customCart.flavors.join(", ") : ''}
                        </p>
                    </div>

                    <div className={`${customCart.color ? 'block' : 'hidden'}`}>
                        <h2 className='text-white font-bold text-xl mt-5'>Cor principal</h2>
                        <div className='flex flex-row gap-2'>
                            {customCart.color?.map((color, index) => {
                                return(
                                    <div key={index}
                                    className={`top-2 right-2 w-6 h-6 border-2 border-(--c12) rounded-full bg-[${color.code}]`}
                                    ></div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={`${customCart.details ? 'block' : 'hidden'}`}>
                        <h2 className='text-white font-bold text-xl mt-5'>Detalhes</h2>
                        <p className="text-base text-(--c16) text-left cursor-default">
                        {customCart.details ? customCart.details.join(", ") : ''}
                        </p>
                    </div>

                    <div className={`${customCart.description ? 'block' : 'hidden'}`}>
                        <h2 className='text-white font-bold text-xl mt-5'>Descrição</h2>
                        <p className="text-base text-(--c16) text-left cursor-default">
                        {customCart.description ? customCart.description : ''}
                        </p>
                    </div>

                    <div className="mt-6 mb-4 h-[2px] w-[100%] bg-(--c12) rounded-full cursor-default"></div>

                    <div className="grid grid-cols-2">
                      <p className="text-base text-white text-left cursor-default w-[15rem] font-bold">
                        Preço base
                      </p>
                      <p className={`${customCart.base?.name ? 'text-(--c16)' : 'h-3 bg-(--c10) animate-pulse rounded-md w-48 mb-auto mt-auto mr-0 ml-auto'} text-base text-[#777777] text-right cursor-default font-bold`}>
                        {`${customCart.base?.price ? `R$${customCart.base.price.toFixed(2)}` : ''}`}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 mt-1">
                      <p className="text-base text-white text-left cursor-default w-[15rem] font-bold">
                        Taxa de customização
                      </p>
                      <p className={`${customCart.base ? '' : 'h-3 bg-(--c10) animate-pulse rounded-md w-48 mb-auto mt-auto mr-0 ml-auto'} text-base text-[#777777] text-right cursor-default font-bold`}>
                        {`${customCart.base ? `R$${customTax.toFixed(2)}` : ''}`}
                      </p>
                    </div>

                    <div className={`${customCart.package ? 'block' : 'hidden'} grid grid-cols-2 mt-1`}>
                      <p className="text-base text-white text-left cursor-default w-[15rem] font-bold">
                        Upgrade de pacote
                      </p>
                      <p className="text-base text-[#777777] text-right cursor-default font-bold">
                        {`${customCart.package ? `R$${customCart.package.packagePrice.toFixed(2)}` : ''}`}
                      </p>
                    </div>

                    <div className="mt-4 mb-4 h-[2px] w-[100%] bg-(--c12) rounded-full"></div>

                    <div className="grid grid-cols-2 mt-1">
                      <p className="text-lg text-(--c4) text-left cursor-default w-[15rem] font-bold">
                        Total por pacote
                      </p>
                      <p className={`${customCart.package ? '' : 'h-3 bg-(--c8) animate-pulse rounded-md w-48 mb-auto mt-auto mr-0 ml-auto'} text-base text-(--c8) text-right cursor-default font-bold`}>
                        {`${customCart.base ? `R$${(packPrice).toFixed(2)}` : ''}`}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 mt-1">
                      <p className="text-base text-white text-left cursor-default w-[15rem] font-bold">
                        Quantidade de pacotes
                      </p>
                      <div className="flex items-center gap-3 justify-end">
                        <button onClick={()=>{decreaseQuantity()}} className="flex items-center justify-center w-7 h-7 
                        rounded-md bg-(--c9) border-(--c12) border-2 text-white text-lg font-bold cursor-pointer transition duration-200
                        hover:scale-105">
                          <Minus className="text-(--c17)" size={17}/>
                        </button>
                        <span className="text-white font-medium cursor-default">{quantity}</span>
                        <button onClick={()=>{encreaseQuantity()}} className="flex items-center justify-center w-7 h-7
                        rounded-md bg-(--c9) border-(--c12) border-2 text-white text-lg font-bold cursor-pointer transition duration-200 
                        hover:scale-105">
                          <Plus className="text-(--c17)" size={17}/>
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 mt-7">
                      <h2 className='text-white font-bold text-xl cursor-default'>Total da compra</h2>
                      <p className={`${customCart.base ? '' : 'h-3 bg-(--c8) animate-pulse rounded-md w-48 mb-auto mt-auto mr-0 ml-auto'} text-xl text-(--c7) text-right cursor-default font-bold`}>
                        {`${customCart.base ? `R$${(packPrice * quantity).toFixed(2)}` : ''}`}
                      </p>
                    </div>

                    <button className='w-[100%] h-[2.3rem] text-white font-bold cursor-pointer mt-7
                      bg-(--c12) border-1 border-(--c12) rounded-md transition duration-200 hover:scale-102 hover:bg-(--c25)'>Adicionar ao carrinho</button>
                  </div>
              </div>
            </section>
    )
}

export default CustomFlavor;