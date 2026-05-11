import { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

export default function Notifications() {
  const [activeTab, setActiveTab] = useState('sistema');
  // Estado para armazenar as notificações vindas da API
  const [notifications, setNotifications] = useState([]);
  
  // Como sua API exige um userId para buscar as não lidas, você precisará
  // pegar isso do seu contexto de autenticação ou localStorage. 
  // Aqui deixaremos chumbado para fins de teste:
  const userId = "COLOQUE-UM-UUID-VALIDO-AQUI"; 

  // Efeito que roda ao montar o componente para buscar as notificações
  useEffect(() => {
    fetchNotifications();
  }, []);

  async function fetchNotifications() {
    try {
      const response = await axios.get(`http://localhost:8080/notifications/unread/${userId}`);
      // Assumindo que a resposta seja uma lista (array) de notificações
      setNotifications(response.data);
    } catch (error) {
      console.error("Erro ao carregar notificações:", error);
    }
  }

  // Função extra para marcar a notificação como lida no banco de dados e atualizar a tela
  async function handleMarkAsRead(notificationId) {
    try {
      await axios.patch(`http://localhost:8080/notifications/${notificationId}/mark-as-read`);
      // Remove a notificação da lista na tela após ser lida
      setNotifications((prev) => prev.filter(n => n.id !== notificationId));
    } catch (error) {
      console.error("Erro ao marcar como lida:", error);
    }
  }

  function changeTab(aba) {
    setActiveTab(aba);
  }

  // Filtra as notificações recebidas da API para exibir apenas as da aba ativa.
  // IMPORTANTE: Seu NotificationRequestDTO no Java precisará ter um campo "type" ou "categoria" 
  // que retorne 'sistema', 'adocao' ou 'conversas' para esse filtro funcionar.
  const currentTabNotifications = notifications.filter(notif => notif.type === activeTab);

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

        <div className="tab-content active">
          <div className="content-header">
            <div className={`circle circle-${activeTab}`}></div>
            <h3 style={{textTransform: 'capitalize'}}>{activeTab === 'adocao' ? 'Adoções' : activeTab}</h3>
          </div>
          
          {/* Renderiza a lista dinamicamente */}
          {currentTabNotifications.length > 0 ? (
            currentTabNotifications.map((notif) => (
              <div 
                className="notification-item" 
                key={notif.id}
                onClick={() => handleMarkAsRead(notif.id)} // Exemplo: marca como lido ao clicar
                style={{ cursor: 'pointer' }}
              >
                {/* Ajuste "notif.title" e "notif.message" de acordo com as propriedades do seu DTO */}
                <h4>{notif.title || 'Notificação'}</h4>
                <p>{notif.message}</p>
              </div>
            ))
          ) : (
            <div className="notification-item">
              <p>Você não tem novas notificações aqui.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}