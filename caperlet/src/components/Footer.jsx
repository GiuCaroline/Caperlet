import '../assets/styles/App.css'

function Footer(){
    return(
        <footer id="footer" className="bg-(--c3) text-[#fff] flex flex-row justify-between p-10">
            <section>
                <h1 className="text-4xl font-extrabold cursor-default">
                    <span className="text-(--c4)">CA</span>
                    <span className="text-white">PERLET</span>
                </h1>
                <p>somando confeitaria, artesanato e ingredientes premium para criar experiências extraordinárias.</p>
                <p>contato@caperletconfeitaria.com</p>
                <p>(11) 95555-5555</p>
                <p>Rua dos bobos, N°0, Casa do chapéu, São Jurassico, Brasil</p>
            </section>
            <section>
                <p>Links rápidos</p>
            </section>
            <section>
                <p>Redes e suporte</p>
            </section>
            <section className='flex flex-col flex-wrap justify-start'>
                <p className='font-bold mb-6'>Contato</p>
                <label htmlFor="" className='mb-2'>Seu email</label>
                <input type="email" name="" id="" className='p-4 mb-4 bg-[#000]/50 text-[#fff] w-[calc(20px + 2rem)] rounded-md border-1 border-(--c2) outline-none focus:border-2 focus:bg-[#000]/70'/>
                <label htmlFor="" className='mb-2'>Sua mensagem</label>
                <textarea name="" id="" className='p-4 resize-none mb-4 bg-[#000]/50 text-[#fff] w-100 h-25 rounded-md border-1 border-(--c2) outline-none focus:border-2 focus:bg-[#000]/70'/>
                <button className='p-1 px-3 w-30 rounded-md text-[#fff] bg-(--c2) cursor-pointer transition duration-200 transform-cpu hover:scale-105 hover:bg-(--c8)'>Enviar</button>
            </section>
        </footer>
    )
}

export default Footer