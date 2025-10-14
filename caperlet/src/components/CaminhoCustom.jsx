import '../assets/styles/App.css'
import { Heart } from "lucide-react"
import { Palette } from "lucide-react"
import { Gift } from "lucide-react"
import { Sparkle } from "phosphor-react"

function CaminhoCustom() {
    return(
        <span className="absolute bottom-8 flex flex-row items-center gap-x-5 w-auto bg-(--c3) py-1 px-10 border-1 border-(--c12) rounded-full">
            <button onClick={()=>{window.location="/customizado"}}  className="flex items-center p-2 bg-(--c12)
            text-white rounded-full cursor-pointer">
            <Sparkle className="text-white" size={25} weight="fill"/>
            </button>
            <p className="text-white font-medium cursor-pointer">Escolha da base</p>
            <div className="flex-1 h-[2px] w-25 bg-(--c12) rounded-full"></div>

            <button onClick={()=>{window.location="/customizadoSabor"}}  className="flex items-center p-2 bg-(--c14)
            text-white rounded-full cursor-pointer">
            <Heart className="text-(--c15)" size={25}/>
            </button>
            <p className="text-(--c15) font-medium cursor-pointer">Sabores</p>
            <div className="flex-1 h-[2px] bg-(--c12) rounded-full"></div>

            <button onClick={()=>{window.location="/customizadoColoracao"}} className="flex items-center p-2 bg-(--c14)
            text-white rounded-full cursor-pointer">
            <Palette className="text-(--c15)" size={25}/>
            </button>
            <p className="text-(--c15) font-medium cursor-pointer">Coloração</p>
            <div className="flex-1 h-[2px] bg-(--c12) rounded-full"></div>

            <button onClick={()=>{window.location="/customizadoPacote"}}  className="flex items-center p-2 bg-(--c14)
            text-white rounded-full cursor-pointer">
            <Gift className="text-(--c15)" size={25}/>
            </button>
            <p className="text-(--c15) font-medium cursor-pointer">Seleção de pacote</p>

        </span>
    )
}

export default CaminhoCustom