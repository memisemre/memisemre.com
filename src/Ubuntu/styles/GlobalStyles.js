import { createGlobalStyle } from "styled-components";
import UbuntuTheme from "./UbuntuTheme";

const _ = UbuntuTheme;

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${_.fontFamily.join(" , ")};
    color: ${_.colors.primary}
  }
`;

export default GlobalStyles;
