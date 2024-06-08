import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="gap-x-8">
      <p className="font-bold text-center">Quick Links:</p>
      <div className="grid gap-2">
      <p>Home</p>
      <p>Features</p>
      <p>About</p>
      <p>Contact</p>
      <p>FAQ</p>
      </div>
    </div>
    <div className="flex gap-x-8 mt-4">
      <p className="font-bold">Social Media Links:</p>
      <p>Icons linking to SmartFarm's social media pages</p>
    </div>
    <div className="mt-4">
      <label htmlFor="newsletter" className="block mb-2">Newsletter Signup</label>
      <input
        id="newsletter"
        type="text"
        placeholder="Subscribe to our newsletter for the latest updates."
        className="border p-2 w-full"
      />
    </div> 
</>
  )
}

export default Footer