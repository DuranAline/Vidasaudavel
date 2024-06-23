// src/pages/NotFound/index.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout';
import './style.css';

const NotFound: React.FC = () => {
  return (
    <Layout>
      <main className="not-found-container">
        <h1>404 - Página Não Encontrada</h1>
        <p>Desculpe, a página que você está procurando não existe.</p>
        <img src="/images/homer.jpeg" alt="Homer Simpson" className="not-found-image" />
        <div className="not-found-button-container">
          <Link to="/" className="btn btn-primary">Voltar para a Página Inicial</Link>
        </div>
      </main>
    </Layout>
  );
}

export default NotFound;
