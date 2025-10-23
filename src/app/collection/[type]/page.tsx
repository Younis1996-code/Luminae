"use client";

import { useParams } from "next/navigation";
import ContainerX from "@/components/shared/Containers/ContainerX";
import Heading from "@/components/shared/Typograpgy/Heading";

import MostTrendingCard from "@/components/cards/MostTrendingCard";
import FlashSalesCard from "@/components/cards/FlashSalesCard";
// import Top100Card from "@/components/cards/Top100Card";

import { trendingData } from "@/data/trending";
import { flashSalesData } from "@/data/flashSales";
import { topData } from "@/data/top";
import TopCard from "@/components/cards/TopCard";
// import { top100Data } from "@/data/top100";

type CollectionConfig = {
  data: any[];
  Card: React.ComponentType<any>;
};

const collections: Record<string, CollectionConfig> = {
  trending: {
    data: trendingData,
    Card: MostTrendingCard,
  },
  "flash-sales": {
    data: flashSalesData,
    Card: FlashSalesCard,
  },
  "top-100": {
    data: topData,
    Card: TopCard,
  },
};

const CollectionPage = () => {
  const params = useParams<{ type: string }>();
  const type = params?.type ?? "";

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
