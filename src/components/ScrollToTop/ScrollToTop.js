import React, { useEffect, useState } from "react";
import {ScrollToTopButton, ScrollToTopWrapper} from "./ScrollToTopStyles";
import {BiArrowToTop} from "react-icons/bi";

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
    <ScrollToTopWrapper animation>
      {isVisible && (
        <ScrollToTopButton onClick={scrollToTop} aria-label='Scroll to top' type="button">
          <BiArrowToTop size="3rem"/>
        </ScrollToTopButton>
      )}
    </ScrollToTopWrapper>
  );
}