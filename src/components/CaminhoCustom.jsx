import '../assets/styles/App.css'
import { Heart } from "lucide-react"
import { Palette } from "lucide-react"
import { Gift } from "lucide-react"
import { Sparkle } from "phosphor-react"

function CaminhoCustom({currentStep, moveStep}) {
    return(
        <span className="absolute bottom-8 flex flex-row items-center gap-x-5 w-auto dark:bg-(--c3) bg-(--c24) py-1 px-10 border-1 dark:border-(--c12) border-(--c25) rounded-full">
            <button onClick={()=>{moveStep(0)}}  className={`flex items-center p-2 bg-(--c12)
            dark:text-white text-(--c27) rounded-full cursor-pointer`}>
                <Sparkle className="text-white" size={25}/>
            </button>
            <p className="dark:text-white text-(--c27) font-medium cursor-pointer">Escolha da base</p>
            <div className="flex-1 h-[2px] w-25 dark:bg-(--c12) bg-(--c25) rounded-full"></div>

            <button onClick={()=>{moveStep(1)}}  className={`flex items-center p-2 ${currentStep >= 1 ? 'bg-(--c12)' : 'bg-(--c14)'}
            rounded-full cursor-pointer`}>
            <Heart className={`${currentStep >= 1 ? 'text-white' : 'text-(--c15)'}`} size={25}
            weight={currentStep >= 1 ? "fill" : "regular"} />
            </button>
            <p className={`${currentStep >= 1 ? 'dark:text-white text-(--c27)' : 'text-(--c15)'} font-medium cursor-pointer`}>Sabores</p>
            <div className="flex-1 h-[2px] dark:bg-(--c12) bg-(--c25) rounded-full"></div>

            <button onClick={()=>{moveStep(2)}} className={`flex items-center p-2 ${currentStep >= 2 ? 'bg-(--c12) dark:text-white text-(--c27)' : 'bg-(--c14) text-(--c15)'}
            rounded-full cursor-pointer`}>
            <Palette className={`${currentStep >= 2 ? 'text-white' : 'text-(--c15)'}`} size={25}/>
            </button>
            <p className={`${currentStep >= 2 ? 'dark:text-white text-(--c27)' : 'text-(--c15)'} font-medium cursor-pointer`}>Coloração</p>
            <div className="flex-1 h-[2px] dark:bg-(--c12) bg-(--c25) rounded-full"></div>

            <button onClick={()=>{moveStep(3)}}  className={`flex items-center p-2 ${currentStep >= 3 ? 'bg-(--c12) dark:text-white text-(--c27)' : 'bg-(--c14) text-(--c15)'}
            rounded-full cursor-pointer`}>
            <Gift className={`${currentStep >= 3 ? 'text-white' : 'text-(--c15)'}`} size={25}/>
            </button>
            <p className={`${currentStep >= 3 ? 'dark:text-white text-(--c27)' : 'text-(--c15)'} font-medium cursor-pointer`}>Seleção de pacote</p>

        </span>
    )
}

export default CaminhoCustom