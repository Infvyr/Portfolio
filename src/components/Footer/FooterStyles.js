import styled from "styled-components"

export const FooterWrapper = styled.footer`
	width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 3rem 3.5rem 3rem;
  margin: 1rem auto;
  box-sizing: content-box;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media ${props => props.theme.breakpoints.sm} {
    padding: 2rem 1.6rem 2rem;
    width: calc(100vw - 32px);
  }
`

export const SocialIconsContainer = styled.div`
  max-width: 1040px;
`