import { useState } from 'react';
import './style.css';

export default function Notifications() {
  // Estado que guarda qual aba está ativa no momento 
  const [activeTab, setActiveTab] = useState('sistema');

  // Função para mudar a aba
  function changeTab(aba) {
    setActiveTab(aba);
  }

  return (
    <>
      {/* MENU DE ABAS */}
      <div className="tab-container">
        <button 
          className={`tab-button sistema ${activeTab === 'sistema' ? 'active' : ''}`} 
          onClick={() => changeTab('sistema')}
        >
          Sistema
        </button>
        
        <button 
          className={`tab-button adocao ${activeTab === 'adocao' ? 'active' : ''}`} 
          onClick={() => changeTab('adocao')}
        >
          Adoção
        </button>
        
        <button 
          className={`tab-button conversas ${activeTab === 'conversas' ? 'active' : ''}`} 
          onClick={() => changeTab('conversas')}
        >
          Conversas
        </button>
      </div>

      {/* ÁREA DE CONTEÚDO */}
      <main className="content-container">
        <h2 className="section-title">Notificações</h2>

        {/* ABA: SISTEMA */}
        <div className={`tab-content ${activeTab === 'sistema' ? 'active' : ''}`}>
          <div className="content-header">
            <div className="circle circle-sistema"></div>
            <h3>Sistema</h3>
          </div>
          
          <div className="notification-item">
            <h4>Notificação</h4>
            <p>Receber notificações fora do app</p>
          </div>
          <div className="notification-item">
            <h4>Notificação</h4>
            <p>Receber notificações fora do app</p>
          </div>
        </div>

        {/* ABA: ADOÇÃO */}
        <div className={`tab-content ${activeTab === 'adocao' ? 'active' : ''}`}>
          <div className="content-header">
            <div className="circle circle-adocao"></div>
            <h3>Adoções</h3>
          </div>
          
          <div className="notification-item">
            <h4>Notificação</h4>
            <p>Adoção confirmada com sucesso!</p>
          </div>
        </div>

        {/* ABA: CONVERSAS */}
        <div className={`tab-content ${activeTab === 'conversas' ? 'active' : ''}`}>
          <div className="content-header">
            <div className="circle circle-conversas"></div>
            <h3>Conversas</h3>
          </div>
          
          <div className="notification-item">
            <h4>Usuario 123</h4>
            <p>Você tem uma nova mensagem não lida.</p>
          </div>
        </div>
      </main>
    </>
  );
}