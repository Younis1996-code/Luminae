'use client'

import {type FooterList } from "@/data/footerData"
import Heading from "../Typograpgy/Heading";
import Link from "next/link";
import TransitionLink from "../../ui/TransitionLink";

interface FooterListProps {
  footerList:FooterList;
}

const FooterList = ({footerList} : FooterListProps) => {
  return (
    <div className="flex flex-col gap-[25px] items-start justify-start min-w-[134px] lg:min-w-auto">
      <Heading size="h14" weight="bold" lineH="lh20" level={5} className="text-Grey-800">
        {footerList.title}
      </Heading>
      <div role="list" aria-label="list" className="flex flex-col gap-[15px] items-start justify-start">
        {
          footerList.links.map((link,idx)=>(
            <TransitionLink href={link.linkTo} key={idx} className="font-normal text-sm leading-5 text-Grey-600 hover:underline">
              {link.linkText}
            </TransitionLink>
          ))
        }
      </div>
    </div>
  )
}

export default FooterList
