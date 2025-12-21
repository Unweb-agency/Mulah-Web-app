import { cn } from '@/lib/utils'
import React from 'react'

type ContainerProps = {
    children: React.ReactNode
    className?: string
}

const Container = ({className, children}: ContainerProps) => {
  return (
    <div className={cn(
        `max-w-350 w-full px-4 sm:px-6 md:px-8 lg:px-10 mx-auto`,
        className
    )}>
        {children}
    </div>
  )
}

export default Container