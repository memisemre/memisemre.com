import { useEffect } from "react";
import { DateDisplayWrapper, DateDisplayText } from "./style";
import { useState } from "react";
import { formattedDate } from "./utils";

const DateDisplay = () => {
  const [currentDate, setCurrentDate] = useState(formattedDate(new Date()));

  useEffect(() => {
    const dataInterval = setInterval(() => {
      setCurrentDate(formattedDate(new Date()));
    }, 1000);
    return () => clearInterval(dataInterval);
  }, []);

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
