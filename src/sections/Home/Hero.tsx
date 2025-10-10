import ContainerX from "@/components/shared/Containers/ContainerX";
import Heading from "@/components/shared/Typograpgy/Heading";
import React from "react";

const Hero = () => {
  return (
    <ContainerX className="grid grid-cols-2 lg:grid-cols-3 gap-6">
      <Heading level={1} size="h32" weight="medium" >Hero</Heading>
    </ContainerX>
  );
};

export default Hero;