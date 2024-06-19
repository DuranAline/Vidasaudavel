import 'react';
import { Link } from 'react-router-dom';
import Layout from "../../components/layout";
import "./Style.css";


export function Home() {
const news = [
  {
    title: "Dicas para uma Alimentação Saudável",
    content: "Uma dieta balanceada é essencial para manter a saúde e o bem-estar. Inclua frutas, legumes, proteínas e grãos integrais em suas refeições diárias.",
    image: "/images/nutrition_news.jpg",
    link: "/alimentacao" // Link para a página de Alimentação
  },
  {
    title: "Importância da Atividade Física Regular",
    content: "Praticar atividades físicas regularmente ajuda a melhorar a saúde cardiovascular, fortalecer os músculos e manter um peso saudável.",
    image: "/images/activities_news.jpg",
    link: "/atividades" // Link para a página de Atividades
  },
  {
    title: "Monitoramento dos Sinais Vitais",
    content: "Manter o controle dos seus sinais vitais pode ajudar na detecção precoce de problemas de saúde e na manutenção de um estilo de vida saudável.",
    image: "/images/vitals_news.jpg",
    link: "/sinais-vitais" // Link para a página de Sinais Vitais
  }
];


return (
  <Layout>
    <main className="home-container">
      <h1>Bem-vindo ao VidaSaudável</h1>
      <p>
        Mantenha-se ativo e saudável com nosso sistema de registro de atividades físicas. Monitore suas atividades, alimentação e sinais vitais para uma vida mais saudável.
      </p>
      <section className="highlights">
        <Link to="/atividades" className="highlight">
          <img src="/images/activities.png" alt="Atividades Físicas" />
          <h2>Atividades Físicas</h2>
          <p>Registre e acompanhe suas atividades físicas diárias.</p>
        </Link>
        <Link to="/alimentacao" className="highlight">
          <img src="/images/nutrition.jpg" alt="Nutrição" />
          <h2>Nutrição</h2>
          <p>Controle sua alimentação e mantenha uma dieta balanceada.</p>
        </Link>
        <Link to="/sinais-vitais" className="highlight">
          <img src="/images/vital_signs.jpg" alt="Sinais Vitais" />
          <h2>Sinais Vitais</h2>
          <p>Monitore seus sinais vitais para uma saúde ideal.</p>
        </Link>
        <Link to="/relatorios" className="highlight">
          <img src="/images/reports.jpg" alt="Relatórios" />
          <h2>Relatórios</h2>
          <p>Gere e visualize relatórios detalhados sobre sua saúde.</p>
        </Link>
        <Link to="/cadastro" className="highlight">
          <img src="/images/registration.jpg" alt="Cadastro" />
          <h2>Cadastro</h2>
          <p>Crie sua conta e comece a monitorar sua saúde hoje mesmo.</p>
        </Link>
      </section>
      <section className="news-section">
        <h2>Fique por Dentro das Ultimas Notícias</h2>
        <div className="news-container">
          {news.map((item, index) => (
            <Link key={index} to={item.link} className="news-item">
              <img src={item.image} alt={item.title} className="news-image" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  </Layout>
);
}


export default Home;


