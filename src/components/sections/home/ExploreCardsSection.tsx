import ContainerX from "@/components/shared/Containers/ContainerX";
import ExploreCard from "@/components/shared/ExploreCard";
import { exploreCardsData } from "@/data/ExploreCardsData"

interface Props{
  topSection:boolean;
}

const ExploreCardsSection = ({topSection}:Props) => {
  const filtered = exploreCardsData.filter((dat)=>
    topSection ? 
    dat.color == 'red' || dat.color == 'darkGreen'
    :
    dat.color !== "red" && dat.color !== "darkGreen"
  )

  const data = topSection ? filtered : filtered.slice().reverse()

  return (
    <ContainerX>
    <div className={`w-full hidden md:flex items-stretch justify-between gap-5`}>
      {data.map((card)=>(
        <ExploreCard
        className={`grow w-1/2 ${!topSection ? "scale-y-[80%]" : ''}`}
        color={card.color}
        desc={card.desc}
        img={card.img}
        title={card.title}
        category={card.category}
        key={card.title}
        />
      ))}
    </div>
    </ContainerX>

  )
}

export default ExploreCardsSection
