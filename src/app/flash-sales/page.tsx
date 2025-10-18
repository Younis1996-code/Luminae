"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import FlashSalesCard from "@/components/cards/FlashSalesCard";
import Heading from "@/components/shared/Typograpgy/Heading";
import ContainerX from "@/components/shared/Containers/ContainerX";
import { useRouter } from "next/navigation";
import  Button  from "@/components/ui/Button"; // if you have a button component

export default function FlashSalesPage() {
  const flashSales = useSelector((state: RootState) => state.flashSales.items);
  const router = useRouter();

  return (
    <ContainerX>
      <section className="flex flex-col space-y-12">
        <div className="flex justify-between items-center">
          <Heading level={3} size="h28" weight="medium" lineH="lh20">
            All Flash Sales
          </Heading>
          <Button onClick={() => router.push("/")}>
             Back to Home
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {flashSales.map((item) => (
            <FlashSalesCard
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              rating={item.rating}
              newPrice={item.newPrice}
              oldPrice={item.oldPrice}
              time ={item.time}
            />
          ))}
        </div>
      </section>
    </ContainerX>
  );
}
