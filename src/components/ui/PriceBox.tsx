import Paragraph from "../shared/Typograpgy/Paragraph";

type PriceBoxProps = {
  newPrice: number;
  oldPrice: number;
  plainDiscount?: boolean; 
};

const PriceBox = ({
  newPrice,
  oldPrice,
  plainDiscount = false,
}: PriceBoxProps) => {
  const discount = ((oldPrice - newPrice) / oldPrice) * 100;

  return (
    <div className="flex justify-between items-center space-x-1 font-bold w-fit">
      <Paragraph
        size="p14"
        className="text-Notification"
        weight="bold"
        lineH="lh20"
      >
        {newPrice}$
      </Paragraph>

      <Paragraph
        size="p12"
        className="text-Grey-600"
        weight="medium"
        lineH="lh20"
      >
        {oldPrice}$
      </Paragraph>

      <div
        className={`py-[3px] px-[6px] rounded-md ${
          plainDiscount
            ? "bg-transparent text-Notification"
            : "bg-Notification text-white"
        }`}
      >
        <Paragraph size="p10" className="whitespace-nowrap" weight="semibold">
          -{discount.toFixed(0)}%
        </Paragraph>
      </div>
    </div>
  );
};

export default PriceBox;
