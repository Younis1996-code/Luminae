import ContainerX from "@/components/shared/Containers/ContainerX"
import AdsSlider from "@/components/ui/Slider/AdsSlider"
import { homeBannerData } from "@/data/homeBannerData"
const HomeBanner = () => {
  return (
    <ContainerX className="bg-Pink-ligh mt-[68px] mb-[29px] hidden md:flex">
      <AdsSlider data={homeBannerData}/>
    </ContainerX>
  )
}

export default HomeBanner
