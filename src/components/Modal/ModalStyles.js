import styled from "styled-components";

export const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    // zIndex                : '22',
    maxWidth              : '80vw',
    width                 : '100%',
    // height                : '45vh',
    borderRadius          : '0',
    borderWidth           : '1px',
    backgroundColor       : 'transparent',

  }
};

export const StyledModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledModalTitle = styled.h3`
  background: none;
  -webkit-text-fill-color: unset;
`

export const StyledModalCloseButton = styled.button`
  background-image: none;
  background-color: transparent;
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
  height: 40px;
  font-size: 3rem;
  padding: 0;
  display: block;
  text-align: center;
  line-height: 48px;
  border-left-width: 1px;
  border-bottom-width: 1px;
  border-style: solid;
  
  svg{
    margin-left: 2px;
    fill: ${props => props.theme.colors.primary1};
  }
`

export const StyledModalBody = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
`