import '../assets/styles/App.css'
import { Plus, Minus, FileImage } from "lucide-react"
import { useState } from 'react';

function CustomBase({moveStep}) {
    const [quantity, setQuantity] = useState(1)
    const [customCart, setCustomCart] = useState(localStorage.getItem('customCart') ? 
    JSON.parse(localStorage.getItem('customCart')) : {
        quantity: quantity,
        package: { package_size: 8, package_price: 0 },
        description: ''});

    let customTax = customCart.base ? ((customCart.base.price * 0.25) * customCart.package.package_size) : 0
    let packPrice = customCart.base ?
                    Number((customCart.base.price * customCart.package.package_size) + (customTax) + ((customCart.package.package_price))) : 0;
                            
    function selectBase(baseName, basePrice, image){
        const updatedCustomCart = {
            ...customCart,
            base: {
                name: baseName,
                price: basePrice,
                image: image
                
            }
        };
        setCustomCart(updatedCustomCart);
        localStorage.setItem('customCart', JSON.stringify(updatedCustomCart));
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
        <section className='dark:bg-(--c3) bg-(--c24) flex w-full'>
              <div className='w-full'>
                <div className="p-8 rounded-xl border dark:border-(--c12) border-(--c25) bg-transparent w-full">
                  <h1 className="text-4xl font-bold mb-[5%] dark:text-white text-(--c27) text-left cursor-default">Escolha a base para seu doce</h1>

                  <div className="grid grid-cols-2 gap-6">
                    <div onClick={()=>{selectBase("Brigadeiro", 10, "/images/Brigadeiro1.png")}} className={`${customCart.base?.name === "Brigadeiro" ? 'dark:border-(--c7) border-(--c2) border-3' : 'dark:border-(--c12) border-(--c25) border-2'} cursor-pointer 
                    p-5 flex-col flex justify-center rounded-2xl dark:bg-[rgba(53,41,22,0.2)] bg-[rgba(201,166,130,0.2)]
                    hover:scale-102 transition-all duration-300`}>
                        <div className='relative'>
                            <img
                                src="/images/Brigadeiro1.png"
                                alt="Brigadeiro"
                                className='w-full'
                            />
                            <div
                                className={` ${customCart.base?.name === "Brigadeiro" ? 'absolute top-2 right-2 w-4 h-4 rounded-full dark:bg-(--c7) bg-(--c2) border-4 dark:border-(--c12) border-(--c25)' : ''}`}
                                ></div>
                            <p className='font-semibold dark:text-white text-(--c27) text-lg mt-[2%]'>Brigadeiro trufado</p>
                            <p className='font-light text-xs dark:text-white text-(--c27)'>R$10,00 cada</p>
                        </div>
                    </div>

                    <div onClick={()=>{selectBase("Macaron francês", 12, "/images/Macaron1.png")}} className={`${customCart.base?.name === "Macaron francês" ? 'dark:border-(--c7) border-(--c2) border-3' : 'dark:border-(--c12) border-(--c25) border-2'} cursor-pointer
                     p-5 flex-col flex justify-center rounded-2xl dark:bg-[rgba(53,41,22,0.2)] bg-[rgba(201,166,130,0.2)]
                    hover:scale-102 transition-all duration-300`}>
                      <div className='relative'>
                        <img
                          src="/images/Macaron1.png"
                          alt="Macaron francês"
                          className='w-full'
                        />
                        <div
                          className={` ${customCart.base?.name === "Macaron francês" ? 'absolute top-2 right-2 w-4 h-4 rounded-full dark:bg-(--c7) bg-(--c2) border-4 dark:border-(--c12) border-(--c25)' : ''}`}
                        ></div>
                        <p className='font-semibold dark:text-white text-(--c27) text-lg mt-[2%]'>Macaron francês</p>
                        <p className='font-light text-xs dark:text-white text-(--c27)'>R$12,00 cada</p>
                      </div>
                    </div>

                    <div onClick={()=>{selectBase("Bombom", 12, "/images/Bombom1.png")}} className={`${customCart.base?.name === "Bombom" ? 'dark:border-(--c7) border-(--c2) border-3' : 'dark:border-(--c12) border-(--c25) border-2'} cursor-pointer
                     p-5 flex-col flex justify-center rounded-2xl dark:bg-[rgba(53,41,22,0.2)] bg-[rgba(201,166,130,0.2)]
                    hover:scale-102 transition-all duration-300`}>
                        <div className='relative'>  
                            <img
                                src="/images/Bombom1.png"
                                alt="Bombom"
                                className='w-full'
                            />
                            <div
                                className={` ${customCart.base?.name === "Bombom" ? 'absolute top-2 right-2 w-4 h-4 rounded-full dark:bg-(--c7) bg-(--c2) border-4 dark:border-(--c12) border-(--c25)' : ''}`}
                                ></div>
                            <p className='font-semibold dark:text-white text-(--c27) text-lg mt-[2%]'>Bombom</p>
                            <p className='font-light text-xs dark:text-white text-(--c27)'>R$12,00 cada</p>
                        </div>
                    </div>

                    <div onClick={()=>{selectBase("Nougat", 15, "/images/Nougat1.png")}} className={`${customCart.base?.name === "Nougat" ? 'dark:border-(--c7) border-(--c2) border-3' : 'dark:border-(--c12) border-(--c25) border-2'} cursor-pointer
                     p-5 flex-col flex justify-center rounded-2xl dark:bg-[rgba(53,41,22,0.2)] bg-[rgba(201,166,130,0.2)]
                    hover:scale-102 transition-all duration-300`}>
                        <div className='relative'>
                            <img
                                src="/images/Nougat1.png"
                                alt="Nougat"
                                className='w-full'
                            />
                            <div
                                className={` ${customCart.base?.name === "Nougat" ? 'absolute top-2 right-2 w-4 h-4 rounded-full dark:bg-(--c7) bg-(--c2) border-4 dark:border-(--c12) border-(--c25)' : ''}`}
                                ></div>
                            <p className='font-semibold dark:text-white text-(--c27) text-lg mt-[2%]'>Nougat</p>
                            <p className='font-light text-xs dark:text-white text-(--c27)'>R$15,00 cada</p>
                        </div>
                    </div>

                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-[30rem] mt-[3%] w-full">
                    <button className='w-full h-[2.3rem] dark:text-(--c13) text-(--c11) font-bold cursor-default opacity-[0.5]
                    bg-[rgba(53,41,22,0.2)] border-1 border-(--c12) rounded-md cursor-not-allowed'>Regredir</button>
                    
                    <button className='w-full h-[2.3rem] text-white font-bold cursor-pointer 
                    bg-(--c12) border-1 border-(--c12) rounded-md' onClick={()=>{moveStep(1)}}>Avançar</button>
                  </div>
              </div>
              <div className='w-[50%] ml-[5%]'>
                  <div className="p-8 rounded-xl border dark:border-(--c12) border-(--c25) bg-transparent w-[45rem] flex flex-col">
                    <h1 className={`${customCart.base ? '' : 'animate-pulse'} text-4xl font-bold mb-6 dark:text-white text-(--c27) text-left cursor-default`}>{customCart.base ? "Sua criação açucarada" : "Esperando pelo primeiro passo..."}</h1>
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

                    <h2 className='dark:text-white text-(--c27) font-bold text-xl mt-5 cursor-default'>Tipo de base</h2>
                    <p className={`${customCart.base?.name ? 'text-(--c16)' : 'h-3 bg-(--c10) animate-pulse rounded-md w-48 mb-auto mt-auto'} text-base text-left cursor-default`}>
                      {customCart.base?.name || ''}
                    </p>

                    <div className={`${customCart.package ? 'block' : 'hidden'}`}>
                        <h2 className='dark:text-white text-(--c27) font-bold text-xl mt-5 cursor-default'>Tamanho do pacote</h2>
                        <p className={`${customCart.package?.package_size ? 'text-(--c16)' : 'h-3 bg-(--c10) animate-pulse rounded-md w-48 mb-auto mt-auto'} text-base text-left cursor-default`}>
                        {customCart.package?.package_size ? `${customCart.package.package_size} unidades` : ''}
                        </p>
                    </div>

                    <div className={`${customCart.flavors ? 'block' : 'hidden'}`}>
                        <h2 className='dark:text-white text-(--c27) font-bold text-xl mt-5'>Sabores</h2>
                        <p className="text-base text-(--c16) text-left cursor-default">
                        {customCart.flavors ? customCart.flavors.join(", ") : ''}
                        </p>
                    </div>

                    <div className={`${customCart.color ? 'block' : 'hidden'}`}>
                        <h2 className='dark:text-white text-(--c27) font-bold text-xl mt-5'>Cor principal</h2>
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
                        <h2 className='dark:text-white text-(--c27) font-bold text-xl mt-5'>Detalhes</h2>
                        <p className="text-base text-(--c16) text-left cursor-default">
                        {customCart.details ? customCart.details.join(", ") : ''}
                        </p>
                    </div>

                    <div className={`${customCart.description ? 'block' : 'hidden'}`}>
                        <h2 className='dark:text-white text-(--c27) font-bold text-xl mt-5'>Descrição</h2>
                        <p className="text-base text-(--c16) text-left cursor-default">
                        {customCart.description ? customCart.description : ''}
                        </p>
                    </div>

                    <div className="mt-6 mb-4 h-[2px] w-full dark:bg-(--c12) bg-(--c25) rounded-full cursor-default"></div>

                    <div className="grid grid-cols-2">
                      <p className="text-base dark:text-white text-(--c27) text-left cursor-default w-[15rem] font-bold">
                        Preço base
                      </p>
                      <p className={`${customCart.base?.name ? 'text-(--c16)' : 'h-3 bg-(--c10) animate-pulse rounded-md w-48 mb-auto mt-auto mr-0 ml-auto'} text-base text-[#777777] text-right cursor-default font-bold`}>
                        {`${customCart.base?.price ? `R$${customCart.base.price.toFixed(2)}` : ''}`}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 mt-1">
                      <p className="text-base dark:text-white text-(--c27) text-left cursor-default w-[15rem] font-bold">
                        Taxa de customização
                      </p>
                      <p className={`${customCart.base ? '' : 'h-3 bg-(--c10) animate-pulse rounded-md w-48 mb-auto mt-auto mr-0 ml-auto'} text-base text-[#777777] text-right cursor-default font-bold`}>
                        {`${customCart.base ? `R$${customTax.toFixed(2)}` : ''}`}
                      </p>
                    </div>

                    <div className={`${customCart.package ? 'block' : 'hidden'} grid grid-cols-2 mt-1`}>
                      <p className="text-base dark:text-white text-(--c27) text-left cursor-default w-[15rem] font-bold">
                        Upgrade de pacote
                      </p>
                      <p className="text-base text-[#777777] text-right cursor-default font-bold">
                        {`${customCart.package ? `R$${customCart.package.package_price.toFixed(2)}` : ''}`}
                      </p>
                    </div>

                    <div className="mt-4 mb-4 h-[2px] w-full dark:bg-(--c12) bg-(--c25) rounded-full"></div>

                    <div className="grid grid-cols-2 mt-1">
                      <p className="text-lg text-(--c4) text-left cursor-default w-[15rem] font-bold">
                        Total por pacote
                      </p>
                      <p className={`${customCart.package ? '' : 'h-3 bg-(--c8) animate-pulse rounded-md w-48 mb-auto mt-auto mr-0 ml-auto'} text-base text-(--c8) text-right cursor-default font-bold`}>
                        {`${customCart.base ? `R$${(packPrice).toFixed(2)}` : ''}`}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 mt-1">
                      <p className="text-base dark:text-white text-(--c27) text-left cursor-default w-[15rem] font-bold">
                        Quantidade de pacotes
                      </p>
                      <div className="flex items-center gap-3 justify-end">
                        <button onClick={()=>{decreaseQuantity()}} className="flex items-center justify-center w-7 h-7 
                        rounded-md bg-bg-transparent border-(--c12) border-2 dark:text-white text-(--c27) text-lg font-bold cursor-pointer transition duration-200
                        hover:scale-105">
                          <Minus className="dark:text-(--c17) text-(--c15)" size={17}/>
                        </button>
                        <span className="dark:text-white text-(--c27) font-medium cursor-default">{quantity}</span>
                        <button onClick={()=>{encreaseQuantity()}} className="flex items-center justify-center w-7 h-7
                        rounded-md bg-transparent border-(--c12) border-2 dark:text-white text-(--c27) text-lg font-bold cursor-pointer transition duration-200 
                        hover:scale-105">
                          <Plus className="dark:text-(--c17) text-(--c15)" size={17}/>
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 mt-7">
                      <h2 className='dark:text-white text-(--c27) font-bold text-xl cursor-default'>Total da compra</h2>
                      <p className={`${customCart.base ? '' : 'h-3 bg-(--c8) animate-pulse rounded-md w-48 mb-auto mt-auto mr-0 ml-auto'} text-xl dark:text-(--c7) text-(--c2) text-right cursor-default font-bold`}>
                        {`${customCart.base ? `R$${(packPrice * quantity).toFixed(2)}` : ''}`}
                      </p>
                    </div>

                    <button className='w-full h-[2.3rem] text-white font-bold cursor-pointer mt-7
                      bg-(--c12) border-1 border-(--c12) rounded-md transition duration-200 hover:scale-102 hover:bg-(--c25)'>Adicionar ao carrinho</button>
                  </div>
              </div>
        </section>
    )
}

export default CustomBase;