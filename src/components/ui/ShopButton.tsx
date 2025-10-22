"use client";
type ShopButtonProps = {
  price: number;
  onClick: () => void;
};
const ShopButton = ({ price, onClick }: ShopButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 border border-gray-200 text-white rounded-lg text-[2.92887vw] md:text-[1.41271vw] lg:text-[1.1666vw] xl:text-[0.97222vw]"
    >
      <span className="font-normal">${price}</span>
      {" "}
      <span className="font-bold">Shop Now</span>
    </button>
  );
};

export default ShopButton
