import Categories from '@/components/ui/svg/Categories'
import React from 'react'
import Paragraph from '../Typograpgy/Paragraph'

const CatBtn = ({aside}: {aside?: boolean}) => {
  return (
    <div className={`flex items-center gap-1 cursor-pointer ${aside ? "p-3" : ""}`}>
            <div className={aside ? "" : "text-White"}>
                <Categories />
            </div>
            <Paragraph size='p20' weight='bold' lineH='lh20' className={aside ? "" : "text-White"}>Categories</Paragraph>
        </div>
  )
}

export default CatBtn
