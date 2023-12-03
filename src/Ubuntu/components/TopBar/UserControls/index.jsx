import { UserControlsWrapper } from "./styles";
import { MdNetworkWifi } from "react-icons/md";
import { FaVolumeHigh, FaPowerOff } from "react-icons/fa6";

const UserControls = () => {
  return (
    <>
      <UserControlsWrapper>
        <MdNetworkWifi />
        <FaVolumeHigh />
        <FaPowerOff />
      </UserControlsWrapper>
    </>
  );
};
export default UserControls;
