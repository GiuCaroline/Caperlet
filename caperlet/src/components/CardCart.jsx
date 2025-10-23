import '../assets/styles/App.css'
import { Plus, Minus } from "lucide-react"
import { Trash2 } from "lucide-react"

function CardCart({cartinfo, candy, onIncrease, onDecrease, onRemove}) {
    const product = candy ? candy.find(item => item.id === cartinfo.id) : undefined;
    const sizeText = cartinfo.size === 'unit' ? 'Unidade' : `Pacote (${product?.packageSize || '-'})`;
    const unitPrice = cartinfo.size === 'unit' ? product?.price : product?.packagePrice;
    const cartPrice = Number(unitPrice) || 0;
    return(
                                <div className="p-8 rounded-xl border border-(--c10) bg-transparent w-[100%]">
                            <div className="flex flex-row gap-6">
                                <div className="w-[15%] h-[15%] aspect-square rounded-lg overflow-hidden">
                                    <img
                                        src={product?.image}
                                        alt={product?.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className='flex flex-col w-full'>
                                    <div className='flex justify-between gap-90'>
                                        <p className='text-white font-bold text-2xl cursor-default'>{product?.name}</p>
                                        <Trash2 className='text-white cursor-pointer hover:text-red-500 transition duration-300' size={17} onClick={() => onRemove && onRemove(cartinfo.id, cartinfo.size)}/>
                                    </div>
                                    <p className='text-(--c11) text-sm cursor-default'>{product?.desc}</p>

                                    <div className='items-center flex'>
                                        <p className='cursor-default mt-[1%] text-[0.7rem] border-2 border-(--c8) p-[1px] text-(--c8) rounded-md'>
                                            &nbsp; {sizeText} &nbsp;
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-3 mt-1">
                                        <button onClick={() => onDecrease && onDecrease(cartinfo.id, cartinfo.size)} className="flex items-center justify-center w-7 h-7 
                                        rounded-md bg-(--c9) border-white hover:border-(--c8) border-2 transition duration-200 text-white text-lg font-bold cursor-pointer">
                                            <Minus className="text-white" size={17}/>
                                        </button>
                                        <span className="text-white font-medium cursor-default">{cartinfo.quantity}</span>
                                        <button onClick={() => onIncrease && onIncrease(cartinfo.id, cartinfo.size)} className="flex items-center justify-center w-7 h-7
                                        rounded-md bg-(--c9) border-white hover:border-(--c8) border-2 transition duration-200 text-white text-lg font-bold cursor-pointer">
                                            <Plus className="text-white" size={17}/>
                                        </button>
                                        
                                        <div className='ml-[70%]'>
                                            <p className='text-(--c20) font-light text-xs text-right cursor-default'>
                                                {`R$${cartPrice.toFixed(2)}/ ${sizeText}`}
                                            </p>
                                            <p className='text-(--c4) font-bold text-2xl mt-[-5px] cursor-default text-end'>{`R$${(cartPrice * cartinfo.quantity).toFixed(2)}`}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
    )
}

export default CardCart;