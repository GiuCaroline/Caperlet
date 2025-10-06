import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Home from './pages/Home.jsx'
import Login from "./pages/Login.jsx"
import Cadastro from "./pages/Cadastro.jsx"
import LojaPadrao from "./pages/LojaPadrao.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/loja" element={<LojaPadrao />} />
      </Routes>
    </Router>
  );
}

export default App;
