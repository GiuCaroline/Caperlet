import '../assets/styles/App.css'
import { Tag, Shield, ArrowLeft } from "lucide-react"
import { Handbag } from "phosphor-react"
import CardCart from '../components/CardCart'
import {useCandies} from "../hooks/useCandies";
import { useState, useEffect } from 'react'

function Carrinho(){
    const [cart, setCart] = useState([]);
    const [frete, setFrete] = useState(0);
    const [promoValue, setPromoValue] = useState(0);
    const { fetchCandies, candies, loading, erro, setCandies } = useCandies();
    
    function promotionCode(){
        const promoText = document.getElementById('promoCode').value;
        switch (promoText) {
            case 'CAPER10':
                setPromoValue(0.1);
                document.getElementById('promoCode').value = '';
                break;
            case 'CAPER20':
                setPromoValue(0.2);
                document.getElementById('promoCode').value = '';
                break;
            case 'FRETEGRATIS':
                setFrete(0);
                document.getElementById('promoCode').value = '';
                break;
            default:
                setPromoValue(0);
                document.getElementById('promoCode').value = '';
                break;
        }
    }

    // build custom product helper (usado para exibir o item customizado)
    function buildCustomProduct(raw) {
        if (!raw || !raw.base) return null;
        const package_size = raw.package?.package_size || 8;
        const customTax = raw.base ? ((raw.base.price * 0.25) * package_size) : 0;
        const packPrice = raw.base ? Number((raw.base.price * package_size) + (customTax) + ((raw.package?.package_price) || 0)) : 0;
        
        // monta descrição completa incluindo sabores e detalhes
        const sabores = raw.flavors?.length ? `Sabores: ${raw.flavors.join(', ')}` : '';
        const cores = raw.color?.length ? `Cores: ${raw.color.map(c => c.name).join(', ')}` : '';
        const detalhes = raw.details?.length ? `Detalhes: ${raw.details.join(', ')}` : '';
        const fullDesc = [
            raw.description,
            sabores,
            cores,
            detalhes
        ].filter(Boolean).join('\n');
        
        return {
            id: 'custom',
            name: raw.base?.name || 'Doce customizado',
            descript: fullDesc || 'Doce personalizado',
            price: raw.base?.price || 0,
            image: raw.base?.image || '/images/Macaron1.png',
            package_size,
            package_price: packPrice,
            // campos extra para o card custom
            isCustom: true,
            flavors: raw.flavors || [],
            colors: raw.color || [],
            details: raw.details || []
        }
    }

    const [candyProducts, setCandyProducts] = useState([]);

    // Calcula o subtotal usando os produtos atualizados
    const subtotal = cart.reduce((total, item) => {
        const product = candyProducts.find(candy => candy.id === item.id);
        const unitPrice = item.size === 'unit' ? product?.price : product?.package_price;
        const price = Number(unitPrice) || 0;
        return total + price * item.quantity;
    }, 0)
    
    useEffect(() => {
          const carregaDoces = async () => {
            const data = await fetchCandies();
            if(data && data.length > 0){
              const candies = data.map((candy) => {
                const { id, name, descript, price, image, package_size, package_price } = candy;
                return { id, name, descript, price, image, package_size, package_price };
              });
              setCandies(candies);
            }
          };
          carregaDoces();
        }, []);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        const rawCustom = JSON.parse(localStorage.getItem('customCart') || 'null');
        let merged = [...savedCart];
        if (rawCustom && rawCustom.base) {
            const exists = merged.some(i => i.id === 'custom');
            if (!exists) {
                merged.push({ id: 'custom', size: 'package', quantity: rawCustom.quantity || 1, isCustom: true });
            }
        }
        setCart(merged);
    }, []);

    // helpers para persistir e atualizar state
    // Atualiza os produtos quando candies ou customCart mudam
    useEffect(() => {
        const raw = JSON.parse(localStorage.getItem('customCart') || 'null');
        const customProduct = buildCustomProduct(raw);
        const products = candies ? [...candies] : [];
        if (customProduct) products.push(customProduct);
        setCandyProducts(products);
    }, [candies]);

    function persistCart(newCart) {
        localStorage.setItem("cart", JSON.stringify(newCart));
        
        // Mantém o item customizado se existir
        const customItem = cart.find(item => item.id === 'custom');
        const mergedCart = [...newCart];
        if (customItem && !newCart.some(item => item.id === 'custom')) {
            mergedCart.push(customItem);
        }
        
        setCart(mergedCart);
    }



    function handleIncrease(id, size) {
        if (id === 'custom') {
            // Aumenta quantidade do customCart
            const raw = JSON.parse(localStorage.getItem('customCart') || 'null');
            if (!raw) return;
            raw.quantity = (raw.quantity || 1) + 1;
            localStorage.setItem('customCart', JSON.stringify(raw));
            
            // Atualiza o cart também
            setCart(prev => prev.map(item => 
                item.id === 'custom' ? { ...item, quantity: raw.quantity } : item
            ));
            return;
        }

        const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        const idx = savedCart.findIndex(item => item.id === id && item.size === size);
        if (idx === -1) return;
        savedCart[idx].quantity = (savedCart[idx].quantity || 0) + 1;
        persistCart(savedCart);
    }

    function handleDecrease(id, size) {
        if (id === 'custom') {
            // Diminui quantidade do customCart
            const raw = JSON.parse(localStorage.getItem('customCart') || 'null');
            if (!raw) return;
            raw.quantity = Math.max(1, (raw.quantity || 1) - 1);
            localStorage.setItem('customCart', JSON.stringify(raw));
            
            // Atualiza o cart também
            setCart(prev => prev.map(item => 
                item.id === 'custom' ? { ...item, quantity: raw.quantity } : item
            ));
            return;
        }

        const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        const idx = savedCart.findIndex(item => item.id === id && item.size === size);
        if (idx === -1) return;
        savedCart[idx].quantity = Math.max(1, (savedCart[idx].quantity || 1) - 1);
        persistCart(savedCart);
    }

    function handleRemove(id, size) {
        if (id === 'custom') {
            // Remove customCart do localStorage
            localStorage.removeItem('customCart');
            
            // Remove do cart também
            setCart(prev => prev.filter(item => item.id !== 'custom'));
            
            // Atualiza a lista de produtos
            setCandyProducts(prev => prev.filter(p => p.id !== 'custom'));
            return;
        }

        const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        const newCart = savedCart.filter(item => !(item.id === id && item.size === size));
        persistCart(newCart);
    }

    return(
        <div className='dark:bg-(--c3) bg-(--c24) montserrat-f md:pb-[20%]'>
            <main className="flex-1 flex p-15 px-25 flex-col">
                <div  onClick={()=>{window.history.back()}} className='text-(--c20) flex items-center gap-2 cursor-pointer w-[14%] transition duration-300 transform-cpu hover:text-(--c16)'>
                    <ArrowLeft />
                    <p>Continuar comprando</p>
                </div>
                <div className='mb-[3%] mt-[1%] flex '>
                    <Handbag size={55} className="bg-(--c21) rounded-full p-2" color='#eb54ff' />
                    <div className='flex flex-col ml-[2%]'> 
                        <h2 className='dark:text-white text-(--c27) font-bold text-2xl'>Carrinho de compras</h2>
                        <p className='dark:text-white text-(--c27) font-light'>{cart.length} itens no seu carrinho</p>
                    </div>
                </div>
                <section className="dark:bg-(--c3) bg-(--c24) flex w-[100%]">
                    <div className='w-[92%] gap-10 flex flex-col'>
                        {cart.length > 0 ? (
                            cart.map((cartInfo, index) => (
                                <CardCart key={index} id={cartInfo.id} cartinfo={cartInfo} candy={candyProducts} onIncrease={handleIncrease} onDecrease={handleDecrease} onRemove={handleRemove} />
                            ))
                        ) : (
                            <p className='dark:text-white text-(--c27)'>Seu carrinho está vazio.</p>
                        )}
                    </div>
                    <div className='w-[50%] ml-[5%]'>
                        <div className="p-8 rounded-xl border dark:border-(--c10) border-(--c25) bg-transparent w-[100%]">
                            <h1 className="text-3xl font-bold mb-3 dark:text-white text-(--c27) text-left cursor-default">Resumo do pedido</h1>
                            
                            <div className='flex'>
                                <div className="relative w-full">
                                    <Tag size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#969696]" />
                                    <input placeholder='código promocional' type='text' name='promoCode' id='promoCode' className='placeholder:text-[#969696] w-[95%] dark:text-white text-(--c27) border-1 dark:border-(--c10) border-(--c25) rounded-lg px-9 py-[0.7px]'></input>
                                </div>

                                <button onClick={()=>{promotionCode()}} className='border-1 border-(--c8) cursor-pointer rounded-lg text-(--c8) text-sm px-4'>Aplicar</button>
                            </div>
                            
                            <div className="w-full mt-[5%] flex-1 h-[2px] dark:bg-(--c10) bg-(--c25) rounded-full"></div>

                            <div className="grid grid-cols-2 mt-[2%]">
                                <p className="text-base dark:text-white text-(--c27) text-left cursor-default">
                                Subtotal
                                </p>
                                <p className="text-base text-[#969696] text-right cursor-default">
                                {`R$${subtotal.toFixed(2)}`}
                                </p>
                            </div>

                            <div className={`grid grid-cols-2 mt-1 ${promoValue > 0 ? '' : 'hidden'}`}>
                                <p className="text-base dark:text-white text-(--c27) text-left cursor-default">
                                {`Código ativo`}
                                </p>
                                <p className="text-base text-[#969696] text-right cursor-default">
                                -<span>{`R$${(subtotal * promoValue).toFixed(2)}`}</span>
                                </p>
                            </div>

                            <div className="grid grid-cols-2 mt-1">
                                <p className="text-base dark:text-white text-(--c27) text-left cursor-default">
                                Frete
                                </p>
                                <p className={`text-base text-right cursor-default ${frete === 0 ? 'font-bold text-(--c8)' : 'text-[#969696]'}`}>
                                {frete === 0 ? 'Grátis' : `R$${frete.toFixed(2)}`}
                                </p>
                            </div>
                            
                            <div className="w-full mt-[2%] flex-1 h-[2px] dark:bg-(--c10) bg-(--c25) rounded-full"></div>

                            <div className='grid grid-cols-2 mt-[2%]'>
                                <p className="text-xl dark:text-white text-(--c27) text-left cursor-default font-bold">
                                Total
                                </p>
                                <p className="text-xl text-(--c8) text-right cursor-default font-bold">
                                {`R$${((Number(subtotal) - (Number(subtotal) * promoValue)) + frete).toFixed(2)}`}
                                </p>
                            </div>

                            <div className='flex items-center flex-col'>
                                <button className='cursor-pointer bg-(--c8) text-white text-xl rounded-lg w-full py-2 font-semibold mt-[2%]'  onClick={()=>{window.location="/pagamento"}}>Continuar pedido</button>
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

export default Carrinho