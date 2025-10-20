import FooterList from "@/components/shared/FooterList"
import ContainerX from "../../components/shared/Containers/ContainerX"
import { footerLists } from "@/data/footerData"
import FooterCard from "@/components/cards/FooterCard"
const Footer = () => {
  const firstLists = footerLists.slice(0,2)
  const secondLists = footerLists.slice(2,4)
  return (
    <section className="relative flex flex-col w-full md:mt-[162px]">
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
      <div className="px-5 md:px-22.5 bg-white">     
      </div>
    </section>

  )
}

export default Footer
