import { WelcomePageWrapper, ClickText } from "./style";
import useCurrentDate from "../../../hooks/currentDate/useCurrentDate";
const WelcomePage = ({ isClicked }) => {
  const currentDate = useCurrentDate();
  return (
    <WelcomePageWrapper clicked={isClicked}>
      <h1>
        {currentDate.HOUR}:{currentDate.MINUTE}
      </h1>
      <p>
        {currentDate.MONTH} {currentDate.DAY}
      </p>
      <ClickText>Click or press a key to unlock</ClickText>
    </WelcomePageWrapper>
  );
};

export default WelcomePage;
