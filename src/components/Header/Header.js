import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import {FaTelegramPlane} from 'react-icons/fa';
import {CgMail} from 'react-icons/cg';

import {HeaderContainer, Div1, Div2, Div3, NavLink, SocialIcons} from './HeaderStyles';

const Header = () => {
  const { route } = useRouter();
  // const urlRoute = route.replace(/^\/|\/$/g, '')

  return (
    <HeaderContainer sticky>
      {route === '/' ? (
        <Div1>
          <span style={{display: 'flex', alignItems: 'center'}}>
            @Infvyr
          </span>
        </Div1>
      ) : (
        <Div1>
          <Link href='/'>
            <a style={{display: 'flex', alignItems: 'center'}}>
              @Infvyr
            </a>
          </Link>
        </Div1>
      )
      }
      <Div2>
        <li>
          <Link href={route === '/all-projects' ? "/#about" : '#about'}>
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href={route === '/all-projects' ? "/#tech" : '#tech'}>
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Infvyr" target="_blank" title="Access my github profile">
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/vasile-novatchii" target="_blank" title="Contact me on linkedin">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://t.me/infvyr" target="_blank" title="Contact me on telegram: @infvyr">
          <FaTelegramPlane size="3rem"/>
        </SocialIcons>
        <SocialIcons href="mailto:vnovatchi@gmail.com?subject=Email from Portfolio" target="_blank"
                     title="Send directly an email">
          <CgMail size="3rem"/>
        </SocialIcons>
      </Div3>
    </HeaderContainer>
  )
};

export default Header;
