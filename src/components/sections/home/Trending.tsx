"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Heading from "@/components/shared/Typograpgy/Heading";
import ContainerX from "@/components/shared/Containers/ContainerX";
import { useRouter } from "next/navigation";
import MostTrendingCard from "@/components/ui/cards/MostTrendingCard"; 
import TransitionLink from "@/components/ui/TransitionLink";
import { RightArrow } from "@/components/ui/svg/Arrow";
const Trending = () => {
  const router = useRouter();
  const { items: trending } = useSelector((state: RootState) => state.trending);

  const displayedItems = trending.slice(0, 3);
  const shouldShowButton = trending.length > 3;
  return (
    <ContainerX className="my-6 md:my-21">
      <section className="flex flex-col space-y-12">
        <div className="flex justify-between items-center">
          <Heading level={3} size="h28" weight="bold" lineH="lh20">
            Trending must-haves
          </Heading>

          {shouldShowButton && (
            <TransitionLink
              href="/collection/top-100"
              className="text-Grey-800 hover:text-mBlue-600 transition flex items-center text-[2.51046vw] md:text-[1.210898vw] lg:text-[1vw] xl:text-[0.83333vw]"
            >
              View More
              <RightArrow className="text-[3.76569vw] md:text-[1.816347vw] lg:text-[1.5vw] xl:text-[1.25vw] hover:text-mBlue-600 ml-1" />
            </TransitionLink>
          )}
        </div>

        <div
          className="
            flex gap-5 p-1 overflow-x-auto scrollbar-hide scroll-smooth
            md:grid md:grid-cols-1 xl:grid-cols-3
          "
        >
          {" "}
          {displayedItems.map((item) => (
            <MostTrendingCard key={item.id} {...item} />
          ))}
         
        </div>
      </section>
    </ContainerX>
  );
};

export default Trending;
