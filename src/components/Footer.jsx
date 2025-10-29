import '../assets/styles/App.css'
import { Instagram, } from 'lucide-react'
import { TelegramLogo, WhatsappLogo } from 'phosphor-react'

function Footer(){
    return(
        <footer id="footer" className="dark:bg-(--c3) bg-(--c24) dark:text-white text-(--c27) flex flex-row justify-between p-10 montserrat-f
         border-t-1 dark:border-(--c10) border-(--c17) selection:bg-(--c4) selection:text-white">
            <section>
                <h1 className="text-4xl font-extrabold cursor-default">
                    <span className="text-(--c4)">CA</span>
                    <span className="text-(--c27) dark:text-white text-(--c3)">PERLET</span>
                </h1>
                <p className='mt-[3%] text-lg text-(--c27) dark:text-white cursor-default'>somando confeitaria, artesanato e ingredientes<br></br>premium para criar experiências extraordinárias.</p>
                <p className='mt-[3%] text-lg text-(--c4) cursor-default'>contato@caperletconfeitaria.com</p>
                <p className='mt-[1%] text-lg text-(--c4) cursor-default'>(11) 94002-8922</p>
                <p className='mt-[1%] text-lg text-(--c4) cursor-default'>Rua dos bobos, N°0, Casa do chapéu, São Jurassico, Brasil</p>
            </section>
            <section className='flex flex-col items-center'>
                <p className='font-bold text-xl text-(--c27) dark:text-white cursor-default'>Links rápidos</p>
                <div className='flex flex-col gap-1 mt-[8%] list-none'>
                    <li className='text-(--c16) cursor-pointer hover:text-(--c4)'><a href='/loja'>Nossa vitrine</a></li>
                    <li className='text-(--c16) cursor-pointer hover:text-(--c4)'><a href='/customizado '>Faça seu doce</a></li>
                    <li className='text-(--c16) cursor-pointer hover:text-(--c4)'><a href=''>Sobre nós</a></li>
                </div>
            </section>
            <section className='flex flex-col gap-3 items-center'>
                <p className='font-bold text-xl text-(--c27) dark:text-white cursor-default'>Redes e suporte</p>

                <a 
                    href="https://www.instagram.com/caperlet" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='flex items-center gap-2 mt-[2%] cursor-pointer hover:text-(--c4) text-(--c16)'
                >
                    <Instagram />
                    <p>Instagram</p>
                </a>
                <a 
                    href="https://wa.me/5511940028922" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='flex items-center gap-2 cursor-pointer hover:text-(--c4) text-(--c16)'
                >
                    <WhatsappLogo size={30} />
                    <p>Whatsapp</p>
                </a>
                <a 
                    href="https://t.me/caperlet" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='flex items-center gap-2 cursor-pointer hover:text-(--c4) text-(--c16)'
                >
                    <TelegramLogo size={30} />
                    <p>Telegram</p>
                </a>
            </section>
            <section className='flex flex-col flex-wrap justify-start'>
                <p className='font-bold mb-[4%] text-xl text-(--c27) dark:text-white cursor-default'>Contato</p>
                <p className='mb-[4%] dark:text-white text-(--c27) cursor-default'>Digite o email que deseja usar para conversar com a<br></br>gente e envie uma mensagem.</p>
                <label htmlFor="" className='mb-2 cursor-default'>Seu email</label>
                <input type="email" name="" id="" className='p-4 mb-4 dark:bg-[#000]/50 bg-(--c25) text-[#fff] w-[calc(20px + 2rem)] rounded-md border-1 border-(--c2) outline-none focus:border-2 focus:bg-[#000]/70'/>
                <label htmlFor="" className='mb-2 cursor-default'>Sua mensagem</label>
                <textarea name="" id="" className='p-4 resize-none mb-4 dark:bg-[#000]/50 bg-(--c25) text-[#fff] w-100 h-25 rounded-md border-1 border-(--c2) outline-none focus:border-2 focus:bg-[#000]/70'/>
                <button className='p-1 px-3 w-30 rounded-md text-[#fff] bg-(--c2) cursor-pointer transition duration-200 transform-cpu hover:scale-105 hover:bg-(--c4)'>Enviar</button>
            </section>
        </footer>
    )
}

export default Footer