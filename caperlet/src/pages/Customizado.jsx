import '../assets/styles/App.css'
import { Plus, Minus } from "lucide-react"
import { Sparkle } from "phosphor-react"
import CaminhoCustom from '../components/CaminhoCustom.jsx'
import { useEffect, useState } from 'react'
import CustomBase from '../components/CustomBase.jsx'
import CustomFlavor from '../components/CustomFlavor.jsx'
import CustomColor from '../components/CustomColor.jsx'
import CustomPack from '../components/CustomPack.jsx'

function Customizado() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ["CustomBase", "CustomFlavor", "CustomColor", "CustomPack"];

  function goToStep(stepIndex) {
    if (stepIndex >= 0 && stepIndex < steps.length) {
      setCurrentStep(stepIndex);
    }
  }

    return(
      <div className="min-h-screen flex flex-col montserrat-f">        
        <main className="flex-1 flex flex-col">
            <section className="relative flex flex-col items-center bg-linear-to-br from-(--c1) dark:from-(--c27) from-50% to-(--c2) dark:to-(--c30) p-30 w-full">
                <div className="flex flex-row gap-x-[2rem]">
                    <span onClick={()=>{window.location="/loja"}} className="flex items-center justify-center text-base px-6 py-1.5 bg-[rgba(152,92,240,0.1)]
                    text-(--c8) rounded-3xl cursor-pointer gap-x-[0.5rem] font-medium">
                    <Sparkle size={25} weight="fill"/>
                    Padrão gourmet
                    </span>
                    <span className="flex items-center justify-center text-base px-6 py-1.5 bg-(--c4) 
                    text-(--c1) rounded-3xl cursor-pointer gap-x-[0.5rem] font-medium">
                    <Sparkle size={25} weight="fill"/>
                    Customizados
                    </span>
                </div>
                <h2 className="text-7xl dark:text-white text-(--c27) cursor-default font-extrabold mt-[5%]">O DOCE DOS</h2>
                <h2 className="text-7xl text-(--c4) cursor-default font-extrabold">SONHOS DOCES</h2>
                <p className="dark:text-white text-(--c27) cursor-default max-w-2xl text-2xl mt-[2%] font-light text-center">
                    Design customizado que reflete o seu sabor de forma única em cada detalhe
                </p>
                <CaminhoCustom currentStep={currentStep} moveStep={goToStep}/>
            </section>
            <section className="dark:bg-(--c3) bg-(--c24) p-15 flex w-full">
              {steps[currentStep] === "CustomBase" && <CustomBase moveStep={goToStep} />}
              {steps[currentStep] === "CustomFlavor" && <CustomFlavor moveStep={goToStep} />}
              {steps[currentStep] === "CustomColor" && <CustomColor moveStep={goToStep} />}
              {steps[currentStep] === "CustomPack" && <CustomPack moveStep={goToStep} />}
              
            </section>
        </main>
      </div>
    )
}

export default Customizado