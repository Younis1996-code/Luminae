'use client'

import {type FooterList } from "@/data/footerData"
import Heading from "./Typograpgy/Heading";

interface FooterListProps {
  footerList:FooterList;
}

const FooterList = ({footerList} : FooterListProps) => {
  return (
    <div className="flex flex-col gap-[25px] items-start justify-start">
      <h5 className="text-sm ">
        {footerList.title}
      </h5>
    </div>
  )
}

export default FooterList
