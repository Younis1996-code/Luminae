import Image from "next/image";
import background from "../../public/BlogHero.png";
import Heading from "./shared/Typograpgy/Heading";
import ContainerX from "@/components/shared/Containers/ContainerX";
import Paragraph from "./shared/Typograpgy/Paragraph";
import ClockIcon from "./ui/svg/Clock";
import BlogHeartIcon from "./ui/svg/BlogHeart";
import CommentIcon from "./ui/svg/comment";


const BlogHero = () => {
  return (
    <section className="relative w-full h-screen mt-11">
      <Image
        src={background}
        alt="blog-hero"
        fill
        priority
        className="object-cover object-center z-0"
      />
      <ContainerX>
        <div className="relative inset-0 flex flex-col items-start justify-between py-28 z-10 w-[75%] gap-x-6">
          <Heading
            level={2}
            size="h40"
            weight="extrabold"
            lineH="lh56"
            className="text-white"
          >
            Stunning barefooted woman of 2023{" "}
          </Heading>
          <Paragraph
            size="p16"
            weight="medium"
            lineH="lh24"
            className="text-white"
          >
            In the heart of a chic urban studio, the atmosphere buzzed with
            excitement as a trendy fur coat took center stage during a vibrant
            photoshoot.
          </Paragraph>
      
        <div className="flex items-center space-x-8 mt-10">
          <div className="flex items-center space-x-1">
            <ClockIcon />
            <Paragraph
              size="p12"
              weight="medium"
              lineH="lh20"
              className="text-white"
            >
              20 July 2023
            </Paragraph>
          </div>
          <div className="flex items-center space-x-1">
            <BlogHeartIcon />
            <Paragraph
              size="p12"
              weight="medium"
              lineH="lh20"
              className="text-white"
            >
              830
            </Paragraph>
          </div>
          <div className="flex items-center space-x-1">
            <CommentIcon />
            <Paragraph
              size="p12"
              weight="medium"
              lineH="lh20"
              className="text-white"
            >
              19
            </Paragraph>
          </div>
        </div>
        </div>
      </ContainerX>
    </section>
  );
};

export default BlogHero;
