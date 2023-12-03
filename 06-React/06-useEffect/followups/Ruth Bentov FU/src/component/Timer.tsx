import React, { FC, useState, useEffect } from "react";

interface TimerProps {
  timeOut: number;
}

const Timer: FC<TimerProps> = ({ timeOut }) => {
  const [time, setTime] = useState(timeOut);

  useEffect(() => {
    const intervalTimeOut = setInterval(() => {
      if (time > 0) {
        setTime((prev) => prev - 1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalTimeOut);
    };
  }, [time]);

  return <div>Time to end: {time}</div>;
};

export default Timer;
