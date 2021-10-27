import styled from 'styled-components';
import {IoIosArrowDropdown} from 'react-icons/io';

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 100px 1fr auto;
  grid-column-gap: 2rem;
  padding: 2rem 1rem;
  position: ${props => props.sticky ? "sticky" : null };
  top: ${props => props.sticky ? 0 : null };
  background-color: ${props => props.theme.colors.bodyBgColor};
  z-index: 21;

   @media ${(props) => props.theme.breakpoints.sm} {
     grid-template-columns: auto 1fr;
   }
`;

export const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  
  a, span{
    font-size: 2.5rem;
    font-weight: bold;
  
    @media ${(props) => props.theme.breakpoints.sm} {
      font-size: 1.5rem;
    }
  }
  
`;

export const Div2 = styled.ul`
  grid-column: 2 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    justify-content: flex-end;
  }
`;

export const Div3 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    justify-content: center;
    grid-column: 1 / -1;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: ${props => props.theme.colors.primary1};
  transition: 0.4s ease;
  
  &:hover {
    color: ${props => props.theme.colors.button};
    opacity: 1;
    cursor: pointer;
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
    font-size: 1.5rem;
  }
`;

// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
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