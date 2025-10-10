import { ReactNode } from 'react'

const ContainerX = ({className, children}: {className?:string, children: ReactNode}) => {
  return (
    <section className={`px-5 md:px-22.5 ${className}`}>
      {children}
    </section>
  )
}

export default ContainerX
