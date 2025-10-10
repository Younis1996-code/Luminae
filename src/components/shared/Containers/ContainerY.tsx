import React, { ReactNode } from 'react'

const ContainerY = ({className, children}: {className?: string, children: ReactNode}) => {
  return (
    <main className={`space-y-12 md:space-y-17 ${className}`}>
      {children}
    </main>
  )
}

export default ContainerY
