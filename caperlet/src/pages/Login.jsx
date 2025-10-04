import '../assets/styles/App.css'
import { Mail, KeyRound } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { GoogleLogo, XLogo } from 'phosphor-react'

function Login() {
    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-(--c1)">
            <div className="bg-transparent border-solid border-(--c4) border-2 p-10 rounded-2xl shadow-lg w-[400px]">
                <h1 className="text-3xl font-bold mb-6 text-center text-(--c4)">Faça seu login</h1>
                <form className="flex flex-col gap-4">
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
                    <div >
                        <GoogleLogo size={25} className="text-(--c4)" />
                        <Instagram className="text-(--c4)"/>
                        <XLogo size={25} className="text-(--c4)" />
                    </div>
                    <button className="bg-(--c4) text-(--c1) py-3 rounded-lg font-bold hover:scale-103 transition">
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Login