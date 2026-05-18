import { useState, useEffect } from 'react';
import axios from 'axios';
import { NotificationsContainer } from './NotificationPage.style'; 
import Header from '../../components/Shared/Header/Header'

export default function Notifications() {
  const [activeTab, setActiveTab] = useState('sistema');
  const [notifications, setNotifications] = useState([]);
  
  // Substitua pelo ID real de um usuário do seu banco de dados
  const userId = "COLOQUE-UM-UUID-VALIDO-AQUI"; 

  // 🌐 SUA NOVA URL BASE DO AZURE
  const BASE_URL = "https://testahelppet-notification.azurewebsites.net";

  useEffect(() => {
    fetchNotifications();
  }, []);

  // ENDPOINT: GET /notifications/unread/{userId}
  async function fetchNotifications() {
    try {
      const response = await axios.get(`${BASE_URL}/notifications/unread/${userId}`);
      setNotifications(response.data);
    } catch (error) {
      console.error("Erro ao carregar notificações do Azure:", error);
    }
  }

  // ENDPOINT: PATCH /notifications/{id}/mark-as-read
  async function handleMarkAsRead(notificationId) {
    try {
      await axios.patch(`${BASE_URL}/notifications/${notificationId}/mark-as-read`);
      
      // Remove a notificação da tela após marcar como lida com sucesso
      setNotifications((prev) => prev.filter(n => n.id !== notificationId));
    } catch (error) {
      console.error("Erro ao marcar como lida no Azure:", error);
    }
  }
     
    async function handleDelete(notificationId) {
      await axios.delete(`${BASE_URL}/notifications/delete/${notificationId}`);
    }

  function changeTab(aba) {
    setActiveTab(aba);
  }

  // Filtra as notificações recebidas da API para exibir apenas as da aba ativa
  const currentTabNotifications = notifications.filter(notif => notif.type === activeTab);

  return (
    <NotificationsContainer>
      <Header />
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
          
          {currentTabNotifications.length > 0 ? (
             currentTabNotifications.map((notif) => (
              <div 
                className="notification-item" 
                key={notif.id}
                onClick={() => handleMarkAsRead(notif.id)}
                style={{ cursor: 'pointer' }}
              >
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

    </NotificationsContainer>
  );
}