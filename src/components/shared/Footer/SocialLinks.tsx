'use client'
import { socialLonks } from "@/components/shared/Navbar/Navbar"
import TransitionLink from "@/components/ui/TransitionLink"
interface Props{
  className:string
}
const SocialLinks = ({className}:Props) => {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
          {socialLonks.map((link, index) => (
            <TransitionLink
              key={index}
              href={link.link}
              className="text-Grey-300 hover:scale-150 duration-200"
            >
              {link.icon}
            </TransitionLink>
          ))}
    </div>
  )
}

export default SocialLinks
