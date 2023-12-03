import { createGlobalStyle } from "styled-components";
import UbuntuTheme from "./UbuntuTheme";

const _ = UbuntuTheme;

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${_.fontFamily.join(" , ")};
    color: ${_.colors.primary}
  }
  p {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  /* Standard syntax for other browsers */
  display: -moz-box;
  -moz-box-orient: vertical;
  line-height: 1.5; /* Fallback for non-WebKit browsers */
}

`;

export default GlobalStyles;
