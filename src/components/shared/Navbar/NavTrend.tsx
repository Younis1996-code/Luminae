import React from 'react'
import CardImage from '../CardImage'
import Paragraph from '../Typograpgy/Paragraph'

const NavTrend = () => {
  return (
    <div className='hidden flex-1 lg:flex items-center gap-3.5 border-x border-Grey-500 justify-center'>
        <CardImage src='/assets/images/Men cosmetic.png' alt='Men cosmetic deal' className='w-15.5 h-15.5' />
        <div className='flex flex-col gap-0.5 justify-center'>
            <Paragraph size='p12' weight='bold' lineH='lh20' className='text-White'>Weekly Men&apos;s Toiletries Coupons.</Paragraph>
            <Paragraph size='p12' weight='normal' lineH='lh20' className='text-Grey-300'>We extend exclusive discounts to our male clientele</Paragraph>
        </div>
      </div>
  )
}

export default NavTrend
