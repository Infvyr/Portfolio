import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.75rem;

  @media ${(props) => props.theme.breakpoints.xs} {
    gap: 1rem;
  }
`;

export const FilterHeading = styled.h3`
  margin: 2rem 0;
  text-align: left;
`;

export const Button = styled.button`
  background-image: none;
  color: ${(props) => props.theme.colors.primary1};
  background-color: ${(props) => props.theme.colors.filterBtnBgColor};
  border: 1px solid transparent;

  &:hover {
    background-image: none;
  }

  &.active {
    border-color: inherit;
  }

  svg {
    fill: ${(props) => props.theme.colors.primary1};
  }

  @media ${(props) => props.theme.breakpoints.xs} {
    width: 100%;
    justify-content: center;
  }
`;
