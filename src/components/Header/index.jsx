import './style.css';
// import logo from '../../assets/images/logo.png'; 

export default function Header() {
  
  function goBack() {
    window.history.back();
  }

  return (
    <header className="main-header">
      <div className="logo-container">
        {/* <img src={logo} alt="Logo HelpPet" className="logo-img" /> */}
        <h1 className="logo-text-fallback">HelpPet</h1>
      </div>

      <button className="back-button" onClick={goBack} aria-label="Voltar">
        <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 24L8 16L18 8" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </header>
  );
}