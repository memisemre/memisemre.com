import SideBar from "./Components/SideBar";
import TopBar from "./Components/TopBar";
import { ContentWrapper } from "./style";
const Desktop = () => {
  return (
    <>
      <TopBar />
      <ContentWrapper>
        <SideBar />
      </ContentWrapper>
    </>
  );
};

export default Desktop;
