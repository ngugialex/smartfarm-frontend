import React from 'react'

const Client = () => {
  return (
    <div className='mt-8'>
      <p className='font-bold text-[24px] text-center' >How It Works</p>
      <div className="flex gap-2">
     <div className="grid">
      <p className='font-bold text-center'>Step 1: </p> <br />
      <p className='text-center'>"Create an Account" </p>
      <p className='text-center'>- Register and set up your profile with location and preferences.</p>
      </div>  

      <div className="grid ">
      <p className='font-bold text-center '>Step 2: </p> <br />
      <p className='text-center'>"Get Real-Time Data"</p>
      <p  className='text-center'>- Access real-time weather and soil data for your region.</p>
      </div>  

      <div className="grid">
      <p className='font-bold ml-4 text-center'>Step 3: </p> <br />
      <p  className='text-center'>"Receive Recommendations"  </p>
       <p className='text-center'>- Get personalized crop suggestions tailored to your location and conditions.</p>
      </div>  

      <div className="grid">
      <p className='font-bold text-center'>Step 4: </p> <br />
      <p className='text-center'>"Optimize Your Yields"</p>
      <p className='text-center'>- Make informed decisions to improve your crop productivity.</p>
      </div>
    </div>
    </div>  
  )
}

export default Client