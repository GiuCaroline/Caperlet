import '../assets/styles/App.css'
import { Plus, Minus, FileImage } from "lucide-react"
import { useState } from 'react';

function CustomPack({moveStep}) {
    const [quantity, setQuantity] = useState(1)
    const [customCart, setCustomCart] = useState(localStorage.getItem('customCart') ? 
    JSON.parse(localStorage.getItem('customCart')) : {
        quantity: quantity,
        package: { packageSize: 8, packagePrice: 0 },
        description: ''});

    let customTax = customCart.base ? ((customCart.base.price * 0.25) * customCart.package.packageSize) : 0
    let packPrice = customCart.base ?
                    Number((customCart.base.price * customCart.package.packageSize) + (customTax) + ((customCart.package.packagePrice))) : 0;
        
    
    function selectPackageSize(size, sizePrice) {
        const updatedCart = { ...customCart, package: { packageSize: size, packagePrice: sizePrice } };
        setCustomCart(updatedCart);
        localStorage.setItem('customCart', JSON.stringify(updatedCart));
    }
    function setDesc(desc) {
        const updatedCart = { ...customCart, description: desc };
        setCustomCart(updatedCart);
        localStorage.setItem('customCart', JSON.stringify(updatedCart));
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
              <div className='w-full flex flex-col items-center'>
                <div className="p-8 rounded-xl border border-(--c12) bg-transparent w-[45rem]">
                  <h1 className="text-4xl font-bold mb-6 text-white text-left cursor-default">Customize o(s) pacote(s)</h1>

                  <h2 className='text-white font-bold text-base mt-5 cursor-default'>Tamanho do pacote</h2>

                  <div className='flex gap-3 justify-center mt-[2%]'>

                    <button onClick={()=>{selectPackageSize(8, 0)}} className={`${customCart.package?.packageSize === 8 ? 'bg-(--c12)' : 'bg-[rgba(53,41,22,0.2)]'} cursor-pointer text-white
                    rounded-xl border border-(--c12) px-14 py-5 flex flex-col items-center justify-center font-bold
                    hover:scale-105 transition-all duration-200 whitespace-normal text-center transition duration-300`}>
                      <span className="text-white text-base leading-none">8 unidades</span>
                      <span className="text-(--c18) text-sm font-medium mt-1">+ R$00,00</span>
                    </button>

                    <button onClick={()=>{selectPackageSize(12, 38)}} className={`${customCart.package?.packageSize === 12 ? 'bg-(--c12)' : 'bg-[rgba(53,41,22,0.2)]'} cursor-pointer text-white
                    rounded-xl border border-(--c12) px-14 py-5 flex flex-col items-center justify-center font-bold
                    hover:scale-105 transition-all duration-200 whitespace-normal text-center transition duration-300`}>
                      <span className="text-white text-base leading-none">12 unidades</span>
                      <span className="text-(--c18) text-sm font-medium mt-1">+ R$38,00</span>
                    </button>

                    <button onClick={()=>{selectPackageSize(16, 86)}} className={`${customCart.package?.packageSize === 16 ? 'bg-(--c12)' : 'bg-[rgba(53,41,22,0.2)]'} cursor-pointer text-white
                    rounded-xl border border-(--c12) px-14 py-5 flex flex-col items-center justify-center font-bold
                    hover:scale-105 transition-all duration-200 whitespace-normal text-center transition duration-300`}>
                      <span className="text-white text-base leading-none">16 unidades</span>
                      <span className="text-(--c18) text-sm font-medium mt-1">+ R$86,00</span>
                    </button>
                  </div>

                  <h2 className='text-white font-bold text-base mt-5 cursor-default'>Mensagem personalizada</h2>
                  <textarea onChange={(e)=>{setDesc(e.target.value)}} value={customCart.description || ''} maxLength={160}
                    className="mt-3 bg-[rgba(0,0,0,0.5)] text-white p-4 w-full h-[7rem] rounded-xl border border-(--c12) outline-none resize-none"
                    placeholder="Diga algo que precisamos saber sobre seu doce para torná-lo ainda mais especial"
                  ></textarea>

                  <div className="grid grid-cols-2 gap-[18rem]">
                        <p className="mt-3 text-sm text-[#D2D2D2] font-light text-left cursor-default">
                          {customCart.description.length || 0}/160 caracteres
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-[31rem] mt-5 w-[45rem]">
                <button className='w-[7rem] h-[2.3rem] text-(--c13) font-bold cursor-pointer 
                bg-[rgba(53,41,22,0.2)] border-1 border-(--c12) rounded-md' onClick={()=>{moveStep(2)}}>Regredir</button>
                
                <button className='w-[7rem] h-[2.3rem] text-white font-bold cursor-default opacity-[0.5]
                bg-(--c12) border-1 border-(--c12) rounded-md cursor-not-allowed'>Avançar</button>
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

                    <button onClick={()=>{location.pathname="/carrinho"}} className='w-[100%] h-[2.3rem] text-white font-bold cursor-pointer mt-7
                      bg-(--c12) border-1 border-(--c12) rounded-md transition duration-200 hover:scale-102 hover:bg-(--c25)'>Adicionar ao carrinho</button>
                  </div>
              </div>
            </section>
    )
}

export default CustomPack;