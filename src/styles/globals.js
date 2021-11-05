import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background-color: ${props => props.theme.colors.bodyBgColor};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6{
    background: linear-gradient(121.57deg, ${props => props.theme.colors.headingFirstGradientColor} 18.77%, ${props => props.theme.colors.accent1} 60.15%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    color: ${props => props.theme.colors.primary1};
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  button{
    display: inline-flex;
    align-items: center;
    font-size: 1.6rem;
    padding: .75rem 1rem;
    background-image: linear-gradient(270deg,${props => props.theme.colors.background2} 0%, ${props => props.theme.colors.accent1} 100%);
    color: #fefefe;
    border: 0;
    outline: 0;
    cursor: pointer;
    transition-duration: 0.3s;
    transition-property: background-image;

    &:hover {
      background-image: linear-gradient(270deg, ${props => props.theme.colors.accent1} 0%, ${props => props.theme.colors.background2} 100%);
    }
  }
  .ReactModal__Overlay{
    background-color: ${props => props.theme.colors.bodyBgColor} !important;
    z-index: 21;
  }
  .ReactModal__Content{
    @media screen and (orientation: portrait) and (max-width: 480px) {
      max-width: 95vw !important;
    }
  }
  .ReactModal__Body--open{
    overflow: hidden;
  }
  .image-gallery-icon{
    background-image: none !important;
    color: #fff !important;
  }
  .image-gallery-thumbnail{
    width: 80px;
  }
  .image-gallery-content:not(.fullscreen) .image-gallery-slide .image-gallery-image{
    max-height: calc(80vh - 80px);

    ${(props) => props.theme.breakpoints.md}{
      max-height: 100vh;
    }
  }
  .image-gallery-content.fullscreen .image-gallery-slide .image-gallery-image{
    max-height: 100vh;

    @media ${(props) => props.theme.breakpoints.sm} {
      height: 96vh;
    }
  }
  
  .project-card{
    display: grid;
    grid-template-rows: auto auto 1fr auto auto;
    padding-bottom: 2.5rem;
    height: 100%;
    background-color: ${props => props.theme.colors.bgContrast};
    box-shadow: 0 0 3px -1px ${props => props.theme.colors.shadow};

    @media ${(props) => props.theme.breakpoints.sm} {
      width: 100%;
      display: block;
    }
  }

`;

export default GlobalStyles;