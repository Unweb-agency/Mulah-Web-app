import Container from '@/containers/Container'
import React from 'react'
import { Layers, Activity, Sparkles, ChartColumnBig, TrendingUp } from 'lucide-react'

// Process steps data
const process = [
    {stepNumber: 1, name: "Connect", icon: Layers, desc: "Sync your accounts securely with Mülah"},
    {stepNumber: 2, name: "Track", icon: Activity, desc: "Spending is categorized automatically"},
    {stepNumber: 3, name: "Reflect", icon: Sparkles, desc: "Journal to add emotional context"},
    {stepNumber: 4, name: "Visualize", icon: ChartColumnBig, desc: "See emotional & financial patterns"},
    {stepNumber: 5, name: "Thrive", icon: TrendingUp, desc: "Make aligned financial decisions"}
]

const HowMulahWorks = () => {
  return (
    <div className='w-full relative bg-neutral-100' id='how-it-works'>
        <Container className='flex flex-col justify-center items-center text-center py-10 md:py-16 lg:py-20'>
            <div>
                <p className='text-gray-500 font-semibold uppercase text-sm md:text-base lg:text-lg'>
                    Process 
                </p>
                <p className='font-semibold capitalize text-xl md:text-2xl lg:text-3xl tracking-tight mt-1 md:mt-1.5'>
                    How Mülah Works
                </p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16 mt-8 sm:mt-10 md:mt-12 lg:mt-14'>
                {process.map((process, index) => (
                    <div 
                        className='relative flex flex-col justify-center items-center gap-4 border-l-2 rounded-2xl p-2' 
                        key={index}
                    >
                        <span className='text-white bg-linear-to-bl from-brandOrange to-brandBlue py-1.5 px-3 rounded-full absolute -top-5 left-2 text-xs md:text-sm'> {process.stepNumber} </span>
                        <div className='bg-white p-2.5 rounded-full shadow-xl inset-shadow-lg'>
                            <process.icon className='h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-gray-400' />
                        </div>
                        <h3 className='text-md md:text-lg lg:text-xl font-semibold text-[#2C2C2C]'> {process.name} </h3>
                        <p className='text-zinc-500 font-medium text-sm md:text-base leading-tight'> {process.desc} </p>
                    </div>
                ))}
            </div>  
        </Container>
    </div>
  )
}

export default HowMulahWorks