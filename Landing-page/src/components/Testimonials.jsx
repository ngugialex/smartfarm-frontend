import React from 'react'

const Testimonials = () => {
  return (
    <div className="mt-8 mb-12">
      <p className="font-bold text-center text-[32px] text-green-700 mt-12">What Our Users Say</p>
      <div className="flex flex-wrap justify-center gap-16 mt-8">
        <div className="bg-gray-100 shadow-lg rounded-lg p-6 w-72">
          <p className="text-center italic">"smartFarm has transformed the way we plan our crops. The recommendations are always spot-on!"</p>
          <p className="text-center mt-4 font-bold">- Farmer John</p>
        </div>

        <div className="bg-gray-100 shadow-lg rounded-lg p-6 w-72">
          <p className="text-center italic">"With smartFarm, we can optimize our yields and make data-driven decisions."</p>
          <p className="text-center mt-4 font-bold">- Agricultural Advisor Sarah</p>
        </div>

        <div className="bg-gray-100 shadow-lg rounded-lg p-6 w-72">
          <p className="text-center italic">"This platform is a game-changer for farming communities."</p>
          <p className="text-center mt-4 font-bold">- Agricultural Organization Representative</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials