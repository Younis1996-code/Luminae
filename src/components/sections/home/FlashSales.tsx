"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import FlashSalesCard from "@/components/cards/FlashSalesCard";
import Heading from "@/components/shared/Typograpgy/Heading";
import Button from "@/components/ui/Button";
import { useEffect, useState } from "react";
import ContainerX from "@/components/shared/Containers/ContainerX";
import { useRouter } from "next/navigation"; // 👈 import router

export default function FlashSalesSection() {
  const router = useRouter(); // 👈 initialize router
  const { items: flashSales } = useSelector(
    (state: RootState) => state.flashSales
  );

  const [isSmallScreen, setIsSmallScreen] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");
    setIsSmallScreen(mediaQuery.matches);

    const handleResize = () => setIsSmallScreen(mediaQuery.matches);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const initialLimit = isSmallScreen ? 2 : 4;
  const displayedItems = flashSales.slice(0, initialLimit);
  const shouldShowButton = flashSales.length > initialLimit;

  return (
    <ContainerX>
      <section className="flex flex-col space-y-12">
        <div className="flex justify-between items-center">
          <Heading level={3} size="h28" weight="medium" lineH="lh20">
            Flash Sales
          </Heading>

          {shouldShowButton && (
            <Button onClick={() => router.push("/flash-sales")} >View More</Button>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayedItems.map((item) => (
            <FlashSalesCard
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              rating={item.rating}
              newPrice={item.newPrice}
              oldPrice={item.oldPrice}
              time = {item.time}
            />
          ))}
        </div>
      </section>
    </ContainerX>
  );
}
