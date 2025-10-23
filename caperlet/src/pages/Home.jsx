import '../assets/styles/App.css'
import { Star, ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react"
import { useState, useEffect } from "react"
import { useCandies } from "../hooks/useCandies"
import { InstagramLogo } from "phosphor-react"

const testimonials = [
  {
    name: "Ana Paula",
    city: "Santo André - SP",
    text: "Comprei pra presentear e acabei ficando com a caixa pra mim 😅💝 tudo maravilhoso!",
    image: "https://i.imgur.com/djCrIOc.jpeg",
    rating: 5,
    post: "public/images/InstaDoces.jpg"
  },
  {
    name: "Bruna Souza",
    city: "Mauá - SP",
    text: "Nada melhor do que macarons da Caperlet e um bom café!",
    image: "https://i.imgur.com/jJ61Z4z.jpeg",
    rating: 5,
    post: "public/images/InstaMacaron.jpg"
  },
  {
    name: "Rafaela Torres",
    city: "Ribeirão Pires - SP",
    text: "A apresentação dos doces é impecável e o sabor é inesquecível. Recomendo muito!",
    image: "https://i.imgur.com/XNgSovw.jpeg",
    rating: 5,
    post: "public/images/InstaBrigadeiro.jpg"
  },
];

// agora os doces vêm do banco via hook

function Home() {
  const [index, setIndex] = useState(0);
  const { fetchCandies, candies, loading, erro } = useCandies();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying || !candies || candies.length === 0) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % candies.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, candies])

  useEffect(() => {
    fetchCandies();
  }, [])


  useEffect(() => {
    if (!candies || candies.length === 0) {
      setCurrentSlide(0)
      return
    }
    if (currentSlide >= candies.length) setCurrentSlide(0)
  }, [candies])

  const nextSlide = () => {
    if (!candies || candies.length === 0) return
    setCurrentSlide((prev) => (prev + 1) % candies.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    if (!candies || candies.length === 0) return
    setCurrentSlide((prev) => (prev - 1 + candies.length) % candies.length)
    setIsAutoPlaying(false)
  }

    return(
      <div className="min-h-screen relative flex flex-wrap justify-center montserrat-f overflow-hidden">
        {/* Hero/carrossel: altura definida para evitar que os slides sobreponham o conteúdo abaixo */}
        <div className='relative w-full h-[100vh] bg-linear-to-br from-(--c1) from-50% to-(--c2)'>
          <div className="relative w-full h-[80vh] md:h-[80vh]">
            {(candies || []).map((candy, index) => (
              <div
                key={candy.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentSlide
                    ? "opacity-100 translate-x-0"
                    : index < currentSlide
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                }`}
              >   
                <main className="relative flex-1 flex flex-row items-start justify-between p-6">
                  <div className="p-[8%] flex flex-col">
                    <span className="justify-center flex items-center text-lg px-6 mb-[4%] w-[35%] py-1.5 bg-(--c4) 
                    text-white rounded-3xl cursor-default gap-x-[1rem]">
                      <Star className="w-[14%] stroke-white fill-white" />
                      Robusto e ousado
                    </span>

                    <h2 className="text-8xl text-(--c4) cursor-default font-extrabold">{candy.name.toUpperCase()}</h2>
                    <p className="text-(--c5) cursor-default max-w-2xl text-xl">
                      {candy.desc}
                    </p>

                    <div className="flex flex-row gap-x-[3rem] mt-[1rem]">
                      <p className="text-(--c4) mt-[4%] text-3xl font-bold max-w-2xl flex flex-col">
                        <span className="underline cursor-default">{`R$${candy.price.toFixed(2)}/unidade`}</span>
                        <span>
                          <span className="underline cursor-default text-white font-extralight text-lg">Ou comprar o </span>
                          <span className="cursor-pointer underline text-lg font-extralight"><a className='hover:text-(--c8) transition duration-[200ms]' href="/loja">pacote fechado</a></span>
                        </span>
                      </p>
                      <button className="flex items-center gap-x-[0.5rem] mt-[4%] px-6 py-6 
                      bg-white text-black rounded-full text-lg cursor-pointer hover:scale-105 transition">
                          <ShoppingBag className="w-[15%] text-black" />
                          Por no carrinho
                      </button>
                    </div>

                    
                  </div>
                  
                  <div className="px-[6rem] flex justify-center">
                    <img 
                      src={candy.image} 
                      alt={candy.name || "Doce"} 
                      className="shadow-lg max-w-md object-cover h-[800px] rounded-lg"
                    />
                  </div>
                  
                </main>
              </div>))}
          </div>
              <div className="absolute bottom-30 left-43 flex flex-row gap-x-[1rem] items-center mt-[4rem]">
                      <p className="text-(--c6) text-[1.2rem] cursor-default">{`${currentSlide + 1} / ${candies.length}`}</p>
                      <button onClick={()=>{prevSlide()}} className="flex items-center p-2 bg-black opacity-[80%]
                      text-white rounded-full cursor-pointer">
                        <ChevronLeft className="text-(--c7)" size={28}/>
                      </button>
                      <button onClick={()=>{nextSlide()}} className="flex items-center p-2 bg-black opacity-[80%]
                      text-white rounded-full cursor-pointer">
                        <ChevronRight className="text-(--c7)" size={28}/>
                      </button>
                    </div>
        </div>
  {/* Seção de depoimentos: não usar absolute para ficar abaixo do hero */}
  <section className="w-full flex flex-col items-center justify-center py-16 px-6 md:px-20 text-center bg-(--c3) overflow-hidden">
          
          <div className=" relative flex items-center justify-center gap-4">
            <div className="h-[1px] w-10 bg-(--c4) opacity-60 mb-[9%]"></div>
            <h2 className="text-center mb-[9%] cursor-default">
              <span className="block text-4xl font-semibold md:text-5xl text-(--c4)">
                O que nossos clientes dizem
              </span>
              <span className="flex items-center justify-center text-lg text-(--c19) font-light tracking-widest mt-[1%]">
                Experiências que adoçam o coraçãoㅤ
                <InstagramLogo size={20} color='#fff' opacity={0.5}/>
              </span>
            </h2>
            <div className="h-[1px] w-10 bg-(--c4) opacity-60 mb-[9%]"></div>
          </div>

          {/* Container geral */}
          <div className="relative w-full max-w-2xl flex flex-col items-center">
            {/* Carrossel */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${index * 100}%)`,
                width: `${testimonials.length * 100}%`,
              }}
            >
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  className="w-full flex justify-center items-center shrink-0"
                  style={{ width: "100%" }}
                >
                  <div className="flex flex-row gap-2">
                    <img src={item.post} className='rounded-2xl w-[50%] h-[500px]'/>

                    <div className="bg-white flex flex-col justify-center shadow-lg rounded-2xl p-8 mx-auto max-w-md">
                      {/* Estrelas */}
                      <div className="flex justify-center mb-4">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="text-yellow-400 fill-yellow-400 w-5 h-5 mx-0.5"
                          />
                        ))}
                      </div>

                      {/* Texto */}
                      <p className="text-gray-700 italic text-lg mb-[5%]">
                        “{item.text}”
                      </p>

                      {/* Cliente */}
                      <div className="flex flex-col items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-full object-cover mb-[2%] border-2 border-(--c4) shadow-md"
                        />
                        <h4 className="font-semibold text-(--c8)">{item.name}</h4>
                        <span className="text-sm text-gray-500">{item.city}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 🔽 Pontinhos de navegação (fora do carrossel) */}
            <div className="flex justify-center gap-2 mt-[10%]">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full ${
                    i === index ? "bg-(--c4) scale-110" : "bg-(--c19)"
                  } transition-all duration-300`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    )
}

export default Home