import Heart from "@/components/ui/svg/Heart";
import React from "react";
import Paragraph from "../Typograpgy/Paragraph";

const FavBtn = ({ aside }: { aside?: boolean }) => {
  return (
    <div className={`flex items-center gap-1 ${aside ? "p-3" : ""}`}>
      <div className={aside ? "" : "text-White"}>
        <Heart />
      </div>
      <Paragraph
        size="p14"
        weight="normal"
        lineH="lh20"
        className={aside ? "" : "text-White"}
      >
        Favorites
      </Paragraph>
    </div>
  );
};

export default FavBtn;
