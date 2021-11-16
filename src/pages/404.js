import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { motion } from "framer-motion";
import {
  Section,
  PageTitle,
  SectionSubText
} from '../styles/GlobalComponents/'

import styled from 'styled-components'

const StyledLink = styled.a`
  margin-left: 5px;
  cursor: pointer;
  text-decoration: underline 0.15em rgba(255, 255, 255, 0);
  text-underline-offset: 0.2em;
  transition: text-decoration-color 300ms, text-underline-offset 300ms;
  
  &:hover{
    text-decoration-color: ${props => props.theme.colors.primary1};
    text-underline-offset: 0.4em;
  }
`;

const container = {
  hidden: { opacity: 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
      duration: 2.5,
      delayChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

const NotFound = () => {

  return (
    <Section style={{minHeight: '100vh', justifyContent: 'center', alignItems: 'center'}}>
      <motion.figure
        style={{marginBottom: '2em'}}
        animate={{ scale: 1.25 }}
        transition={{ type: "tween", stiffness: 100, delay: 0.15 }}>
        <Image src='/broken-mug.png' width="400" height="400" alt='broken-mug' />
      </motion.figure>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{textAlign: 'center'}}>
        <PageTitle variants={item}>This Page is Broken</PageTitle>
        <SectionSubText variants={item}>
          Return to home page?
          <Link href='/'>
            <StyledLink
              title="Go to home page">
              Go back home
            </StyledLink>
          </Link>
        </SectionSubText>
      </motion.div>
    </Section>
  )
};

export default NotFound;
