import React, { useState } from 'react';

const Faq = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  return (
    <div className="mt-4 pt-6  pb-24  bg-green-50 ">
      <p className="font-bold text-center text-[32px] mb-8">Frequently Asked Questions</p>

      <div className="space-y-4 ml-6 mr-6">
        <div className="bg-white shadow rounded-lg p-4 ">
          <div className="flex justify-between items-center">
            <p className="font-bold cursor-pointer" onClick={() => toggle(0)}>
              How does SmartFarm provide recommendations?
            </p>
            <button className="font-bold text-xl" onClick={() => toggle(0)}>
              {open === 0 ? '-' : '+'}
            </button>
          </div>
          {open === 0 && (
            <p className="ml-6 mt-2">
              SmartFarm uses real-time weather data, soil conditions, and agricultural insights to offer tailored crop suggestions.
            </p>
          )}
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex justify-between items-center">
            <p className="font-bold cursor-pointer" onClick={() => toggle(1)}>
              Is SmartFarm available in my region?
            </p>
            <button className="font-bold text-xl" onClick={() => toggle(1)}>
              {open === 1 ? '-' : '+'}
            </button>
          </div>
          {open === 1 && (
            <p className="ml-6 mt-2">
              SmartFarm is designed to work in various regions. The availability and accuracy depend on the quality of local data.
            </p>
          )}
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex justify-between items-center">
            <p className="font-bold cursor-pointer" onClick={() => toggle(2)}>
              How can I get support if I encounter issues with SmartFarm?
            </p>
            <button className="font-bold text-xl" onClick={() => toggle(2)}>
              {open === 2 ? '-' : '+'}
            </button>
          </div>
          {open === 2 && (
            <p className="ml-6 mt-2">
              You can reach out to our support team through the contact form on our website. We're dedicated to assisting you with any issues you may encounter.
            </p>
          )}
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex justify-between items-center">
            <p className="font-bold cursor-pointer" onClick={() => toggle(3)}>
              Does SmartFarm offer a mobile app?
            </p>
            <button className="font-bold text-xl" onClick={() => toggle(3)}>
              {open === 3 ? '-' : '+'}
            </button>
          </div>
          {open === 3 && (
            <p className="ml-6 mt-2">
              Yes, we have a mobile app available for both iOS and Android devices. You can download it from the respective app stores.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
