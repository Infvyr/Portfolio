import styled from 'styled-components';

export const ImgContainer = styled.figure`
  margin: 0;
  position: relative;
  overflow: hidden;
`

export const Picture = styled.picture`
  display: block;
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
`

export const PictureImg = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  aspect-ratio: 3 / 2;
`

export const TitleContent = styled.div`
  padding: 0 15px;
  z-index: 20;
  width: 100%;
  font-size: 1.75rem;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: ${props => props.theme.colors.primary1};
  background: none;
  padding: 2rem 0 .5rem;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
  -webkit-text-fill-color: unset;
  -webkit-background-clip: unset;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 15px;
  line-height: 24px;
`;

export const ExternalLinks = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 1.6rem;
  padding: .75rem 1rem;
  background-image: linear-gradient(270deg,${props => props.theme.colors.background2} 0%, ${props => props.theme.colors.accent1} 100%);
  color: #fefefe;
  transition-duration: 0.3s;
  transition-property: background-image;

  &:hover {
    background-image: linear-gradient(270deg, ${props => props.theme.colors.accent1} 0%, ${props => props.theme.colors.background2} 100%);
  }
  
  &.link-to{
    margin: auto;
    min-height: 40px;
    max-width: 160px;
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 15px;
`

export const Tag = styled.li`
  font-size: 1.5rem;
  opacity: 0.75;
  text-decoration: underline;
`

export const Button = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background-image: none;
  background-color: transparent;
  transition: background-color 300ms ease-in-out;
  
  svg{
    opacity: 0;
    visibility: hidden;
    transform: scale(0.15);
    transition: transform 300ms ease-in-out,
                opacity 300ms ease-in-out,
                visibility 300ms ease-in-out;
  }
  
  &:hover{
    background-image: none;
    background-color: rgba(0,0,0, .25);
    
    svg{
      opacity: 1;
      visibility: visible;
      transform: scale(1);
    }
  }
`

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin-right: auto;
  margin-top: .5rem;
  margin-bottom: 2rem;
  border: 0;
  background: linear-gradient(121.57deg, ${props => props.theme.colors.button} 18.77%, ${props => props.theme.colors.accent1} 60.15%);
`;