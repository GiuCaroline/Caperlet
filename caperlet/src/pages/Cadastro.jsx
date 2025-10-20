import '../assets/styles/App.css'
import { GoogleLogo } from 'phosphor-react'
import { useRegister } from "../hooks/useRegister";
import { Mail, KeyRound, Instagram, Twitter, User, Phone, Undo2 } from 'lucide-react'

function Cadastro() {
    const { register, loading, erro } = useRegister();
    
        async function handleSubmit(e) {
            e.preventDefault();
            const name = e.target.name.value;
            const phone = e.target.phone.value;
            const email = e.target.email.value;
            const senha = e.target.password.value;
            const user = await register(name, email, phone, senha);
            if (user) location.href = "/login";
        } 

    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-(--c1) montserrat-f">
            <span className='w-[30%] p-2'>
                <Undo2 onClick={()=>{window.history.back()}} className='text-(--c4) cursor-pointer transition duration-300 transform-cpu hover:scale-150'/>
            </span>
            <div className="bg-transparent border-solid border-(--c4) border-2 p-10 rounded-2xl shadow-lg w-[500px]">
                <h1 className="text-3xl font-bold mb-[5%] text-center text-(--c4) cursor-default">Faça seu cadastro</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 border-b-(--c4) border-b-2 p-3
                 transition-colors duration-300 focus-within:border-b-white">
                        <User className="text-(--c4)" size={25} />
                        <input 
                            name='name'
                            type="text" 
                            placeholder="Nome" 
                            className="bg-transparent outline-none w-full text-(--c4) placeholder:text-(--c4) placeholder:opacity-70 "
                        />
                    </div>
                    <div className="flex items-center gap-3 border-b-(--c4) border-b-2 p-3
                 transition-colors duration-300 focus-within:border-b-white">
                        <Phone className="text-(--c4)" size={25} />
                        <input 
                            name='phone'
                            type="tel" 
                            placeholder="Telefone" 
                            className="bg-transparent outline-none w-full text-(--c4) placeholder:text-(--c4) placeholder:opacity-70 "
                        />
                    </div>
                    <div className="flex items-center gap-3 border-b-(--c4) border-b-2 p-3
                 transition-colors duration-300 focus-within:border-b-white">
                        <Mail className="text-(--c4)" size={25} />
                        <input 
                            name='email'
                            type="email" 
                            placeholder="Email" 
                            className="bg-transparent outline-none w-full text-(--c4) placeholder:text-(--c4) placeholder:opacity-70 "
                        />
                    </div>
                    <div className="flex items-center gap-3 border-b-(--c4) border-b-2 p-3
                 transition-colors duration-300 focus-within:border-b-white">
                        <KeyRound className="text-(--c4)" size={25} />
                        <input 
                            name='password'
                            type="password" 
                            placeholder="Senha" 
                            className="bg-transparent outline-none w-full text-(--c4) placeholder:text-(--c4) placeholder:opacity-70"
                        />
                    </div>
                    <div className="flex flex-row items-center justify-center gap-x-[4rem] mt-[10%] mb-[10%]">
                        <GoogleLogo size={25} className="text-(--c4) cursor-pointer" />
                        <Instagram className="text-(--c4) cursor-pointer"/>
                        <Twitter className="text-(--c4) cursor-pointer"/>
                    </div>
                    <button className="cursor-pointer bg-(--c4) text-(--c1) py-3 rounded-lg font-bold hover:scale-103 transition">
                        Registrar
                    </button>
                    <p className="flex text-white cursor-default font-light justify-center">Já tem uma conta? Faça login clicando&nbsp;
                        <span className="text-(--c4) underline cursor-pointer"><a href="/login">aqui</a></span></p>
                    {erro && <p>{erro}</p>}
                </form>
            </div>
        </div>
    )
}
export default Cadastro