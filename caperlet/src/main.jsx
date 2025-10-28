import { StrictMode } from 'react'
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
import Customizado2 from "./pages/Customizado2.jsx"
import Customizado3 from './pages/Customizado3.jsx'
import Customizado4 from "./pages/Customizado4.jsx"
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
    // AUMENTAR / DIMINUIR FONTE
    const body = document.body;
    let fontSize = 100;
    const changeSize = (delta) => {
      fontSize += delta;
      body.style.fontSize = fontSize + "%";
    };

    const btnUp = document.getElementById("aumentar-texto");
    const btnDown = document.getElementById("diminuir-texto");
    if(btnUp) btnUp.addEventListener("click", () => changeSize(10));
    if(btnDown) btnDown.addEventListener("click", () => changeSize(-10));


    // ALTO CONTRASTE
    const contraste = document.getElementById("alternar-contraste");
    if(contraste) contraste.addEventListener("click", () => {
      body.classList.toggle("alto-contraste");
    });

    // PRETO E BRANCO
    const pb = document.getElementById("preto-e-branco");
    if(pb) pb.addEventListener("click", () => {
      body.classList.toggle("preto-e-branco");
    });

    // VLibras
    if (window.VLibras) {
      new window.VLibras.Widget('https://vlibras.gov.br/app');
    }
  }, []);

  return (
    <Router>
      {showNav && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/loja" element={<LojaPadrao />} />
        <Route path="/customizado" element={<Customizado />} />
        <Route path="/customizadoSabor" element={<Customizado2 />} />
        <Route path="/customizadoColoracao" element={<Customizado3 />} />
        <Route path="/customizadoPacote" element={<Customizado4 />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/pagamento" element={<Pagamento />} />
        <Route path="/cadastroProduto" element={<CadasProd />} />
      </Routes>
      {showFooter && <Footer />}
    </Router>
  );
}

export default App;
