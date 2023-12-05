import { useEffect } from "react";
import SideBar from "./Components/SideBar";
import TopBar from "./Components/TopBar";
import { ContentWrapper, DesktopWrapper } from "./style";
import { useState } from "react";
const Desktop = ({ isClicked }) => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 2000);
  }, [isClicked]);

  return (
    <DesktopWrapper display={display}>
      <TopBar />
      <ContentWrapper>
        <SideBar />
      </ContentWrapper>
    </DesktopWrapper>
  );
};

export default Desktop;
