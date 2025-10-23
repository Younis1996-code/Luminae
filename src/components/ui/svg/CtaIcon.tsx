import React from "react";

interface CtaIconProps extends React.SVGProps<SVGSVGElement> {
  strokeColor?: string;     
  hoverColor?: string;
}

const CtaIcon: React.FC<CtaIconProps> = ({
  strokeColor = "white",
  hoverColor = "#00b4d8",
  className = "",
  ...props
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-colors duration-300 ${className}`}
      {...props}
    >
      <g
        stroke={strokeColor}
        className="group-hover:stroke-[var(--hover-color)]"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.5 2V6" />
        <path d="M14.5 4L10.5 4" />
        <path d="M4.5 10V16.7639C4.5 17.5215 4.928 18.214 5.60557 18.5528L11.6056 21.5528C12.1686 21.8343 12.8314 21.8343 13.3944 21.5528L19.3944 18.5528C20.072 18.214 20.5 17.5215 20.5 16.7639V10" />
        <path d="M18.5 5L20.5 6L12.5 10L4.5 6L6.5 5" />
        <path d="M20.5 6L12.5 10L14.5 13L22.5 9L20.5 6Z" />
        <path d="M4.5 6L12.5 10L10.5 13L2.5 9L4.5 6Z" />
      </g>

      {/* Inline hover style */}
      <style jsx>{`
        svg:hover g {
          stroke: ${hoverColor};
        }
      `}</style>
    </svg>
  );
};

export default CtaIcon;
