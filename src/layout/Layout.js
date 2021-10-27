import React from 'react';
import { motion } from 'framer-motion';

import {Container} from './LayoutStyles';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export const Layout = ({children}) => {
  return (
    <Container>
      <Header />
      <motion.main
        initial="hidden"
        animate='enter'
        exit="exit"
        variants={variants}
        transition={{ type: 'linear', duration: 0.8 }}
      >
        {children}
      </motion.main>
      <Footer />
      <ScrollToTop />
    </Container>
  )
}
