import '../assets/styles/App.css'
import { GoogleLogo } from 'phosphor-react'

import { Mail, KeyRound, Instagram, Twitter, Undo2 } from 'lucide-react'

function Login() {
    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-(--c1) montserrat-f">
            <span className='w-[500px] p-2'>
                <Undo2 onClick={()=>{window.history.back()}} className='text-(--c4) cursor-pointer transition duration-300 transform-cpu hover:scale-150'/>
            </span>
            <div className="bg-transparent border-solid border-(--c4) border-2 p-10 rounded-2xl shadow-lg w-[500px]">
                <h1 className="text-3xl font-bold mb-6 text-center text-(--c4)  cursor-default">Faça seu login</h1>
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
                    <div className="flex flex-row items-center justify-center gap-x-[4rem] mt-[2rem] mb-[2rem]">
                        <GoogleLogo size={25} className="text-(--c4) cursor-pointer" />
                        <Instagram className="text-(--c4) cursor-pointer"/>
                        <Twitter className="text-(--c4) cursor-pointer"/>
                    </div>
                    <button className="cursor-pointer bg-(--c4) text-(--c1) py-3 rounded-lg font-bold hover:scale-103 transition">
                        Entrar
                    </button>
                    <p className="flex text-white cursor-default font-light justify-center">Não tem uma conta? Faça cadastro clicando&nbsp;
                        <span className="text-(--c4) underline cursor-pointer"><a href="/cadastro">aqui</a></span></p>
                </form>
            </div>
        </div>
    )
}
export default Login