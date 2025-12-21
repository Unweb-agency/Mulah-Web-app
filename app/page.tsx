import BePartOfWhatsComing from '@/components/home/BePartOfWhatsComing'
import BuiltForInsight from '@/components/home/BuiltForInsight'
import BuiltToMeetPeople from '@/components/home/BuiltToMeetPeople'
import FounderLed from '@/components/home/Founder-led'
import Hero from '@/components/home/Hero'
import HowMulahWorks from '@/components/home/HowMulahWorks'
import TheAccountabilityMeasure from '@/components/home/TheAccountabilityMeasure'
import WhoMulahIsFor from '@/components/home/WhoMulahIsFor'
import Waitlist from '@/modals/Waitlist'
import React from 'react'

const Page = () => {
  return (
    <>
      <Hero />
      <BuiltForInsight />
      <TheAccountabilityMeasure />
      <HowMulahWorks />
      <BuiltToMeetPeople />
      <WhoMulahIsFor />
      <FounderLed />
      <BePartOfWhatsComing />
    </>
  )
}

export default Page