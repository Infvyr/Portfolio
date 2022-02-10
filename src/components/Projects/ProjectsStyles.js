import styled from "styled-components";
import { motion } from "framer-motion";

export const GridContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(100% / 4), 1fr));
  padding: 3rem 0;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    grid-template-columns: repeat(auto-fill, minmax(calc(100% / 3), 1fr));
  }
`;
