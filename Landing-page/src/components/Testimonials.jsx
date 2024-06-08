import React from 'react'

const Testimonials = () => {
  return (
    <div className='mt-8'>
      <p className='font-bold text-center text-[32px] mt-12 '>What Our Users Say</p>
      <div className="flex gap-4 mt-8">
      <div className="bg-gray-300 rounded-md grid text-center">
      <p>smartFarm has transformed the way we plan our crops. <br/>
        The recommendations are always spot-on!" </p>
      <p>- Farmer John</p>
      </div>

      <div className="bg-gray-300 rounded-md grid text-center">
      <p>With mdartFarm, we can optimize our yields and make data-driven decisions.</p>
      <p>- Agricultural Advisor Sarah</p>
        </div>
      <div className="bg-gray-300 rounded-md grid text-center">
      <p>This platform is a game-changer for farming communities.</p>
      <p>- Agricultural Organization Representative</p>
    </div>
    </div>
    </div>
  )
}

export default Testimonials