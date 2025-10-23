import { StarProp } from "./Star"



const SendIcon = ({
    className = "w-4 h-4", // default size if none provided
  hoverClassName = "",
  color = "#999999",
 } :StarProp ) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${hoverClassName}`}>
    <path d="M12.9262 2L3.07388 2C1.55947 2 0.770188 3.75699 1.79738 4.84156L3.85704 7.01627C4.15326 7.32903 4.31774 7.73905 4.31774 8.16469V12.3035C4.31774 13.9157 6.41068 14.6156 7.42619 13.343L14.2974 4.73263C15.1849 3.62047 14.3718 2 12.9262 2Z" 
    stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    className="transition-colors duration-150"
    />
    </svg>
  )
}

export default SendIcon
