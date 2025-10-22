"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Heading from "@/components/shared/Typograpgy/Heading";
import Button from "@/components/ui/Button";
import ContainerX from "@/components/shared/Containers/ContainerX";
import { useRouter } from "next/navigation";
import MostTrendingCard from "@/components/cards/MostTrendingCard";
const Trending = () => {
      const router = useRouter();
      const { items: trending } = useSelector(
        (state: RootState) => state.trending
      );

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
            <Button onClick={() => router.push("/flash-sales")}>
              View More
            </Button>
          )}
        </div>

        <div
          className="
          flex gap-5 p-1 overflow-x-auto scrollbar-hide scroll-smooth
          sm:grid sm:grid-cols-2 
          lg:grid-cols-3
        "
        >
          {" "}
          {displayedItems.map((item) => (
            <MostTrendingCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              imageSrc={item.imageSrc}
              price={item.price}
            />
          ))}
        </div>
      </section>
    </ContainerX>
  );
};

export default Trending;
