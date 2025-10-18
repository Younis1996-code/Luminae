"use client";
import { useEffect, useState } from "react";
import Paragraph from "../shared/Typograpgy/Paragraph";

type DateBoxProps = {
  hours: number;
  minutes: number;
  seconds: number;
};

const DateBox = ({ hours, minutes, seconds }: DateBoxProps) => {
  const [time, setTime] = useState({ hours, minutes, seconds });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;

        if (hours === 0 && minutes === 0 && seconds === 0) {
          return { hours, minutes, seconds };
        }

        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [hours, minutes, seconds]);

  const format = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-3 text-center">
        <div>
          <Paragraph
            className="text-Grey-800"
            size="p18"
            weight="extrabold"
            lineH="lh30"
          >
            {format(time.hours)}
          </Paragraph>
          <Paragraph
            className="text-Grey-400"
            size="p12"
            weight="medium"
            lineH="lh30"
          >
            hour
          </Paragraph>
        </div>
        <Paragraph
          className="text-Grey-300"
          size="p24"
          weight="extrabold"
          lineH="lh30"
        >
          :{" "}
        </Paragraph>
        <div>
          <Paragraph
            className="text-Grey-800"
            size="p18"
            weight="extrabold"
            lineH="lh30"
          >
            {format(time.minutes)}{" "}
          </Paragraph>
          <Paragraph
            className="text-Grey-400"
            size="p12"
            weight="medium"
            lineH="lh30"
          >
            min{" "}
          </Paragraph>
        </div>
        <Paragraph
          className="text-Grey-300"
          size="p24"
          weight="extrabold"
          lineH="lh30"
        >
          :{" "}
        </Paragraph>
        <div>
          <Paragraph
            className="text-Grey-800"
            size="p18"
            weight="extrabold"
            lineH="lh30"
          >
            {format(time.seconds)}{" "}
          </Paragraph>
          <Paragraph
            className="text-Grey-400"
            size="p12"
            weight="medium"
            lineH="lh30"
          >
            sec{" "}
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default DateBox;
