import React from 'react'

const About = () => {
  return (
    <div className='bg-green-50 pt-12 pb-12'>
      <p className='font-bold text-[24px] text-center text-green-700'>Empowering Farmers with Data-Driven Insights</p>
      <div className='text-[18px] xl:flex xl:gap-32 ml-6 mt-4 sm:grid'>
        <div className="h-56 mt-8">
        <b>Mission of SmartFarm</b>
        <p className="h-56 text-justify leading-relaxed mr-12">The mission of SmartFarm is to empower farmers with advanced, data-driven tools and 
          resources that enhance agricultural productivity and sustainability. By leveraging technology 
          and innovative solutions, SmartFarm aims to provide farmers with actionable insights to improve
          crop yields, optimize resource usage, and ensure environmental stewardship.</p>
      </div>
    <div className="mt-48 xl:mt-0 mb-12">
    <b>Vision of SmartFarm</b>
    <p className="h-56 text-justify leading-relaxed mr-12 ">The vision of SmartFarm is to create a future where every farmer, 
      regardless of their scale, has access to cutting-edge agricultural technologies.
      By fostering a connected and informed farming community, SmartFarm envisions a world where
      agriculture is both economically viable and environmentally sustainable, ensuring food security
      and prosperity for future generations.</p>
    </div>
    </div>
    </div>
  )
}

export default About