import '../assets/styles/App.css'
import Nav from '../components/Nav.jsx'

function Home() {
    return(
    <div className="min-h-screen bg-linear-to-br from-(--c1) from-50% to-(--c2) flex flex-col montserrat-f dark">
      <Nav />
      
      <main className="flex-1 flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-3xl font-semibold mb-4">Bem-vinda, Giulia! 🚀</h2>
        <p className="text-gray-700 max-w-md">
          Esse é o início do seu site em <span className="font-bold">React</span> com <span className="font-bold">Tailwind CSS</span>.  
          Aqui você pode personalizar e construir sua própria aplicação!
        </p>

        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          Clique aqui
        </button>
      </main>

      <footer className="bg-white text-gray-500 text-sm text-center p-4">
        © 2025 - Feito por Giulia 💻
      </footer>
    </div>
    )
}

export default Home