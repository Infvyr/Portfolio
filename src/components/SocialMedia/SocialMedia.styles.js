import styled from "styled-components";

export const SocialContainer = styled.div`
  display: flex;
  justify-content: ${props => props.inFooter ? 'center' : 'space-around'};
  align-items: center;
  gap: 1rem;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-column: ${props => props.inFooter ? null : '1 / -1'};
  }
  
  @media ${props => props.theme.breakpoints.md}{
    justify-content: center;
    padding-right: ${props => props.inFooter ? '16px' : null};
    flex-wrap: ${props => props.inFooter ? 'wrap' : null};
  }
`;

// Social Icons
export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: ${props => props.theme.colors.icons};
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: ${props => props.theme.colors.button};
    transform: scale(1.2);
    
    > svg{
      fill: white;
      stroke: white;
      
      path{
        fill: white;
      }
    }
    
    @media ${props => props.theme.breakpoints.sm} {
      background-color: transparent;
    }
  }

  svg{
    @media ${(props) => props.theme.breakpoints.sm} {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`