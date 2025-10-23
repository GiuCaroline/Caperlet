import '../assets/styles/App.css'
import { Sparkle } from "phosphor-react"
import { Plus, Minus, ShoppingBag } from "lucide-react"
import { useState, useEffect } from 'react'

function CardDoces({candy, loading, erro, cartAdd}) {
  const { id, name, desc, price, image, packageSize, packagePrice } = candy;
  const [quantity, setQuantity] = useState(1);
  const [actualPrice, setActualPrice] = useState(price);
  const [selectedSize, setSelectedSize] = useState("unit")
  
    useEffect(() => {
        setActualPrice((selectedSize === "unit" ? price : packagePrice) * quantity);
    }, [quantity, price, packagePrice, selectedSize]);

    function increaseQuantity() {
        setQuantity((q) => q + 1);
    }

    function decreaseQuantity() {
        setQuantity((q) => (q > 1 ? q - 1 : 1));
    }

    function formatPrice(value) {
        return `R$${value.toFixed(2).replace(".", ",")}`;
    }

    return(
        <div className="bg-(--c9) rounded-xl shadow-lg overflow-hidden w-[21rem] border-(--c10) border-1
                transition hover:scale-[1.02] hover:shadow-[#C09AF8]/20 hover:border-(--c8) duration-300">
                  <img
                    src={image}
                    alt={name}
                    className="mt-3 object-cover w-full h-48 "
                  />

                  <div className="p-5">
                    <h2 className="text-xl font-bold text-white mb-1 cursor-default">
                      {loading && "Carregando..."}
                      {erro && `Erro: ${erro}`}
                      {!loading && !erro && name}
                    </h2>

                    <p className="text-sm text-(--c11) mb-3 leading-snug font-light cursor-default overflow-hidden text-ellipsis h-10">
                    {loading && "Carregando..."}
                      {erro && `Erro: ${erro}`}
                      {!loading && !erro && desc}
                    </p>

                    <div className="flex gap-2 mb-4">
                      <input type="radio" id={`btnSize-${id}-1`} name={`btnSize-${id}`} value={1} checked={selectedSize === "unit"} onChange={() => setSelectedSize("unit")} className='hidden' />
                      <label htmlFor={`btnSize-${id}-1`} className="cursor-pointer transition duration-[300ms] flex items-center gap-1 px-5 bg-[rgba(152,92,240,0.1)] text-(--c8) py-1 rounded-lg text-xs font-semibold hover:scale-[1.1]">
                        <Sparkle size={14} />
                        Unidade
                      </label>
                      <input type="radio" id={`btnSize-${id}-2`} name={`btnSize-${id}`} value={packageSize} checked={selectedSize === "package"} onChange={() => setSelectedSize("package")} className='hidden' />
                      <label htmlFor={`btnSize-${id}-2`} className="cursor-pointer transition duration-[300ms] flex items-center gap-1 px-4 py-1 bg-[rgba(152,92,240,0.1)] text-(--c8) 
                       rounded-lg text-xs font-semibold hover:scale-[1.1]">
                        <Sparkle size={14} />
                        Pacote ({packageSize})
                      </label>
                    </div>

                    <div className="text-white font-bold text-2xl cursor-default">
                      {formatPrice(actualPrice)}
                      <span className="text-xs text-white font-normal cursor-default"> por {selectedSize === "unit" ? "unidade" : "pacote"}</span>
                    </div>

                    <div className="flex items-center gap-3 mt-3">
                      <button onClick={()=>{decreaseQuantity()}} className="flex items-center justify-center w-7 h-7 
                      rounded-md bg-transparent border-white border-2 text-white  text-lg font-bold cursor-pointer
                      transition hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(255,255,255,0.09)] duration-300">
                        <Minus/>
                      </button>
                      <span className="text-white font-medium cursor-default">{quantity}</span>
                      <button onClick={()=>{increaseQuantity()}} className="flex items-center justify-center w-7 h-7
                      rounded-md bg-transparent border-white border-2 text-white text-lg font-bold cursor-pointer
                      transition hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(255,255,255,0.09)] duration-300">
                        <Plus/>
                      </button>
                    </div>
                    <button onClick={()=>{cartAdd(id, quantity, selectedSize)}} className='cursor-pointer w-full transition duration-[300ms] justify-center flex items-center gap-1 px-4 py-1 bg-(--c4) text-white
                       rounded-lg text-xs font-semibold hover:scale-[1.05] mt-4'>
                      <ShoppingBag/>
                      Adicionar ao carrinho
                    </button>
                  </div>
                </div> 
    )
}

export default CardDoces;