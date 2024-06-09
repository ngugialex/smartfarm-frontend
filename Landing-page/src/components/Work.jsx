import React from 'react'
import StatisticsCard from './StatisticsCard'
import location from '../assets/location.png'
import trends from '../assets/trending.png'
import members from '../assets/members.png'
// import sociol from '../assets/sociol.png'
import reccomend from '../assets/reccomend.png'


const Work = () => {
  return (
    <>
    <div className='bg-gray flex'>
      <div className="ml-6 mt-6 mb-6">
        <p className='font-bold text-[28px]'>Helping farmers to </p>
        <p className='font-bold text-[28px] text-green-700'> produce more yields</p>
        <p>We are happy to continously serve farmers and help strenghten agriculture</p>
    </div>
    <div className="flex gap-56 mt-6 ">
      <div className="grid ml-24">
      <StatisticsCard
        imageSrc={members}
        altText="Members"
        value="2,245,341"
        label="Members"
      />
      <StatisticsCard
        imageSrc={reccomend}
        altText="Recommendations"
        value="2,245,341"
        label="Recommendations"
      />

</div>

<div className="grid gap-8">
      <StatisticsCard
        imageSrc={trends}
        altText="Insights"
        value="2,245,341"
        label="Insights"
      />
      <StatisticsCard
        imageSrc={location}
        altText="Soil Conditions Evaluated"
        value="2,245,341"
        label="Soil Conditions Evaluated"
      />
      </div>
    </div>
    </div>
    </>
  )
}

export default Work