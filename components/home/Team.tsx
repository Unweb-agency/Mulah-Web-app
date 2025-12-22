import Container from '@/containers/Container'
import React from 'react'
import TeamSwiper from '../swipers/TeamSwiper'

const Team = () => {
  return (
    <div className='w-full relative' id=''>
        <Container className='flex flex-col gap-8 justify-center items-center text-center py-10 md:py-16 lg:py-20'>
            <div className='font-semibold text-xl md:text-2xl lg:text-3xl'>
                The <span className='font-bold bg-linear-to-r from-brandOrange to-brandBlue bg-clip-text text-transparent'> Mülah </span> Team
            </div>

            <TeamSwiper />
        </Container>
    </div>
  )
}

export default Team