import Image from 'next/image'
import React from 'react'

interface CardImageProps {
    src: string
    alt: string
    className?: string;
    loading?: 'eager' | 'lazy';
    priority?: boolean;
    objectType?: 'cover' | 'contain'
}

const CardImage = ({src, alt, className, loading = 'lazy', priority = false, objectType = 'cover'}: CardImageProps) => {
  return (
    <div className={`relative ${className}`}>
      <Image src={src} alt={alt} fill className={`object-${objectType}`} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' loading={loading} priority={priority} />
    </div>
  )
}

export default CardImage
