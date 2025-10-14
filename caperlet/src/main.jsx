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
import Customizado3 from './pages/Customizado3.jsx';
import Customizado4 from "./pages/Customizado4.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
function App() {
  return (
    <Router>
      {(location.pathname !== "/login" || location.pathname !== "/cadastro") && <Nav/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/loja" element={<LojaPadrao />} />
        <Route path="/customizado" element={<Customizado />} />
        <Route path="/customizadoSabor" element={<Customizado2 />} />
        <Route path="/customizadoColoracao" element={<Customizado3 />} />
        <Route path="/customizadoPacote" element={<Customizado4 />} />
      </Routes>
      {(location.pathname !== "/login" || location.pathname !== "/cadastro") && <Footer/>}
    </Router>
  );
}

export default App;
