import BePartOfWhatsComing from '@/components/home/BePartOfWhatsComing'
import BuiltForInsight from '@/components/home/BuiltForInsight'
import BuiltToMeetPeople from '@/components/home/BuiltToMeetPeople'
import FounderLed from '@/components/home/Founder-led'
import Hero from '@/components/home/Hero'
import HowMulahWorks from '@/components/home/HowMulahWorks'
import Team from '@/components/home/Team'
import TheAccountabilityMeasure from '@/components/home/TheAccountabilityMeasure'
import WhoMulahIsFor from '@/components/home/WhoMulahIsFor'
import { WateryReveal } from '@/containers/SmoothReveal'
import React from 'react'

const Page = () => {
  return (
    <>
      <WateryReveal>
        <Hero />
      </WateryReveal>

      <WateryReveal>
        <BuiltForInsight />
      </WateryReveal>

      <WateryReveal>
        <TheAccountabilityMeasure />
      </WateryReveal>

      <WateryReveal>
        <HowMulahWorks />
      </WateryReveal>

      <WateryReveal>
        <BuiltToMeetPeople />
      </WateryReveal>

      <WateryReveal>
        <Team />
      </WateryReveal>

      <WateryReveal>
        <WhoMulahIsFor />
      </WateryReveal>

      <WateryReveal>
        <FounderLed />
      </WateryReveal>

      <WateryReveal>
        <BePartOfWhatsComing />
      </WateryReveal>
    </>
  )
}

export default Page