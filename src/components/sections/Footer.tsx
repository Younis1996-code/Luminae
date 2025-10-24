import FooterList from "@/components/shared/Footer/FooterList"
import ContainerX from "../shared/Containers/ContainerX"
import { footerLists } from "@/data/footerData"
import FooterCard from "@/components/cards/FooterCard"
import { moneyProvidersLinks } from "@/data/footerData"
import Dropdown from "@/components/ui/Dropdown"
import { lang } from "@/components/shared/Navbar/LangCurBtns"
import Paragraph from "@/components/shared/Typograpgy/Paragraph"
import SocialLinks from "@/components/shared/Footer/SocialLinks"

const Footer = () => {
  const firstLists = footerLists.slice(0,2);
  const secondLists = footerLists.slice(2,4);
  return (
    <section className="relative flex flex-col w-full md:mt-[162px] pb-6">
      <FooterCard className="absolute left-1/2 -translate-1/2 hidden md:flex"/>
      <div className="bg-mBlue-100 flex flex-col lg:flex-row items-start justify-between
          pt-[60px] md:pt-[132px] pb-[60px] px-[17.782%] md:px-[29.272%] lg:px-[21.04166%] lg:gap-[15%]">
        <div className="flex items-start justify-between md:gap-[] mb-[50px] lg:mb-0 w-full lg:w-fit grow">
          {firstLists.map((list,idx)=>(
            <FooterList footerList={list} key={idx}/>
          ))}
        </div>
        <div className="flex items-start justify-between w-full lg:w-fit grow">
          {secondLists.map((list,idx)=>(
            <FooterList footerList={list} key={idx}/>
          ))}
        </div>
      </div>
      <ContainerX className="px-5 md:px-22.5 bg-white">     
          <div className="w-full flex items-center justify-center md:justify-between border-b-2 border-Grey-200 pt-6 pb-3">
            <div className="flex items-center gap-[25px]">
            {
              moneyProvidersLinks.map((link,idx)=>(
                <a href={link.linkTo} target="_blank" key={idx}>
                  <img 
                  src={link.svg}
                  alt={`${link.name}`}
                  className="grayscale "
                  />
                </a>
              ))
            }
            </div>
            <div className="hidden md:inline-block">
              <Dropdown data={lang} dropUp/>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-between w-full py-6 mt-3">
            <Paragraph size="p14" weight="normal" lineH="lh20" className="text-Grey-800">
              165-179 Forster Road City of Monash, Melbourne, Australia
            </Paragraph>
            <Paragraph size="p14" weight="normal" lineH="lh20" className="text-Grey-400">
              ©2023 Copyright in reserved for lumine shop
            </Paragraph>
            <SocialLinks className=''/>
          </div>
      </ContainerX>
    </section>

  )
}

export default Footer
