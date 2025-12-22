"use client"

import Container from '@/containers/Container'
import React, { useState } from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Waitlist from '@/modals/Waitlist'
import HeroSwiper from '../swipers/HeroSwiper'

const Hero = () => {

    // Waitlist Modal form
    const [showWaitlist, setShowWaitlist] = useState(false);

    return (
        <main className='w-full relative bg-neutral-100'>
            <Container className='flex flex-col md:flex-row justify-between items-center pb-10 pt-20 sm:pt-24 md:pt-28 lg:pt-32 gap-x-10 gap-y-8'>

                {/* Top and Left container */}
                <div className='max-w-175 w-full flex flex-col justify-center items-center text-center md:justify-start md:items-start md:text-start gap-y-6 sm:gap-y-6.5 md:gap-y-7 lg:gap-y-7.5'>
                    {/* Badge */}
                    <Badge className='bg-linear-to-r from-blue-50 to-blue-100 text-blue-700 outline-none border border-blue-300/10 px-5 flex gap-x-2.5 py-1.5'>
                        <div className="relative h-2 w-2 flex items-center justify-center">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping"></span>
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-700"></span>
                        </div>
                        <span className='text-xs md:text-sm uppercase'>
                            Early Access Open
                        </span>
                    </Badge>

                    {/* Hero title and Content */}
                    <h1 className='font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight'>
                        A new way to understand <span></span>
                        <span className='bg-radial from-brandOrange to-brandBlue bg-clip-text text-transparent'>
                            your money.
                        </span>
                    </h1>

                    <div className='flex flex-col justify-center items-center md:justify-start md:items-start gap-6'>
                        <p className='text-gray-500 font-medium leading-tight text-base sm:text-lg md:text-xl lg:text-2xl'>
                            Mülah helps you understand not just what you&apos;re doing with your money - but why.
                        </p>

                        <p className='max-w-100 w-full leading-tight text-neutral-600  text-[12.5px] md:text-sm lg:text-base text-center md:text-justify'>
                            By combining financial intelligence with emotional awareness, Mülah turns everyday spending into clarity, accountability, and informed self-direction.
                        </p>
                    </div>

                    <div className='flex flex-row items-center gap-x-5 md:gap-x-6 lg:gap-x-8 mt-2'>
                        <Button
                            variant={'default'}
                            className='text-xs md:text-sm rounded-full cursor-pointer bg-linear-to-r from-brandOrange to-brandBlue transition-all ease-in-out duration-200 hover:scale-105'
                            onClick={() => setShowWaitlist(true)}
                        >
                            Join Waitlist
                            <ArrowRight />
                        </Button>

                        <span className='text-xs text-neutral-400 font-medium'> Launching soon </span>
                    </div>
                </div>

                {/* Bottom and Right Container */}
                <div className='max-w-140 w-full'>
                    <HeroSwiper />
                </div>
            </Container>

            {/* Waitlist Modal */}
            {showWaitlist && <Waitlist onClose={() => setShowWaitlist(false)} />}
        </main>
    )
}

export default Hero