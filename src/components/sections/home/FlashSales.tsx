"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import FlashSalesCard from "@/components/ui/cards/FlashSalesCard";
import Heading from "@/components/shared/Typograpgy/Heading";
import Button from "@/components/ui/Button";
import ContainerX from "@/components/shared/Containers/ContainerX";
import { useRouter } from "next/navigation"; 

export default function FlashSalesSection() {
  const router = useRouter(); 
  const { items: flashSales } = useSelector(
    (state: RootState) => state.flashSales
  );

  const displayedItems = flashSales.slice(0, 4);
  const shouldShowButton = flashSales.length > 4;

  return (
    <ContainerX className="my-6 md:my-21">
      <section className="flex flex-col space-y-12">
        <div className="flex justify-between items-center">
          <Heading level={3} size="h28" weight="bold" lineH="lh20">
            Flash Sales
          </Heading>

          {shouldShowButton && (
            <Button onClick={() => router.push("/collection/flash-sales")}>
              View More
            </Button>
          )}
        </div>

        <div
          className="
          flex gap-5 p-1 overflow-x-auto scrollbar-hide scroll-smooth
          sm:grid sm:grid-cols-2 
          lg:grid-cols-3
          xl:grid-cols-4
        "
        >
          {" "}
          {displayedItems.map((item) => (
            <FlashSalesCard
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              rating={item.rating}
              newPrice={item.newPrice}
              oldPrice={item.oldPrice}
              time={item.time}
            />
          ))}
        </div>
      </section>
    </ContainerX>
  );
}