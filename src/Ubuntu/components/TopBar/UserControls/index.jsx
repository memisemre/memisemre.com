import { UserControlsWrapper, UserControlsInner } from "./styles";
import { MdNetworkWifi } from "react-icons/md";
import { FaVolumeHigh, FaPowerOff } from "react-icons/fa6";

const UserControls = () => {
  return (
    <UserControlsWrapper>
      <UserControlsInner>
        <MdNetworkWifi />
        <FaVolumeHigh />
        <FaPowerOff />
      </UserControlsInner>
    </UserControlsWrapper>
  );
};
export default UserControls;
