import Paragraph from "../shared/Typograpgy/Paragraph";

type PriceBoxProp = {
    newPrice: number;
    oldPrice: number;
}
const PriceBox = ({ newPrice, oldPrice }: PriceBoxProp) => {
      const discount = ((oldPrice - newPrice) / oldPrice) * 100;

  return (
    <div className="flex justify-between items-center space-x-1 font-bold">
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

      <div className="py-[3px] px-[6px] bg-Notification rounded-md">
        <Paragraph size="p10" className="text-white whitespace-nowrap" weight="semibold">
          - {discount.toFixed(0)}%
        </Paragraph>
      </div>
    </div>
  );
};

export default PriceBox
