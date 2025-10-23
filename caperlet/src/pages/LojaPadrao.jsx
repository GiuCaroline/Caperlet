import '../assets/styles/App.css'
import CardDoces from '../components/CardDoces.jsx'
import {useCandies} from "../hooks/useCandies";
import { Plus, Minus } from "lucide-react"
import { Sparkle } from "phosphor-react"
import { useEffect } from 'react';

function LojaPadrao() {
    const { fetchCandies, candies, loading, erro, setCandies } = useCandies();

    useEffect(() => {
      const carregaDoces = async () => {
        const data = await fetchCandies().then(()=>{console.log(candies)});
        if(data && data.length > 0){
          const candies = data.map((candy) => {
            const { id, name, desc, price, image, packageSize, packagePrice } = candy;
            return { id, name, desc, price, image, packageSize, packagePrice };
          });
          setCandies(candies);
        }
      };
      carregaDoces();
    }, []);

    function cartAdd(id, quantity, selectedSize){
      const savedCart = localStorage.getItem("cart");
      const cart = savedCart ? JSON.parse(savedCart) : [];
      const existingItemIndex = cart.findIndex(item => item.id === id && item.size === selectedSize);
      if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity = quantity;
      } else {
        cart.push({ id, quantity, size: selectedSize });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    return(
      <div className="min-h-screen flex flex-col montserrat-f">     
        <main className="flex-1 flex flex-col">
            <section className="flex flex-col items-center bg-linear-to-br from-(--c1) from-50% to-(--c2) p-30 w-full">
                <div className="flex flex-row gap-x-[2rem]">
                    <span className="flex items-center justify-center text-base px-6 py-1.5 bg-(--c4) 
                    text-(--c1) rounded-3xl cursor-pointer gap-x-[0.5rem] font-medium">
                    <Sparkle size={25} weight="fill"/>
                    Padrão gourmet
                    </span>
                    <span onClick={()=>{window.location="/customizado"}} className="flex items-center justify-center text-base px-6 py-1.5 bg-[rgba(152,92,240,0.1)]
                    text-(--c8) rounded-3xl cursor-pointer gap-x-[0.5rem] font-medium">
                    <Sparkle size={25} weight="fill"/>
                    Customizados
                    </span>
                </div>
                <h2 className="text-7xl text-white cursor-default font-extrabold mt-[5%]">PADRÃO</h2>
                <h2 className="text-7xl text-(--c4) cursor-default font-extrabold">GOURMET</h2>
                <p className="text-white cursor-default max-w-2xl text-2xl mt-[3%] font-light text-center">
                Descubra as coleções da casa, onde a loja se torna uma galeria e cada peça é uma arte comestível.
                </p>
            </section>
            <section className="bg-(--c3) py-12 flex flex-col items-center w-[100%]">
              <div className="flex flex-row gap-x-30 gap-y-12 flex-wrap justify-between px-12">
                {candies && candies.length > 0 ? (
                  candies.map((candy) => (
                    <CardDoces key={candy.id} candy={candy} cartAdd={cartAdd} />
                  ))
                ) : (
                  <p className="text-white">Nenhum doce encontrado.</p>
                )}
              </div>
              
            </section>
        </main>
      </div>
    )
}

export default LojaPadrao