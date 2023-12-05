import { useState, useEffect } from "react";
import { formattedDate } from "./formattedDate";
const useCurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(formattedDate(new Date()));

  useEffect(() => {
    const dataInterval = setInterval(() => {
      setCurrentDate(formattedDate(new Date()));
    }, 1000);
    return () => clearInterval(dataInterval);
  }, []);

  return currentDate;
};

export default useCurrentDate;
