"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import TopCard from "@/components/ui/cards/TopCard";
import Heading from "@/components/shared/Typograpgy/Heading";
import ContainerX from "@/components/shared/Containers/ContainerX";
import { useRouter } from "next/navigation";
import TransitionLink from "@/components/ui/TransitionLink";
import { RightArrow } from "@/components/ui/svg/Arrow";

const Top = () => {
  const router = useRouter();
  const { items: top } = useSelector((state: RootState) => state.top);

  const displayedItems = top.slice(0, 4);
  const shouldShowButton = top.length > 4;

  return (
    <ContainerX className="my-6 md:my-21">
      <section className="flex flex-col space-y-12">
        <div className="flex justify-between items-center">
          <Heading level={3} size="h28" weight="bold" lineH="lh20">
            Top 100
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
            sm:grid sm:grid-cols-2 
            lg:grid-cols-4
          "
        >
          {displayedItems.map((item) => (
            <TopCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </ContainerX>
  );
};

export default Top;
