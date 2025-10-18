type IconProps = {
  className?: string;
  hoverClassName?: string;
  color?: string;
};

export function RightArrow({
  className = "",
  hoverClassName = "",
  color = "#999999",
}: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${hoverClassName}`}
    >
      <path
        d="M6.6665 4.6665L9.33317 7.99984L6.6665 11.3332"
        stroke="#434343"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color}
      />
    </svg>
  );
}
