import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import WebsiteTheme from "./WebsiteTheme";

const WebsiteProvider = ({ children }) => {
  return (
    <ThemeProvider theme={WebsiteTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default WebsiteProvider;
