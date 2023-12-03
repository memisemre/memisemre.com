import { ThemeProvider } from "styled-components";
import UbuntuTheme from "../UbuntuTheme";
import GlobalStyles from "./GlobalStyles";

const UbuntuProvider = ({ children }) => {
  return (
    <ThemeProvider theme={UbuntuTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default UbuntuProvider;
