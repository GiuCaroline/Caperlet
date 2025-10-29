import '../assets/styles/App.css'
import CardDoces from '../components/CardDoces.jsx'
import {useCandies} from "../hooks/useCandies";
import { Search } from "lucide-react"
import { Sparkle } from "phosphor-react"
import { useEffect, useState } from 'react';

function LojaPadrao() {
    const { fetchCandies, candies, loading, erro, setCandies } = useCandies();
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
      const carregaDoces = async () => {
        const data = await fetchCandies();
        if(data && data.length > 0){
          const candies = data.map((candy) => {
            const { id, name, desc, price, image, packageSize, packagePrice } = candy;
            return { id, name, desc, price, image, packageSize, packagePrice };
          }).filter(candy => candy.name.toLowerCase().includes(searchText.toLowerCase()) || candy.desc.toLowerCase().includes(searchText.toLowerCase()));
          setCandies(candies);
        }
      };
      carregaDoces();
    }, [searchText]);

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
      <div className={`${candies.length > 0 && 'min-h-screen'} flex flex-col montserrat-f`}>     
        <main className="flex-1 flex flex-col min-h-[100%]">
            <section className="flex flex-col items-center bg-linear-to-br from-(--c1)  dark:from-(--c27) from-50% to-(--c2) dark:to-(--c30) p-30 pb-15 w-full">
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
                <h2 className="text-7xl text-(--c27) dark:text-white cursor-default font-extrabold mt-[5%]">PADRÃO</h2>
                <h2 className="text-7xl text-(--c4) cursor-default font-extrabold">GOURMET</h2>
                <p className="text-(--c27) dark:text-white cursor-default max-w-2xl text-2xl mt-[3%] font-light text-center">
                Descubra as coleções da casa, onde a loja se torna uma galeria e cada peça é uma arte comestível.
                </p>
                <div className="relative w-1/3 flex justify-center mt-10 mb-0">
                  <Search size={23}className="absolute left-3 top-1/2 -translate-y-1/2 text-(--c25)" />
                  <input id="searchInput" name='searchInput' onChange={(e)=>{setSearchText(e.target.value)}} type='text' placeholder='Busque seu doce pelo nome ou descrição' className='w-full border-2 border-(--c25) focus:border-(--c28) outline-none text-white rounded-lg pl-10 pr-2 py-2'></input>
                </div>
            </section>
            <section className="dark:bg-(--c3) bg-(--c24) py-12 flex flex-col items-center w-full">
              <div className="flex flex-row gap-x-30 gap-y-12 flex-wrap justify-center px-12">
                {candies && candies.length > 0 ? (
                  candies.map((candy) => (
                    <CardDoces key={candy.id} candy={candy} cartAdd={cartAdd} />
                  ))
                ) : (
                  <p className="dark:text-white text-(--c27)">Nenhum doce encontrado.</p>
                )}
              </div>
              
            </section>
        </main>
      </div>
    )
}

export default LojaPadrao