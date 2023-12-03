import { ThemeProvider } from "styled-components";
import UbuntuTheme from "./UbuntuTheme";
import GlobalStyles from "./GlobalStyles";
import { Background } from "./styles";

const UbuntuProvider = ({ children }) => {
  return (
    <ThemeProvider theme={UbuntuTheme}>
      <Background>
        <GlobalStyles />
        {children}
      </Background>
    </ThemeProvider>
  );
};

export default UbuntuProvider;
