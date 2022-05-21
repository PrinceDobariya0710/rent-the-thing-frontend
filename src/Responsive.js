import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 450px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
  @media screen and (max-width: 800px ) and (min-width: 431px) { // Tablet
  ${props}
  }


  `;
};