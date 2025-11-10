import './App.css'
import logo from './assets/logo.png'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Grupos from './pages/Grupos'
import CadastroEjc from './pages/CadastroEjc'
import CadastroEcc from './pages/CadastroEcc'
import CadastroTerco from './pages/CadastroTerco'
import CadastroMaes from './pages/CadastroMaes'

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Logo com link interno */}
        <Link to="/">
          <img src={logo} className="logo" alt="Logo da Paróquia" />
        </Link>
      </div>

      <h2>Seja Bem-Vindo!</h2>
      <h1>Paróquia Santa Teresinha do Menino Jesus</h1>

      <div className="card">
        {/* Botão para o site original */}
        <a href="/index.html" target="_self" style={{ textDecoration: 'none' }}>
          <button>
            <strong>Acesse Nosso Site!</strong>
          </button>
        </a>

        <br />

        {/* Botão para página de grupos */}
        <div style={{ textAlign: "center" }}>
          <Link to="/grupos" style={{ textDecoration: 'none' }}>
            <button>
             <strong>Participe dos grupos paroquiais</strong> 
              </button>
          </Link>
        </div>

        <p>Atendimento paroquial de seg a sex das 14h às 19h</p>
      </div>

    
      {/* Rotas */}
      <Routes>
        <Route path="/" element={<h1 style={{ textAlign: "center", marginTop: "50px" }}></h1>} />
        <Route path="/grupos" element={<Grupos />} />
        <Route path="/cadastro-ejc" element={<CadastroEjc />} />
        <Route path="/cadastro-ecc" element={<CadastroEcc />} />
        <Route path="/cadastro-terco" element={<CadastroTerco />} />
        <Route path="/cadastro-maes" element={<CadastroMaes />} />
      </Routes>
    </BrowserRouter>

  
  )
}

export default App
