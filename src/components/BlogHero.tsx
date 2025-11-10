import Image from "next/image";
import background from "../../public/BlogHero.png";
import Heading from "./shared/Typograpgy/Heading";
import ContainerX from "@/components/shared/Containers/ContainerX";
import Paragraph from "./shared/Typograpgy/Paragraph";
import ClockIcon from "./ui/svg/Clock";
import BlogHeartIcon from "./ui/svg/BlogHeart";
import CommentIcon from "./ui/svg/comment";
import DetailsBox from "./ui/Boxs/DetailsBox";
import ReadMorebtn from "./ui/btns/ReadMorebtn";


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
        <div className="relative inset-0 flex flex-col items-start justify-between py-28 z-10 w-[50%] gap-y-6">
          <Heading
            level={2}
            size="h40"
            weight="extrabold"
            lineH="lh56"
            className="text-white uppercase"
          >
            Stunning barefooted woman of 2023{" "}
          </Heading>
          <Paragraph
            size="p16"
            weight="medium"
            lineH="lh24"
            className="text-white uppercase"
          >
            In the heart of a chic urban studio, the atmosphere buzzed with
            excitement as a trendy fur coat took center stage during a vibrant
            photoshoot.
          </Paragraph>
          <div className="flex items-center space-x-8 mt-10">
            <DetailsBox svg={<ClockIcon />} text="20 July 2023" />
            <DetailsBox svg={<BlogHeartIcon />} text="830" />
            <DetailsBox svg={<CommentIcon />} text="19" />
          </div>
          <ReadMorebtn />
          <div className=" w-full flex ">
            <div className="border-t-white border-t-[1.5px] grow-1">
              <Heading
                level={4}
                size="h12"
                className="uppercase text-white"
                weight="bold"
                lineH="lh15"
              >
                Hello
              </Heading>
              <Paragraph
                size="p10"
                className="text-white"
                weight="medium"
                lineH="lh18"
              >
                Mate{" "}
              </Paragraph>
            </div>
            <div className="border-t-white border-t-[1.5px] grow-1">
              <Heading
                level={4}
                size="h12"
                className="uppercase text-white"
                weight="bold"
                lineH="lh15"
              >
                Hello
              </Heading>
              <Paragraph
                size="p10"
                className="text-white"
                weight="medium"
                lineH="lh18"
              >
                Mate{" "}
              </Paragraph>
            </div>
            <div className="border-t-white border-t-[1.5px] grow-1">
              <Heading
                level={4}
                size="h12"
                className="uppercase text-white"
                weight="bold"
                lineH="lh15"
              >
                Hello
              </Heading>
              <Paragraph
                size="p10"
                className="text-white"
                weight="medium"
                lineH="lh18"
              >
                Mate{" "}
              </Paragraph>
            </div>
          </div>
        </div>
      </ContainerX>
    </section>
  );
};

export default BlogHero;
