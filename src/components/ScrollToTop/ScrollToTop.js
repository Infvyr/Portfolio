import React, { useEffect, useState } from "react";
import {motion} from "framer-motion";
import {ScrollToTopButton, ScrollToTopWrapper} from "./ScrollToTopStyles";
import {BiArrowToTop} from "react-icons/bi";

const variants = {
  hidden: { scale: 0, opacity: 0, x: 0, y: 150 },
  enter: { scale: 1, opacity: 1, x: 0, y: 0 },
  exit: { scale: 0, opacity: 0, x: 0, y: 150 },
}

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
      <ScrollToTopWrapper>
      {isVisible && (
          <motion.div
              initial="hidden"
              animate="enter"
              // exit="exit"
              variants={variants}
              transition={{ type: 'spring', duration: 0.8 }}
          >
            <ScrollToTopButton onClick={scrollToTop} aria-label='Scroll to top' type="button">
              <BiArrowToTop size="3rem"/>
            </ScrollToTopButton>
          </motion.div>
      )}
      </ScrollToTopWrapper>
  );
}