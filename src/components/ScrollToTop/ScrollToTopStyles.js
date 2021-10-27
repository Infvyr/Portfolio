import styled from 'styled-components';

export const ScrollToTopWrapper = styled.div`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  animation: ${(props) => props.animation ?
          'scaleIn' :
          'scaleOut'};

  @media ${(props) => props.theme.breakpoints.sm}{
    bottom: 1.5.rem;
    right: 1.5rem;
  }
`

export const ScrollToTopButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background-color: ${props => props.theme.colors.bodyBgColor};
  cursor: pointer;
  transition: background-color 300ms ease;
  
  &:hover{
    background-color: #fff;
  }
  
  > svg{
    @media ${(props) => props.theme.breakpoints.sm}{
      width: 2rem;
      height: 2rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm}{
    width: 3rem;
    height: 3rem;
  }
`