import styled from 'styled-components';

export const NotificationsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  /* CONTAINER DAS ABAS */
  .tab-container {
    display: flex;            
    background-color: #fff;
    border: 2px solid #000;
    border-radius: 40px;      
    width: 50%;
    height: 80px;
    position: relative; 
    z-index: 1;
    gap: 10px;
    margin-bottom: 30px;
  }

  .tab-button {
    flex: 1;      
    height: 100%;    
    padding: 30px 10px;         
    background: transparent;  
    border-radius: 40px;
    outline: 2px solid transparent; 
    border: none; 
    box-shadow: 0px 0px #000;     
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    font-weight: 500;
    color: #000;
    cursor: pointer;
    position: relative; 
    overflow: hidden;  
    isolation: isolate; 
    transition: transform 0.1s ease-in, outline 0.15s cubic-bezier(1, 0.00, 1, 1), box-shadow 0.1s ease-in, background 0.15s cubic-bezier(1, 0.00, 0.94, 1);
  }

  /* LÓGICA DE HOVER NEO-BRUTALISTA */
  .tab-button.sistema:not(.active):hover {
    background-color: #e0c528;
    outline: 2px solid #000;
    transform: translate(-4px, -4px); 
    box-shadow: 4px 6px 0px #000;     
    transition: transform 0.1s ease-out, box-shadow 0.1s ease-out;
    z-index: 3; 
  }

  .tab-button.adocao:not(.active):hover {
    background-color: #bd4bbd;
    outline: 2px solid #000;
    transform: translate(0px, -4px);  
    box-shadow: 0px 6px 0px #000;     
    transition: transform 0.1s ease-out, box-shadow 0.1s ease-out;
    z-index: 3;
  }

  .tab-button.conversas:not(.active):hover {
    background-color: #39c442;
    outline: 2px solid #000;
    transform: translate(4px, -4px);  
    box-shadow: -4px 6px 0px #000;    
    transition: transform 0.1s ease-out, box-shadow 0.1s ease-out;
    z-index: 3;
  }

  /* LÓGICA DE ATIVO NEO-BRUTALISTA */
  .tab-button.sistema.active { background-color: #e0c528; outline: 2px solid #000; transform: translate(0px, 0px); box-shadow: 0px 0px 0px #000; z-index: 2; transition: background-color 0.15s ease-out, outline 0.1s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s cubic-bezier(0.34, 1.56, 0.64, 1); }
  .tab-button.adocao.active { background-color: #bd4bbd; outline: 2px solid #000; transform: translate(0px, 0px); box-shadow: 0px 0px 0px #000; z-index: 2; transition: background-color 0.15s ease-out, outline 0.1s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s cubic-bezier(0.34, 1.56, 0.64, 1); }
  .tab-button.conversas.active { background-color: #39c442; outline: 2px solid #000; transform: translate(0px, 0px); box-shadow: 0px 0px 0px #000; z-index: 2; transition: background-color 0.15s ease-out, outline 0.1s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s cubic-bezier(0.34, 1.56, 0.64, 1); }

  /* CONTAINER PRINCIPAL BRANCO */
  .content-container {
    background-color: #fff;
    width: 100%;
    flex-grow: 1; 
    border-radius: 20px 20px 0 0;
    border: 2px solid #000;
    border-bottom: none;
    padding: 40px;
  }

  .section-title {
    text-align: center;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 40px;
    color: #000;
  }

  /* LÓGICA DE ABAS (CONTEÚDO) */
  .tab-content {
    display: none; 
    animation: fadeIn 0.3s ease-in-out;
  }

  .tab-content.active {
    display: block; 
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* CÍRCULOS E LISTAS */
  .content-header {
    display: flex;
    align-items: center;
    padding-bottom: 15px;
    border-bottom: 1px solid #000;
    margin-bottom: 15px;
  }

  .circle { width: 24px; height: 24px; border-radius: 50%; border: 2px solid #000; margin-right: 15px; }
  .circle-sistema { background-color: #f7e06a; }
  .circle-adocao { background-color: #d195d1; }
  .circle-conversas { background-color: #39c442; }

  .content-header h3 { flex: 1; font-size: 20px; font-weight: 500; color: #000; }
  .chevron { display: flex; align-items: center; cursor: pointer; }

  /* ITENS NOTIFICAÇÃO */
  .notification-item { padding: 12px 0; border-bottom: 1px solid #ccc; }
  .notification-item:last-child { border-bottom: none; }
  .notification-item h4 { font-size: 16px; font-weight: 600; color: #000; margin-bottom: 4px; }
  .notification-item p { font-size: 14px; color: #888; font-weight: 500; }
`;