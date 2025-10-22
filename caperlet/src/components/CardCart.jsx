import '../assets/styles/App.css'
import { Plus, Minus } from "lucide-react"
import { Trash2 } from "lucide-react"

function CardCart({cartinfo, candy}) {
    let sizeText = cartinfo.size === 'unit' ? 'Unidade' : `Pacote (${candy.find(item => item.id === cartinfo.id)?.packageSize})`;
    let cartPrice = cartinfo.packageSize === 'unit' ?
        candy.find(item => item.id === cartinfo.id)?.price :
        candy.find(item => item.id === cartinfo.id)?.packagePrice;
    return(
                                <div className="p-8 rounded-xl border border-(--c10) bg-transparent w-[100%]">
                            <div className="flex flex-row gap-6">
                                <div className="w-[15%] aspect-square rounded-lg overflow-hidden">
                                    <img
                                        src={candy.find(item => item.id === cartinfo.id)?.image}
                                        alt={candy.find(item => item.id === cartinfo.id)?.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex justify-between gap-90'>
                                        <p className='text-white font-bold text-2xl cursor-default'>{candy.find(item => item.id === cartinfo.id)?.name}</p>
                                        <Trash2 className='text-white cursor-pointer' size={20}/>
                                    </div>
                                    <p className='text-(--c11) text-sm cursor-default'>{candy.find(item => item.id === cartinfo.id)?.desc}</p>

                                    <div className='items-center flex'>
                                        <p className='cursor-default mt-[1%] text-[11px] border-2 border-(--c8) p-[1px] text-(--c8) rounded-md'>
                                            {sizeText}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-3 mt-1">
                                        <button className="flex items-center justify-center w-7 h-7 
                                        rounded-md bg-(--c9) border-(--c8) border-2 text-white text-lg font-bold cursor-pointer">
                                            <Minus className="text-white" size={17}/>
                                        </button>
                                        <span className="text-white font-medium cursor-default">{cartinfo.quantity}</span>
                                        <button className="flex items-center justify-center w-7 h-7
                                        rounded-md bg-(--c9) border-(--c8) border-2 text-white text-lg font-bold cursor-pointer">
                                            <Plus className="text-white" size={17}/>
                                        </button>
                                        
                                        <div className='ml-[70%]'>
                                            <p className='text-(--c20) font-light text-xs text-right cursor-default'>
                                                {`R$${(cartPrice).toFixed(2)}/ ${sizeText}`}
                                            </p>
                                            <p className='text-(--c4) font-bold text-2xl mt-[-5px] cursor-default'>{`R$${(cartPrice * cartinfo.quantity).toFixed(2)}`}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
    )
}

export default CardCart;