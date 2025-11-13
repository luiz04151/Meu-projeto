import './App.css'
import logo from './assets/logo.png'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// Páginas existentes
import Grupos from './pages/Grupos'
import CadastroEjc from './pages/CadastroEjc'
import CadastroEcc from './pages/CadastroEcc'
import CadastroTerco from './pages/CadastroTerco'
import CadastroMaes from './pages/CadastroMaes'

// Novas páginas sugeridas
import MensagensDiarias from './pages/MensagensDiarias'
import AgendaParoquial from './pages/AgendaParoquial'
import Testemunhos from './pages/Testemunhos'
import CasamentoBatismo from './pages/CasamentoBatismo'

function App() {
  return (
    <BrowserRouter>
      <div style={{ textAlign: 'center' }}>
        {/* Logo com link interno */}
        <Link to="/">
          <img src={logo} className="logo" alt="Logo da Paróquia" />
        </Link>

        <h2>Seja Bem-Vindo!</h2>
        <h1>Paróquia Santa Teresinha do Menino Jesus</h1>

        {/* Menu principal */}
        <nav style={{ marginTop: '20px' }}>
          <Link to="/grupos" style={{ margin: '0 10px' }}>Grupos</Link>
          <Link to="/mensagens" style={{ margin: '0 10px' }}>Mensagens</Link>
          <Link to="/agenda" style={{ margin: '0 10px' }}>Agenda</Link>
          <Link to="/testemunhos" style={{ margin: '0 10px' }}>Testemunhos</Link>
          <Link to="/casamento-batismo" style={{ margin: '0 10px' }}>Casamento e Batismo</Link>
        </nav>
      </div>

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
        <Route path="/" element={<h1 style={{ textAlign: "center", marginTop: "50px" }}>Bem-vindo à Paróquia!</h1>} />
        <Route path="/grupos" element={<Grupos />} />
        <Route path="/cadastro-ejc" element={<CadastroEjc />} />
        <Route path="/cadastro-ecc" element={<CadastroEcc />} />
        <Route path="/cadastro-terco" element={<CadastroTerco />} />
        <Route path="/cadastro-maes" element={<CadastroMaes />} />

        {/* Novas páginas */}
        <Route path="/mensagens" element={<MensagensDiarias />} />
        <Route path="/agenda" element={<AgendaParoquial />} />
        <Route path="/testemunhos" element={<Testemunhos />} />
        <Route path="/casamento-batismo" element={<CasamentoBatismo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
