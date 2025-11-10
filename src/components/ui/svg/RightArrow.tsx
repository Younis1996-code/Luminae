type IconProps = {
  className?: string;
  hoverClassName?: string;
  color?: string;
};

export function LongRightArrow({
  className = "",
  hoverClassName = "",
  color = "#999999",
}: IconProps) {
  return (
    <svg
      width="21"
      height="24"
      viewBox="0 0 21 24"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${hoverClassName}`}
    >
      <path
        d="M11 8L15 12M15 12L11 16M15 12L3 12"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
