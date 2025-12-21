import Container from '@/containers/Container'
import React from 'react'

const BuiltForInsight = () => {
  return (
    <div className='w-full relative bg-neutral-100'>
        <Container className='flex justify-center items-center text-center py-10 md:py-16 lg:py-20'>
        <div className='max-w-180 w-full flex flex-col'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight'>
                Built for insight, not judgment.
            </h2>
            <p className='text-gray-500 font-medium text-sm md:text-base mt-3.5 sm:mt-4 md:mt-4.5 lg:mt-5 leading-tight'>
                Traditional financial tools focus on numbers in isolation. Charts and budgets can show where money goes, but they rarely explain the emotional and behavioral forces behind those decisions.
            </p>

            <p className='font-medium text-base md:text-lg lg:text-xl leading-tight text-brandBlue mt-10'>
                Mülah exists to brigde that gap - helping people see how money, emotions, time and real life intersect.
            </p>
        </div>
    </Container>
    </div>
  )
}

export default BuiltForInsight