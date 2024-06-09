import React from 'react'
import smartfarm from '../assets/smartfarm.png'


const Home = () => {
  return (
    <>
  <div className="flex gap-56 mb-12">
      <div className="ml-8 mt-16 gap-6">
          <p className='font-bold text-[42px]'>Optimize Your Farming <br/></p>
          <p className='font-bold text-[42px] text-green-700' >With SmartFarm</p>
          <p className='text-[18px]'>Personalized crop recommendations based on real-time weather data <br/> soil conditions, and agricultural insights.</p>
          <button className='rounded-lg p-3 bg-green-700 text-white mt-6'>Get Started</button>
      </div>
      <img src={smartfarm} alt="smartfarm brand" />
      </div>
    </>
  )
}

export default Home