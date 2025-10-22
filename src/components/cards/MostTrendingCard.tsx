import Image from "next/image";

import Paragraph from "../shared/Typograpgy/Paragraph";

const MostTrendingCard = () => {
  return (
    <div>
      <div className="h-[437px]">
        <Image
          src="/trending3.png"
          alt="trend1"
          width={200}
          height={437}
          className="object-cover mt-4"
        />
      </div>

      <div className="flex flex-col p-5 bg-gray-800">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-3">
            <Paragraph
              size="p16"
              className="text-white"
              weight="bold"
              lineH="lh25"
            >
              Cool & Sexy Calvin Klein
            </Paragraph>
            <Paragraph
              size="p14"
              className="text-gray-300"
              weight="medium"
              lineH="lh20"
            >
              Dotted dress - Casual
            </Paragraph>
          </div>
          <button className="px-6 py-3 border border-gray-200 rounded-lg"></button>
        </div>
      </div>
    </div>
  );
};

export default MostTrendingCard;
