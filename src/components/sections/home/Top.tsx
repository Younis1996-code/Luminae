"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import TopCard from "@/components/ui/cards/TopCard";
import Heading from "@/components/shared/Typograpgy/Heading";
import Button from "@/components/ui/Button";
import ContainerX from "@/components/shared/Containers/ContainerX";
import { useRouter } from "next/navigation";

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
            <Button onClick={() => router.push("/collection/top-100")}>
              View More
            </Button>
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
            <TopCard
              key={item.id}
              id={item.id}
              brand={item.brand}
              title={item.title}
              image={item.image}
              reviews={item.reviews}
              price={item.price}
              oldPrice={item.oldPrice}
              isFavorite={item.isFavorite}
            />
          ))}
        </div>
      </section>
    </ContainerX>
  );
};

export default Top;
