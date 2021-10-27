import React from 'react';
import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';

import {SocialIcons} from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer
} from './FooterStyles';
import {FaTelegramPlane} from "react-icons/fa";
import {CgMail} from "react-icons/cg";

const Footer = () => {
  return (
    <FooterWrapper>
      {/*<LinkList>*/}
      {/*  <LinkColumn>*/}
      {/*    <LinkTitle>Call</LinkTitle>*/}
      {/*    <LinkItem href="tel:314-343-3432">314-343-3432</LinkItem>*/}
      {/*  </LinkColumn>*/}
      {/*  <LinkColumn>*/}
      {/*    <LinkTitle>Email</LinkTitle>*/}
      {/*    <LinkItem href="mailto:,mail@atmail.com">*/}
      {/*      mail@atmail.com*/}
      {/*    </LinkItem>*/}
      {/*  </LinkColumn>*/}
      {/*</LinkList>*/}
      <SocialIconsContainer>
        {/*<CompanyContainer>*/}
        {/*  <Slogan>Innovating one project at a time</Slogan>*/}
        {/*</CompanyContainer>*/}
        <SocialContainer>
          <SocialIcons href="https://github.com/Infvyr" target="_blank" title="Access my github profile">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/vasile-novatchii" target="_blank" title="Contact me on linkedin">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://t.me/infvyr" target="_blank" title="Contact me on telegram: @infvyr">
            <FaTelegramPlane size="3rem"/>
          </SocialIcons>
          <SocialIcons href="mailto:vnovatchi@gmail.com?subject=Email from Portfolio" target="_blank" title="Send directly an email">
            <CgMail size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
