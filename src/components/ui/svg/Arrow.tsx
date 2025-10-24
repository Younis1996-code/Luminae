import { StarProp } from "@/components/icons/Star"


const Arrow = ({className, color, hoverClassName}:StarProp) => {
  return (
  <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" 
  className={`${className} ${hoverClassName}`}>
    <path d="M18.6667 9.33325L13.3334 15.9999L18.6667 22.6666" 
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="duration-300"/>
  </svg>
  )
}

export default Arrow
