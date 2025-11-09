
type IconProps = {
  className?: string;
  color?: string;
};

const BlogHeartIcon = ({ className, color = "C4C4C4" }: IconProps) => {
  return (
    <div>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        className={`${className}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.2697 2.36816C9.73449 1.76942 9.02302 1.43994 8.26611 1.43994C7.50909 1.43994 6.87382 1.76942 6.33844 2.36816L5.99842 2.91127L5.65844 2.36816C5.12322 1.76942 4.48775 1.43994 3.73089 1.43994C2.97406 1.43994 2.26229 1.76942 1.72713 2.36816C0.622207 3.60434 0.622207 5.61564 1.72713 6.85134L5.68637 10.6565C5.7511 10.7292 5.83169 10.7737 5.91589 10.7908C5.94413 10.7971 5.97253 10.7999 6.00098 10.7999C6.11298 10.7999 6.22517 10.7522 6.31047 10.6565L10.2697 6.85134C11.3747 5.61564 11.3747 3.60434 10.2697 2.36816Z"
          fill="#C4C4C4"
        />
      </svg>
      
    </div>
  );
};

export default BlogHeartIcon;