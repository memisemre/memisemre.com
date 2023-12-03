import { BsTerminal } from "react-icons/bs";
import { ActivitiesWrapper, ActivitiesItem } from "./style";
const Activities = () => {
  return (
    <ActivitiesWrapper>
      <ActivitiesItem>Activities</ActivitiesItem>
      <ActivitiesItem>
        <BsTerminal />
        <p>Terminal</p>
      </ActivitiesItem>
    </ActivitiesWrapper>
  );
};

export default Activities;
