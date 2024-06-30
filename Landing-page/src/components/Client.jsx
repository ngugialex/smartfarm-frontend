import React from 'react'
import home from '../assets/home.png'
import phone from '../assets/phone.png'
import mobile from '../assets/mobile.png'
import yields from '../assets/yields.png'

const Client = () => {
  return (
    <div className="mt-8 ">
      <p className="font-bold text-[24px] text-center text-green-700">How It Works</p>
      <div className="flex flex-wrap justify-center gap-16 mt-4">
        <div className="bg-green-100 shadow-lg rounded-lg p-4 w-64">
          <p className="font-bold text-center">Step 1:</p>
          <p className="text-center mt-2">"Create an Account"</p>
          <img src={mobile} alt="Create an Account" className="mx-auto mt-4" />
          <p className="text-center mt-4">Register and set up your profile with location and preferences.</p>
        </div>

        <div className="bg-green-100 shadow-lg rounded-lg p-4 w-64">
          <p className="font-bold text-center">Step 2:</p>
          <p className="text-center mt-2">"Get Real-Time Data"</p>
          <img src={home} alt="Get Real-Time Data" className="mx-auto mt-4" />
          <p className="text-center mt-4">Access real-time weather and soil data for your region.</p>
        </div>

        <div className="bg-green-100 shadow-lg rounded-lg p-4 w-64">
          <p className="font-bold text-center">Step 3:</p>
          <p className="text-center mt-2">"Receive Recommendations"</p>
          <img src={phone} alt="Receive Recommendations" className="mx-auto mt-4 w-40 h-40" />
          <p className="text-center mt-4">Get personalized crop suggestions tailored to your location and conditions.</p>
        </div>

        <div className="bg-green-100 shadow-lg rounded-lg p-4 w-64">
          <p className="font-bold text-center">Step 4:</p>
          <p className="text-center mt-2">"Optimize Your Yields"</p>
          <img src={yields} alt="Optimize Your Yields" className="mx-auto mt-4" />
          <p className="text-center mt-4">Make informed decisions to improve your crop productivity.</p>
        </div>
      </div>
    </div>
  );
};

export default Client;