import Image from 'next/image'
import React from 'react'

interface CardImageProps {
    src: string
    alt: string
    className?: string;
    loading?: 'eager' | 'lazy'
}

const CardImage = ({src, alt, className, loading = 'lazy'}: CardImageProps) => {
  return (
    <div className={`relative ${className}`}>
      <Image src={src} alt={alt} fill className='object-cover' sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' loading={loading} priority={false} />
    </div>
  )
}

export default CardImage
