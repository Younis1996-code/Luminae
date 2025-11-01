"use client";

import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import ContainerX from "@/components/shared/Containers/ContainerX";
import Heading from "@/components/shared/Typograpgy/Heading";

import MostTrendingCard from "@/components/cards/MostTrendingCard";
import FlashSalesCard from "@/components/cards/FlashSalesCard";
import TopCard from "@/components/cards/TopCard";

const CollectionPage = () => {
  const params = useParams<{ type: string }>();
  const type = params?.type ?? "";

  // ✅ Get data from Redux
  const trending = useSelector((state: RootState) => state.trending.items);
  const flashSales = useSelector((state: RootState) => state.flashSales.items);
  const top = useSelector((state: RootState) => state.top.items);

  // ✅ Dynamic collection mapping (using Redux data)
  const collections: Record<
    string,
    { data: any[]; Card: React.ComponentType<any> }
  > = {
    trending: {
      data: trending,
      Card: MostTrendingCard,
    },
    "flash-sales": {
      data: flashSales,
      Card: FlashSalesCard,
    },
    "top-100": {
      data: top,
      Card: TopCard,
    },
  };

  const config = collections[type];

  if (!config) {
    return (
      <ContainerX className="py-20 text-center">
        <Heading level={2} size="h28" weight="bold">
          Collection not found
        </Heading>
        <p className="text-gray-400 mt-4">
          The collection “{type}” doesn’t exist.
        </p>
      </ContainerX>
    );
  }

  const { data, Card } = config;

  return (
    <ContainerX className="pt-[25vh]">
      <Heading level={2} size="h32" weight="bold" className="mb-8 capitalize">
        {type.replace("-", " ")}
      </Heading>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </ContainerX>
  );
};

export default CollectionPage;
 