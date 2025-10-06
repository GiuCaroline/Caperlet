import '../assets/styles/App.css'
import { Mail, KeyRound } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { GoogleLogo } from 'phosphor-react'
import { Twitter } from 'lucide-react'
import { User } from 'lucide-react'
import { Phone } from 'lucide-react'

function Cadastro() {
    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-(--c1) montserrat-f">
            <div className="bg-transparent border-solid border-(--c4) border-2 p-10 rounded-2xl shadow-lg w-[500px]">
                <h1 className="text-3xl font-bold mb-6 text-center text-(--c4) cursor-default">Faça seu cadastro</h1>
                <form className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 border-b-(--c4) border-b-2 p-3
                 transition-colors duration-300 focus-within:border-b-white">
                        <User className="text-(--c4)" size={25} />
                        <input 
                            type="text" 
                            placeholder="Nome" 
                            className="bg-transparent outline-none w-full text-(--c4) placeholder:text-(--c4) placeholder:opacity-70 "
                        />
                    </div>
                    <div className="flex items-center gap-3 border-b-(--c4) border-b-2 p-3
                 transition-colors duration-300 focus-within:border-b-white">
                        <Phone className="text-(--c4)" size={25} />
                        <input 
                            type="tel" 
                            placeholder="Telefone" 
                            className="bg-transparent outline-none w-full text-(--c4) placeholder:text-(--c4) placeholder:opacity-70 "
                        />
                    </div>
                    <div className="flex items-center gap-3 border-b-(--c4) border-b-2 p-3
                 transition-colors duration-300 focus-within:border-b-white">
                        <Mail className="text-(--c4)" size={25} />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="bg-transparent outline-none w-full text-(--c4) placeholder:text-(--c4) placeholder:opacity-70 "
                        />
                    </div>
                    <div className="flex items-center gap-3 border-b-(--c4) border-b-2 p-3
                 transition-colors duration-300 focus-within:border-b-white">
                        <KeyRound className="text-(--c4)" size={25} />
                        <input 
                            type="password" 
                            placeholder="Senha" 
                            className="bg-transparent outline-none w-full text-(--c4) placeholder:text-(--c4) placeholder:opacity-70"
                        />
                    </div>
                    <div className="flex flex-row items-center justify-center gap-x-[4rem] mt-[2rem] mb-[2rem]">
                        <GoogleLogo size={25} className="text-(--c4) cursor-pointer" />
                        <Instagram className="text-(--c4) cursor-pointer"/>
                        <Twitter className="text-(--c4) cursor-pointer"/>
                    </div>
                    <button className="cursor-pointer bg-(--c4) text-(--c1) py-3 rounded-lg font-bold hover:scale-103 transition">
                        Entrar
                    </button>
                    <p className="flex text-white cursor-default font-light justify-center">Já tem uma conta? Faça login clicando&nbsp;
                        <span className="text-(--c4) underline cursor-pointer">aqui</span></p>
                </form>
            </div>
        </div>
    )
}
export default Cadastro