import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  body::-webkit-scrollbar {
    width: 1.5rem;               
    }
    
    body::-webkit-scrollbar-track {
    background: transparent;        
    }
    
    body::-webkit-scrollbar-thumb {
    background: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);   
    border-radius: 1rem;       
    border: 0.094rem solid transparent;  
    }
    
`;

export default GlobalStyles;