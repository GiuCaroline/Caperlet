import '../assets/styles/App.css'
import Nav from '../components/Nav.jsx'
import { Star } from "lucide-react"
import { Sparkle } from "phosphor-react"

function LojaPadrao() {
    return(
      <div className="min-h-screen flex flex-col montserrat-f">
        <Nav />
        
        <main className="flex-1 flex flex-col">
            <section className="flex flex-col items-center bg-linear-to-br from-(--c1) from-50% to-(--c2) p-30 w-[100%]">
                <div className="flex flex-row gap-x-[2rem]">
                    <span className="flex items-center justify-center text-base px-6 py-1.5 bg-(--c4) 
                    text-(--c1) rounded-3xl cursor-pointer gap-x-[0.5rem] font-medium">
                    <Sparkle size={25}/>
                    Padrão gourmet
                    </span>
                    <span className="flex items-center justify-center text-base px-6 py-1.5 bg-[rgba(152,92,240,0.1)]
                    text-(--c8) rounded-3xl cursor-pointer gap-x-[0.5rem] font-medium">
                    <Sparkle size={25}/>
                    Customizados
                    </span>
                </div>
                <h2 className="text-7xl text-white cursor-default font-extrabold mt-15">PADRÃO</h2>
                <h2 className="text-7xl text-(--c4) cursor-default font-extrabold">GOURMET</h2>
                <p className="text-white cursor-default max-w-2xl text-xl mt-5 font-light text-center">
                Descubra as coleções da casa, onde a loja se torna uma galeria e cada peça é uma arte comestível.
                </p>
            </section>
            <section className="bg-[#0b0b0d] py-12 flex flex-col items-center w-[100%]">
                <span>TESTE</span>
            </section>
        </main>

        <footer className="bg-white text-gray-500 text-sm text-center p-4">
          © 2025 - Feito por Giulia e Muchas💻
        </footer>
      </div>
    )
}

export default LojaPadrao