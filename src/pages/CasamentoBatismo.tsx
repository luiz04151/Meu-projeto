import React from "react";


const CasamentoBatismo: React.FC = () => {
  return (
    <div className="container" style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h1 style={{ color: "#ff66c4", textAlign: "center", marginBottom: "30px" }}>
        Casamento e Batismo
      </h1>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#a538a8" }}> Casamento</h2>
        <p style={{ textAlign: "justify", color: "#333" }}>
          O Sacramento do Matrimônio é uma bênção especial concedida por Deus àqueles que decidem
          unir suas vidas diante Dele. O casamento religioso representa o compromisso de amor, 
          fidelidade e fé, baseado na presença de Cristo no centro da família.
        </p>
        <p style={{ textAlign: "justify", color: "#333" }}>
          Para celebrar o casamento na Paróquia Santa Teresinha, os noivos devem participar do 
          <strong> curso de preparação matrimonial</strong>, realizado periodicamente pela pastoral
          familiar. Também é necessário apresentar os documentos pessoais e agendar a data com 
          antecedência mínima de <strong>3 meses</strong>.
        </p>
        <p>
           <strong>Informações e agendamentos:</strong>{" "}
          <a
            href="https://api.whatsapp.com/send/?phone=5586988779778"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp da secretaria
          </a>
        </p>
      </section>

      <section>
        <h2 style={{ color: "#a538a8" }}> Batismo</h2>
        <p style={{ textAlign: "justify", color: "#333" }}>
          O Batismo é o primeiro e mais importante dos sacramentos. É através dele que recebemos 
          a graça divina e nos tornamos membros da Igreja de Cristo. O sacramento pode ser recebido 
          por crianças, jovens e adultos, conforme a preparação adequada.
        </p>
        <p style={{ textAlign: "justify", color: "#333" }}>
          Os pais e padrinhos devem participar do <strong>encontro de preparação para o batismo</strong>,
          que acontece sempre no <strong>último sábado de cada mês</strong>. 
          As celebrações do batismo são realizadas no <strong>primeiro domingo de cada mês</strong>.
        </p>
        <p>
           <strong>Agende o batismo:</strong>{" "}
          <a
            href="https://api.whatsapp.com/send/?phone=5586988779778"
            target="_blank"
            rel="noopener noreferrer"
          >
            Entrar em contato com a secretaria
          </a>
        </p>
      </section>

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <a
          href="/index.html"
          style={{
            backgroundColor: "#ff66c4",
            color: "white",
            padding: "12px 24px",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
           Voltar ao site principal
        </a>
      </div>
    </div>
  );
};

export default CasamentoBatismo;
