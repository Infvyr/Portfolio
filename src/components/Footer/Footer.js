import React from 'react';
import {
  FooterWrapper,
  SocialIconsContainer
} from './FooterStyles';
import SocialMedia from "../SocialMedia/SocialMedia.component";

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialIconsContainer>
        <SocialMedia inFooter/>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
