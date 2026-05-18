import { MainHeader, LogoImg, BackButton } from './Header.style';
import logoSrc from '../../assets/images/helppet-logo.svg'; 
export default function Header() {
  return (
    <MainHeader>
      <BackButton onClick={() => console.log('Voltar!')}>
      </BackButton>

      <LogoImg src={logoSrc} alt="Logo Helppet" />
      <div style={{ width: '44px' }}></div> 
    </MainHeader>
  );
}