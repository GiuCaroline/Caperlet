import '../assets/styles/App.css'
import { Sparkle } from "phosphor-react"
import { Plus, Minus } from "lucide-react"
import { useState, useEffect } from 'react';

function CardDoces({candy, loading, erro}) {
    const { name, desc, price, image } = candy;
    const [quantity, setQuantity] = useState(1);
    const [actualPrice, setActualPrice] = useState(price);

    useEffect(() => {
        setActualPrice(price * quantity);
    }, [quantity, price]);

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
                    className="mt-3"
                  />

                  <div className="p-5">
                    <h2 className="text-xl font-bold text-white mb-1 cursor-default">
                      {loading && "Carregando..."}
                      {erro && `Erro: ${erro}`}
                      {!loading && !erro && name}
                    </h2>

                    <p className="text-sm text-(--c11) mb-3 leading-snug font-light cursor-default">
                    {loading && "Carregando..."}
                      {erro && `Erro: ${erro}`}
                      {!loading && !erro && desc}
                    </p>

                    <div className="flex gap-2 mb-4">
                      <span className="cursor-pointer flex items-center gap-1 px-5 bg-(--c4) py-1 text-white rounded-lg text-xs font-semibold">
                        <Sparkle size={14} />
                        Unidade
                      </span>
                      <span className="cursor-pointer flex items-center gap-1 px-4 py-1 bg-[rgba(152,92,240,0.1)] text-(--c8)
                       rounded-lg text-xs font-semibold">
                        <Sparkle size={14} />
                        Pacote (12)
                      </span>
                    </div>

                    <div className="text-white font-bold text-2xl cursor-default">
                      {formatPrice(actualPrice)}
                      <span className="text-xs text-white font-normal cursor-default"> por unidade</span>
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
                  </div>
                </div>
    )
}

export default CardDoces;