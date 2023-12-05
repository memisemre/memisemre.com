import { DateDisplayWrapper, DateDisplayText } from "./style";
import useCurrentDate from "../../../../../hooks/currentDate/useCurrentDate";

const DateDisplay = () => {
  const currentDate = useCurrentDate();
  if (currentDate != null) {
    return (
      <DateDisplayWrapper>
        <DateDisplayText>
          {currentDate.MONTH} {currentDate.DAY} {currentDate.HOUR}:
          {currentDate.MINUTE}
        </DateDisplayText>
      </DateDisplayWrapper>
    );
  }
};

export default DateDisplay;
