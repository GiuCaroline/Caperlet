import '../assets/styles/App.css'
import { Plus, Minus } from "lucide-react"
import { Trash2 } from "lucide-react"

function CardCart({cartinfo, candy, onIncrease, onDecrease, onRemove}) {
    const product = candy ? candy.find(item => item.id === cartinfo.id) : undefined;
    const sizeText = cartinfo.size === 'unit' ? 'Unidade' : `Pacote (${product?.package_size || '-'})`;
    const unitPrice = cartinfo.size === 'unit' ? product?.price : product?.package_price;
    const cartPrice = Number(unitPrice) || 0;
    return(
                                <div className="p-8 rounded-xl border dark:border-(--c10) border-(--c25) bg-transparent w-[100%]">
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
                                        <p className='dark:text-white text-(--c27) font-bold text-2xl cursor-default'>{product?.isCustom ? `${product?.name + " (Customizado)"}` : product?.name}</p>
                                        <Trash2 className='dark:text-white text-(--c27) cursor-pointer hover:text-red-500 transition duration-300' size={17} onClick={() => onRemove && onRemove(cartinfo.id, cartinfo.size)}/>
                                    </div>
                                    
                                    {/* Detalhes do doce customizado */}
                                    {product?.isCustom ? (
                                        <div className='flex flex-col gap-1'>
                                            {product.flavors?.length > 0 && (
                                                <p className='text-(--c11) text-sm cursor-default'>
                                                    <span className="font-semibold">Sabores:</span> {product.flavors.join(', ')}
                                                </p>
                                            )}
                                            {product.colors?.length > 0 && (
                                                <p className='text-(--c11) text-sm cursor-default'>
                                                    <span className="font-semibold">Cores:</span> {product.colors.map(c => c.name).join(', ')}
                                                </p>
                                            )}
                                            {product.details?.length > 0 && (
                                                <p className='text-(--c11) text-sm cursor-default'>
                                                    <span className="font-semibold">Detalhes:</span> {product.details.join(', ')}
                                                </p>
                                            )}
                                            {product.descript && (
                                                <p className='text-(--c11) text-sm cursor-default mt-1'>{product.descript}</p>
                                            )}
                                        </div>
                                    ) : (
                                        <p className='text-(--c11) text-sm cursor-default'>{product?.descript}</p>
                                    )}

                                    <div className='items-center flex'>
                                        <p className='cursor-default mt-[1%] text-[0.7rem] border-2 border-(--c8) p-[1px] text-(--c8) rounded-md'>
                                            &nbsp; {sizeText} &nbsp;
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-3 mt-1">
                                        <button onClick={() => onDecrease && onDecrease(cartinfo.id, cartinfo.size)} className="flex items-center justify-center w-7 h-7 
                                        rounded-md bg-transparent dark:border-white border-(--c27) hover:border-(--c8) border-1 transition duration-200 dark:text-white text-(--c27)
                                         text-lg font-bold cursor-pointer">
                                            <Minus className="dark:text-white text-(--c27)" size={17}/>
                                        </button>
                                        <span className="dark:text-white text-(--c27) font-medium cursor-default">{cartinfo.quantity}</span>
                                        <button onClick={() => onIncrease && onIncrease(cartinfo.id, cartinfo.size)} className="flex items-center justify-center w-7 h-7
                                        rounded-md bg-transparent dark:border-white border-(--c27) hover:border-(--c8) border-1 transition duration-200 dark:text-white text-(--c27) text-lg font-bold cursor-pointer">
                                            <Plus className="dark:text-white text-(--c27)" size={17}/>
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