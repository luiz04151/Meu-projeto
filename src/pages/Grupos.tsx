
import { Link } from "react-router-dom";
import "../App.css"; // usa o mesmo estilo geral

function Grupos() {
  return (
    <main className="grupos-container">
      <section className="intro">
        <h1>Grupos e Movimentos Paroquiais</h1>
        <p>
          Na Paróquia <strong>Santa Teresinha do Menino Jesus</strong>, cada grupo é
          uma oportunidade de viver o Evangelho em comunidade, servindo com amor,
          partilha e fé. Venha participar e descubra como Deus age em cada encontro!
        </p>
      </section>

      <section className="grupos-lista">
        <div className="grupo-card">
          <img src="/assets/logo2.png" alt="EJC" />
          <h2>Encontro de Jovens com Cristo (EJC)</h2>
          <p>
            Um espaço para o jovem se encontrar com Deus, com o próximo e consigo mesmo.
            O EJC transforma corações e renova a alegria de viver a fé em comunidade.
          </p>
          <Link to="/cadastro-ejc" style={{ textDecoration: "none" }}>
        <button
          style={{
            background: "#ff66c4",
            color: "white",
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            marginTop: "20px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
           Cadastro do EJC
        </button>
      </Link>

        </div>

        <div className="grupo-card">
          <img src="/assets/logo3.jpeg" alt="ECC" />
          <h2>Encontro de Casais com Cristo (ECC)</h2>
          <p>
            O ECC é um momento de renovação para os casais, fortalecendo a união e
            a espiritualidade familiar. Jesus quer habitar em seu lar!
          </p>
          <Link to="/cadastro-ecc" style={{ textDecoration: "none" }}>
        <button
          style={{
            background: "#ff66c4",
            color: "white",
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            marginTop: "20px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
           Cadastro do ECC
        </button>
      </Link>
        </div>

        <div className="grupo-card">
          <img src="/assets/homens.jpg" alt="Terço dos Homens" />
          <h2>Terço dos Homens</h2>
          <p>
            Um momento de fé e oração mariana. Homens de fé se reúnem para rezar o
            rosário e fortalecer suas famílias através da oração.
          </p>
          <Link to="/cadastro-terco" style={{ textDecoration: "none" }}>
        <button
          style={{
            background: "#ff66c4",
            color: "white",
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            marginTop: "20px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
           Cadastro do Terço dos Homens
        </button>
      </Link>
        </div>

        <div className="grupo-card">
          <img src="/assets/maes.png" alt="Mães que Oram" />
          <h2>Mães que Oram pelos Filhos</h2>
          <p>
            Um exército de amor e fé. Mães intercedendo pela salvação e proteção
            dos seus filhos. Junte-se a nós nessa missão de oração e esperança.
          </p>
          <Link to="/cadastro-maes" style={{ textDecoration: "none" }}>
        <button
          style={{
            background: "#ff66c4",
            color: "white",
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            marginTop: "20px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
           Inscrição
        </button>
      </Link>
        </div>
      </section>

      <section className="encerramento">
        <h2>“Quem vive o amor de Cristo, nunca está só.”</h2>
        <p>
          Faça parte dos nossos grupos e experimente a alegria de servir e crescer na fé.
          Entre em contato conosco pelo WhatsApp da secretaria paroquial.
        </p> 
      </section>
    </main>
  );
}

export default Grupos;
