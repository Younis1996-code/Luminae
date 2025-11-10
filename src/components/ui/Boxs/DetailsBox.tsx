import Paragraph from "@/components/shared/Typograpgy/Paragraph";
import { ReactNode } from "react"

interface DetailsBoxProp {
    svg: ReactNode,
    text: string
}
const DetailsBox = ({ svg, text }: DetailsBoxProp) => {
  return (
    <div className="flex items-center space-x-1">
      {svg}
      <Paragraph size="p12" weight="medium" lineH="lh20" className="text-white">
        {text}
      </Paragraph>
    </div>
  );
};

export default DetailsBox
