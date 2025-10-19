import Person from "@/components/ui/svg/Person";
import React from "react";
import Paragraph from "../Typograpgy/Paragraph";

const SignBtn = ({ aside }: { aside?: boolean }) => {
  return (
    <div className={`flex items-center gap-1 ${aside ? "p-3" : ""}`}>
      <div className={aside ? "" : "text-White"}>
        <Person />
      </div>
      <Paragraph
        size="p14"
        weight="normal"
        lineH="lh20"
        className={aside ? "" : "text-White"}
      >
        Sign in
      </Paragraph>
    </div>
  );
};

export default SignBtn;
