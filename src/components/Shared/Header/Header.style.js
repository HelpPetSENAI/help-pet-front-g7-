import styled from 'styled-components';

export const MainHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between; 
  align-items: center;              
  padding: 0 40px 30px 40px;     
  box-sizing: border-box;
`;

export const LogoImg = styled.img`
  height: 45px;
  width: auto;
`;

export const BackButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  transition: transform 0.2s ease-out;

  &:hover {
    transform: translateX(-5px); 
  }
`;