import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }
    
    body {
        font-size: 1.6rem;
    }
    
    img {
        width: 100%;
    }

    .skip-link {
        position: absolute;
        left: -1000px;
        top: 0;
        z-index: 999;
        background: $secondaryColor;
        color: $black;
        text-decoration: none;
        padding: 2rem;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
    }
    
    .skip-link:focus {
        left: 0;
    }
`

export default GlobalStyle;