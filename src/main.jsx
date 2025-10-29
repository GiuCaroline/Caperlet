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
import { useEffect } from "react";

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
   useEffect(() => {
    let fontSize = 100;
    const MIN = 50;
    const MAX = 200;

    const changeSize = (delta) => {
      fontSize = Math.min(MAX, Math.max(MIN, fontSize + delta));
      document.documentElement.style.fontSize = fontSize + "%";
    };

    const resetSize = () => {
      fontSize = 100;
      document.documentElement.style.fontSize = fontSize + "%";
    };

    const onDocClick = (e) => {
      const btn = e.target.closest("#aumentar-texto, #diminuir-texto, #preto-e-branco");
      if (!btn) return;

      if (btn.id === "aumentar-texto") {
        changeSize(10);
        return;
      }
      if (btn.id === "diminuir-texto") {
        changeSize(-10);
        return;
      }
      if (btn.id === "preto-e-branco") {
        document.body.classList.toggle("preto-e-branco");
        return;
      }
    };

    document.addEventListener("click", onDocClick);

    const saved = localStorage.getItem("appFontSize");
    if (saved) {
      fontSize = Number(saved);
      document.documentElement.style.fontSize = fontSize + "%";
    }

    const saveFontSize = () => localStorage.setItem("appFontSize", String(fontSize));

    const observer = new MutationObserver(saveFontSize);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["style"] });


    return () => {
      document.removeEventListener("click", onDocClick);
      observer.disconnect();
    };

  
  }, []);

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
