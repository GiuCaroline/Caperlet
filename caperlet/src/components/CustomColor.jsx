import '../assets/styles/App.css'
import { Plus, Minus, FileImage } from "lucide-react"
import { Sparkle } from "phosphor-react"
import { useState } from 'react'

function CustomColor({moveStep}) {
    const [quantity, setQuantity] = useState(1)
    const [customCart, setCustomCart] = useState(localStorage.getItem('customCart') ? 
    JSON.parse(localStorage.getItem('customCart')) : {
        quantity: quantity,
        package: { packageSize: 8, packagePrice: 0 },
        description: ''});

    let customTax = customCart.base ? ((customCart.base.price * 0.25) * customCart.package.packageSize) : 0
    let packPrice = customCart.base ?
                    Number((customCart.base.price * customCart.package.packageSize) + (customTax) + ((customCart.package.packagePrice))) : 0;
     
    
    const colorOptions = [
      { name: 'Roxo', color: '#8B00FF' },
      { name: 'Verde', color: '#4EEDB2' },
      { name: 'Amarelo', color: '#FFEB3B' },
      { name: 'Rosa', color: '#E91E63' },
    ];
    function selectColor(colorName){
      // salva tanto o nome quanto o código da cor no customCart.color
      const option = colorOptions.find(c => c.name.toLowerCase() === colorName.toLowerCase());
      const code = option?.color || null;
      // normaliza formatos antigos (strings) para objetos {name, code}
      const raw = customCart.color || [];
      let selectedColor = raw.map(item => {
        if (typeof item === 'string') {
          const opt = colorOptions.find(c => c.name.toLowerCase() === item.toLowerCase());
          return { name: opt?.name || item, code: opt?.color || null };
        }
        return item;
      });

      // checa existência por nome (case-insensitive)
      const exists = selectedColor.some(c => (c.name || '').toLowerCase() === colorName.toLowerCase());
      if (exists) {
        selectedColor = selectedColor.filter(c => (c.name || '').toLowerCase() !== colorName.toLowerCase());
      } else {
        if (selectedColor.length < 2) {
          // armazena o nome padronizado (opção encontrada) e o código
          selectedColor = [...selectedColor, { name: option?.name || colorName, code }];
        }
      }

      const updatedCart = { ...customCart, color: selectedColor };
      setCustomCart(updatedCart);
      localStorage.setItem("customCart", JSON.stringify(updatedCart));
    }

        function selectDetail(detailName){
        let selectedDetails = customCart.details || [];
        if(selectedDetails.includes(detailName)){
            selectedDetails = selectedDetails.filter(detail => detail !== detailName);
        } else {
            if(selectedDetails.length < 2){
                selectedDetails.push(detailName);
            }
        }
        const updatedCart = { ...customCart, details: selectedDetails };
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
              <div className='w-full flex flex-col items-center justify-center'>
                <div className="p-8 rounded-xl border border-(--c12) bg-transparent w-[45rem]">
                  <h1 className="text-4xl font-bold mb-6 text-white text-left cursor-default">Escolha até 2 cores</h1>

                  <div className="grid grid-cols-2 gap-6">
                    <div onClick={()=>{selectColor("Roxo")}} className={`${(customCart.color || []).some(c => c.name === 'Roxo') ? 'border-(--c7) border-3' : 'border-(--c12) border-2'} p-5 rounded-2xl bg-[rgba(53,41,22,0.2)]
                    hover:scale-105 transition-all duration-300`}>
                      <div
                        className={`${(!(customCart.color || []).some(c => c.name === 'Roxo') && (customCart.color || []).length >= 2) ? 'bg-(--c6) cursor-not-allowed' : 'bg-[#8B00FF]'} relative h-[120px] cursor-pointer rounded-2xl border-4 border-transparent`}
                      >
                        <div
                          className={`${(customCart.color || []).some(c => c.name === 'Roxo') ? 'absolute top-2 right-2 w-4 h-4 rounded-full bg-(--c7) border-4 border-(--c12)' : ''}`}
                        ></div>
                      </div>
                    </div>

                    <div onClick={()=>{selectColor("Verde")}} className={`${(customCart.color || []).some(c => c.name === 'Verde') ? 'border-(--c7) border-3' : 'border-(--c12) border-2'} p-5 rounded-2xl bg-[rgba(53,41,22,0.2)]
                    hover:scale-105 transition-all duration-300`}>
                      <div
                        className={`${(!(customCart.color || []).some(c => c.name === 'Verde') && (customCart.color || []).length >= 2) ? 'bg-(--c6) cursor-not-allowed' : 'bg-[#4EEDB2]'} transition duration-300 relative h-[120px] cursor-pointer
                        rounded-2xl`}
                      >
                        <div
                          className={`${(customCart.color || []).some(c => c.name === 'Verde') ? 'absolute top-2 right-2 w-4 h-4 rounded-full bg-(--c7) border-4 border-(--c12)' : ''}`}
                        ></div>
                      </div>
                    </div>

                    <div onClick={()=>{selectColor("Amarelo")}} className={`${(customCart.color || []).some(c => c.name === 'Amarelo') ? 'border-(--c7) border-3' : 'border-(--c12) border-2'} p-5 rounded-2xl bg-[rgba(53,41,22,0.2)]
                    hover:scale-105 transition-all duration-300`}>
                      <div
                        className={`${(!(customCart.color || []).some(c => c.name === 'Amarelo') && (customCart.color || []).length >= 2) ? 'bg-(--c6) cursor-not-allowed' : 'bg-[#FFEB3B]'} transition duration-300 relative h-[120px] cursor-pointer
                        rounded-2xl`}
                      >
                        <div
                          className={`${(customCart.color || []).some(c => c.name === 'Amarelo') ? 'absolute top-2 right-2 w-4 h-4 rounded-full bg-(--c7) border-4 border-(--c12)' : ''}`}
                        ></div>
                      </div>
                    </div>

                    <div onClick={()=>{selectColor("Rosa")}} className={`${(customCart.color || []).some(c => c.name === 'Rosa') ? 'border-(--c7) border-3' : 'border-(--c12) border-2'} p-5 rounded-2xl bg-[rgba(53,41,22,0.2)]
                    hover:scale-105 transition-all duration-300`}>
                      <div
                        className={`${(!(customCart.color || []).some(c => c.name === 'Rosa') && (customCart.color || []).length >= 2) ? 'bg-(--c6) cursor-not-allowed' : 'bg-[#E91E63]'} transition duration-300 relative h-[120px] cursor-pointer
                        rounded-2xl`}
                      >
                        <div
                          className={`${(customCart.color || []).some(c => c.name === 'Rosa') ? 'absolute top-2 right-2 w-4 h-4 rounded-full bg-(--c7) border-4 border-(--c12)' : ''}`}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <p className="mt-6 text-sm text-white text-left cursor-default">
                    {customCart.color?.length || 0} de 2 cores selecionadas
                  </p>
                </div>
                <div className='p-8 rounded-xl border border-(--c12) bg-transparent w-[45rem] mt-5'>
                  <h1 className="text-4xl font-bold mb-6 text-white text-left cursor-default">Selecione até 2 detalhes</h1>

                  <div className='flex flex-wrap gap-[1.5rem] justify-center'>
                    <button onClick={()=>{selectDetail("Folha de ouro")}} className={`${customCart.details?.includes("Folha de ouro") ? 'bg-(--c12)' : 'bg-[rgba(0,0,0,0.5)]'} ${!customCart.details?.includes("Folha de ouro") && customCart.details?.length >= 2 ? 'opacity-50 cursor-not-allowed' : ''} cursor-pointer text-white w-[18rem]
                     rounded-md border-1 border-(--c12) pl-[1rem] text-left font-medium transition duration-300`}>Folha de ouro</button>

                        <button onClick={()=>{selectDetail("Frutas desidratadas")}} className={`${customCart.details?.includes("Frutas desidratadas") ? 'bg-(--c12)' : 'bg-[rgba(0,0,0,0.5)]'} ${!customCart.details?.includes("Frutas desidratadas") && customCart.details?.length >= 2 ? 'opacity-50 cursor-not-allowed' : ''} cursor-pointer text-white w-[18rem]
                     rounded-md border-1 border-(--c12) pl-[1rem] text-left font-medium transition duration-300`}>Frutas desidratadas</button>

                        <button onClick={()=>{selectDetail("Pétalas de rosas")}} className={`${customCart.details?.includes("Pétalas de rosas") ? 'bg-(--c12)' : 'bg-[rgba(0,0,0,0.5)]'} ${!customCart.details?.includes("Pétalas de rosas") && customCart.details?.length >= 2 ? 'opacity-50 cursor-not-allowed' : ''} cursor-pointer text-white w-[18rem]
                     rounded-md border-1 border-(--c12) pl-[1rem] text-left font-medium transition duration-300`}>Pétalas de rosas (comestíveis)</button>

                        <button onClick={()=>{selectDetail("Pó de cacau")}} className={`${customCart.details?.includes("Pó de cacau") ? 'bg-(--c12)' : 'bg-[rgba(0,0,0,0.5)]'} ${!customCart.details?.includes("Pó de cacau") && customCart.details?.length >= 2 ? 'opacity-50 cursor-not-allowed' : ''} cursor-pointer text-white w-[18rem]
                     rounded-md border-1 border-(--c12) pl-[1rem] text-left font-medium transition duration-300`}>Pó de cacau</button>

                        <button onClick={()=>{selectDetail("Flores cristalizadas")}} className={`${customCart.details?.includes("Flores cristalizadas") ? 'bg-(--c12)' : 'bg-[rgba(0,0,0,0.5)]'} ${!customCart.details?.includes("Flores cristalizadas") && customCart.details?.length >= 2 ? 'opacity-50 cursor-not-allowed' : ''} cursor-pointer text-white w-[18rem]
                     rounded-md border-1 border-(--c12) pl-[1rem] text-left font-medium transition duration-300`}>Flores cristalizadas</button>

                        <button onClick={()=>{selectDetail("Raspas de chocolate belga")}} className={`${customCart.details?.includes("Raspas de chocolate belga") ? 'bg-(--c12)' : 'bg-[rgba(0,0,0,0.5)]'} ${!customCart.details?.includes("Raspas de chocolate belga") && customCart.details?.length >= 2 ? 'opacity-50 cursor-not-allowed' : ''} cursor-pointer text-white w-[18rem]
                     rounded-md border-1 border-(--c12) pl-[1rem] text-left font-medium transition duration-300`}>Raspas de chocolate belga</button>

                        <button onClick={()=>{selectDetail("Flor de sal")}} className={`${customCart.details?.includes("Flor de sal") ? 'bg-(--c12)' : 'bg-[rgba(0,0,0,0.5)]'} ${!customCart.details?.includes("Flor de sal") && customCart.details?.length >= 2 ? 'opacity-50 cursor-not-allowed' : ''} cursor-pointer text-white w-[18rem]
                     rounded-md border-1 border-(--c12) pl-[1rem] text-left font-medium transition duration-300`}>Flor de sal</button>

                        <button onClick={()=>{selectDetail("Folhas de hortelã glaceadas")}} className={`${customCart.details?.includes("Folhas de hortelã glaceadas") ? 'bg-(--c12)' : 'bg-[rgba(0,0,0,0.5)]'} ${!customCart.details?.includes("Folhas de hortelã glaceadas") && customCart.details?.length >= 2 ? 'opacity-50 cursor-not-allowed' : ''} cursor-pointer text-white w-[18rem]
                     rounded-md border-1 border-(--c12) pl-[1rem] text-left font-medium transition duration-300`}>Folhas de hortelã glaceadas</button>

                        <button onClick={()=>{selectDetail("Lâminas de coco desidratado")}} className={`${customCart.details?.includes("Lâminas de coco desidratado") ? 'bg-(--c12)' : 'bg-[rgba(0,0,0,0.5)]'} ${!customCart.details?.includes("Lâminas de coco desidratado") && customCart.details?.length >= 2 ? 'opacity-50 cursor-not-allowed' : ''} cursor-pointer text-white w-[18rem]
                     rounded-md border-1 border-(--c12) pl-[1rem] text-left font-medium transition duration-300`}>Lâminas de coco desidratado</button>

                        <button onClick={()=>{selectDetail("Pó perolado artesanal")}} className={`${customCart.details?.includes("Pó perolado artesanal") ? 'bg-(--c12)' : 'bg-[rgba(0,0,0,0.5)]'} ${!customCart.details?.includes("Pó perolado artesanal") && customCart.details?.length >= 2 ? 'opacity-50 cursor-not-allowed' : ''} cursor-pointer text-white w-[18rem]
                     rounded-md border-1 border-(--c12) pl-[1rem] text-left font-medium transition duration-300`}>Pó perolado artesanal</button>

                    <div className="grid grid-cols-2 gap-[18rem]">
                        <p className="mt-6 text-sm text-white text-left cursor-default">
                          {customCart.details?.length || 0} de 2 detalhes selecionadas
                        </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-[31rem] mt-5 w-[45rem]">
                  <button className='w-[7rem] h-[2.3rem] text-(--c13) font-bold cursor-pointer 
                  bg-[rgba(53,41,22,0.2)] border-1 border-(--c12) rounded-md' onClick={()=>{moveStep(1)}}>Regredir</button>
                  
                  <button className='w-[7rem] h-[2.3rem] text-white font-bold cursor-pointer 
                  bg-(--c12) border-1 border-(--c12) rounded-md'  onClick={()=>{moveStep(3)}}>Avançar</button>
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

export default CustomColor;