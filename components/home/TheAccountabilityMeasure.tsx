import Container from '@/containers/Container'
import React from 'react'
import Image from 'next/image'

const TheAccountabilityMeasure = () => {
  return (
    <div className='w-full relative'>
        <Container className='flex flex-col md:flex-row justify-between items-center gap-5 py-10 md:py-16 lg:py-20'>
            <div className='max-w-150 w-full rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl'>
                <Image
                src={"/images/pic.png"}
                alt='img'
                width={1000}
                height={1000}
                className='h-full w-full object-cover rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl'
                />
            </div>

            <div className='max-w-150 w-full flex flex-col justify-center items-center text-center md:justify-start md:items-start md:text-start'>
                <p className='font-semibold uppercase text-brandOrange'> Core Differentiator </p>
                <h2 className='font-semibold capitalize text-xl md:text-2xl lg:text-3xl tracking-tight mt-1 md:mt-1.5'>
                    The Accountability Measure
                </h2>
                <p className='text-gray-500 font-medium text-sm md:text-base leading-tight mt-3.5 md:mt-4'>
                    At the core of Mülah is the Accountability Measure - a system designed to make invisible connections visible. It shows how financial behavior is shaped by emotions, priorities, and habits.
                </p>
                <p className='font-semibold text-base md:text-lg lg:text-xl leading-tight text-[#2C2C2C] mt-3.5 md:mt-4'>
                    The goal isn&apos;t control. It&apos; clarity.
                </p>
            </div>
        </Container>
    </div>
  )
}

export default TheAccountabilityMeasure