"use client";
import Paragraph from "../shared/Typograpgy/Paragraph";

type DateBoxProps = {
  hours: number;
  minutes: number;
  seconds: number;
};

const DateBox = ({ hours, minutes, seconds }: DateBoxProps) => {
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
            {format(hours)}
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
            {format(minutes)}{" "}
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
            {format(seconds)}{" "}
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