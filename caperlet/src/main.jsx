import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Login from "./pages/Login.jsx"
import Cadastro from "./pages/Cadastro.jsx"
import LojaPadrao from "./pages/LojaPadrao.jsx"
import Customizado from "./pages/Customizado.jsx"
import Carrinho from "./pages/Carrinho.jsx"
import Pagamento from "./pages/Pagamento.jsx"
import CadasProd from "./pages/CadasProd.jsx"

const hideNavPages = ["/login", "/cadastro"];
const showNav = !hideNavPages.includes(location.pathname);

const hideFooterPages = ["/login", "/cadastro"];
const showFooter = !hideFooterPages.includes(location.pathname);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
function App() {
  const [darkMode, setDarkMode] = useState(Boolean(localStorage.getItem('darkMode')) || false)

  function toggleDarkMode(){
    localStorage.getItem("darkMode") === 'true' ? localStorage.setItem("darkMode", '') : localStorage.setItem("darkMode", 'true')
    setDarkMode(localStorage.getItem("darkMode"))
  }
  return (
    <Router>
      <div className={`${darkMode && 'dark'}`}>
        {showNav && <Nav darkMode={toggleDarkMode} isDark={darkMode} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/loja" element={<LojaPadrao />} />
          <Route path="/customizado" element={<Customizado />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/pagamento" element={<Pagamento />} />
          <Route path="/cadastroProduto" element={<CadasProd />} />
        </Routes>
        {showFooter && <Footer />}
      </div>
    </Router>
  );
}

export default App;
