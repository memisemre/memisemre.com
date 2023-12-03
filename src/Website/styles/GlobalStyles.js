import { createGlobalStyle } from "styled-components";
import WebsiteTheme from "./WebsiteTheme";

const _ = WebsiteTheme;

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${_.fontFamily.join(" , ")};
    color: ${_.colors.primary};
  }
`;

export default GlobalStyles;
