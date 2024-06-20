import { useMemo } from "react";
import Countdown, { CountdownRenderProps } from "react-countdown";

export const AppCountDown = ({ time }: { time: number }) => {
  const renderer = (countdownProps: CountdownRenderProps) => {
    const { hours, minutes, seconds, completed, days } = countdownProps;
    const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const paddedHours = hours < 10 ? `0${hours}` : hours;
    const paddedDays = days < 10 ? `0${days}` : days;

    if (completed) return null;
    return (
      <div className="box-time">
        <div className="mx-auto flex w-full justify-center   text-center">
          <div className="flex justify-center items-center gap-6">
            <div className="text-lg text-center">
              <div className="text-sm">DAY</div>
              <div className="text-2xl">{paddedDays}</div>
            </div>
            <div className="text-lg text-center">
              <div className="text-sm">HRS</div>
              <div className="text-2xl"> {paddedHours}</div>
            </div>

            <div className="text-lg text-center">
              <div className="text-sm">MINS</div>
              <div className="text-2xl"> {paddedMinutes}</div>
            </div>

            <div className="text-lg text-center">
              <div className="text-sm">SEC</div>
              <div className="text-2xl"> {paddedSeconds}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const dateTime = useMemo(() => {
    return Number(time) * 1000;
  }, [time]);

  return <Countdown date={dateTime} renderer={renderer}></Countdown>;
};
