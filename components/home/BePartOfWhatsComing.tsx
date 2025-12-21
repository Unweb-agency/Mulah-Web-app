"use client"

import Container from '@/containers/Container'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Waitlist from '@/modals/Waitlist'

const BePartOfWhatsComing = () => {
// Waitlist Modal form
  const [showWaitlist, setShowWaitlist] = useState(false);

    return (
        <div className='relative w-full bg-neutral-100'>
            <Container className='flex flex-col justify-center items-center text-center py-10 md:py-16 lg:py-20'>
                <h1 className='font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight'>
                    Be part of what&apos;s coming.
                </h1>
                <p className='text-gray-500 font-medium leading-tight text-base sm:text-lg md:text-xl lg:text-2xl max-w-200 w-full mt-4'>
                    Mülah is launching soon. Join the waitlist to get early access and help shape how people understand money.
                </p>

                <Button 
                    variant={'default'} 
                    className='text-xs md:text-sm lg:text-lg rounded-full cursor-pointer bg-linear-to-r from-brandOrange to-brandBlue transition-all ease-in-out duration-200 hover:scale-105 mt-8'
                    onClick={() => setShowWaitlist(true)}
                >
                    Join the Waitlist
                    <ArrowRight />
                </Button>
            </Container>


            {/* Waitlist Modal */}
            {showWaitlist && <Waitlist onClose={() => setShowWaitlist(false)} />}
        </div>
    )
}

export default BePartOfWhatsComing