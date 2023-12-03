import MenuIcon from "../MenuIcon";
import { SideBarContainer, SideBarItem } from "./style";
import { PiGear } from "react-icons/pi";
import { FaFirefox } from "react-icons/fa";
import { SiThunderbird } from "react-icons/si";
import { IoTerminal } from "react-icons/io5";

const SideBar = () => {
  return (
    <SideBarContainer>
      <div>
        <SideBarItem>
          <PiGear />
        </SideBarItem>
        <SideBarItem>
          <FaFirefox />
        </SideBarItem>
        <SideBarItem>
          <SiThunderbird />
        </SideBarItem>
        <SideBarItem active={true}>
          <IoTerminal />
        </SideBarItem>
      </div>
      <MenuIcon />
    </SideBarContainer>
  );
};

export default SideBar;
