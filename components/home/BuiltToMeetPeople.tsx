import Container from '@/containers/Container'
import React from 'react'
import { MessageCircleX, CircleCheckBig } from 'lucide-react'

const TraditionalToolsList = [
  "Numbers without context",
  "Rigid  budgets that break",
  "Reactive alerts & shame",
  "One-size-fits all adive"
]

const MulahFeaturesList = [
  "Behavior-aware insights",
  "Adaptive systems for real life",
  "Reflection before reaction",
  "Personalized, empathetic guidance"
]

const BuiltToMeetPeople = () => {
  return (
    <div className='relative w-full'>
      <Container className='flex flex-col gap-20 md:gap-30 lg:gap-40 justify-center items-center py-10 md:py-16 lg:py-20'>
        {/* Stacked Card Features */}
        <div className='w-full rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl flex flex-col md:flex-row justify-center items-stretch shadow-2xl inset-shadow-2xl'>

          {/* Traditional Tools List */}
          <div className=' w-full flex flex-col justify-start items-start p-10 bg-zinc-100 rounded-t-xl sm:rounded-t-2xl md:rounded-l-3xl lg:rounded-l-4xl md:rounded-t-none'>
            <h2 className='font-semibold text-xl md:text-2xl lg:text-3xl tracking-tight text-gray-400'>
              Traditional Tools
            </h2>
            <div className='flex flex-col gap-4 mt-6'>
              {TraditionalToolsList.map((traditionalToolsFeatures, index) => (
                <div className='flex flex-row items-center gap-5' key={index}>
                  <MessageCircleX className='h-3.5 w-3.5 md:h-4 md:w-4 lg:h-4.5 lg:w-4.5 text-gray-400' />
                  <span className='text-sm md:text-lg font-semibold text-neutral-500 leading-tight'> {traditionalToolsFeatures} </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mulah Features List */}
          <div className='relative z-10 w-full flex flex-col justify-start items-start p-10 rounded-b-xl sm:rounded-b-2xl md:rounded-r-3xl lg:rounded-r-4xl overflow-hidden'>
            <div className='absolute h-40 w-40 md:h-50 md:w-50 rounded-full bg-radial from-brandOrange/50 via-brandOrange/10 to-brandOrange-20 -top-1/4 -right-10 z-0'></div>
            <h2 className='font-semibold text-xl md:text-2xl lg:text-3xl tracking-tight bg-linear-to-r from-brandOrange to-brandBlue bg-clip-text text-transparent'>
              Mülah
            </h2>
            <div className='flex flex-col gap-4 mt-6'>
              {MulahFeaturesList.map((MulahFeaturesList, index) => (
                <div className='flex flex-row items-center gap-5' key={index}>
                  <CircleCheckBig className='h-3.5 w-3.5 md:h-4 md:w-4 lg:h-4.5 lg:w-4.5 text-brandBlue' />
                  <span className='text-base md:text-lg font-semibold text-neutral-800 leading-tight'> {MulahFeaturesList} </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Built to meet people where they are. */}
        <div className='max-w-180 w-full flex flex-col justify-center items-center text-center'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight'>
                Built to meet people where they are.
            </h2>
            <p className='text-gray-500 font-medium text-sm md:text-base mt-3.5 sm:mt-4 md:mt-4.5 lg:mt-5 leading-tight'>
                Mülah isn't here to fix people or tell them how to live. It creates space for reflection, hihglights patterns, and helps users see alignment - or misalignment - between goals, emotions, and actions.
            </p>
            <p className='text-gray-500 font-medium text-sm md:text-base mt-3.5 sm:mt-4 md:mt-4.5 lg:mt-5 leading-tight'>
                Whether someone is saving, spending, rebuilding, or rethinking their habits, <span className='font-bold text-[#2C2C2C] text-[15px] md:text-[17px]'> Mülah adapts to them. </span>
            </p>
        </div>
      </Container>
    </div>
  )
}

export default BuiltToMeetPeople