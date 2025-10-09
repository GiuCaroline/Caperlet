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
      </Routes>
      {(location.pathname !== "/login" || location.pathname !== "/cadastro") && <Footer/>}
    </Router>
  );
}

export default App;
