import DateDisplay from "./DateDisplay";
import { TopBarWrapper } from "./style";
import Activities from "./Activities";
import UserControls from "./UserControls";

const TopBar = () => {
  return (
    <TopBarWrapper>
      <Activities />
      <DateDisplay />
      <UserControls />
    </TopBarWrapper>
  );
};

export default TopBar;
