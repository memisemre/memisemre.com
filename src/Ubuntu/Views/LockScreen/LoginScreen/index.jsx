import { useEffect } from "react";
import { LoginScreenWrapper } from "./style";
import { useState } from "react";
const LoginScreen = ({ isClicked }) => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true);
    }, 2000);
  }, [isClicked]);

  return (
    <LoginScreenWrapper startAnimation={startAnimation}>
      <h1>Login Screen</h1>
    </LoginScreenWrapper>
  );
};
export default LoginScreen;
