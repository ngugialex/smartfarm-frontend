import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="flex gap-24 pr-8">
        <img src="" alt="logo"/>
      
      <div className="flex text-[18px] ml-72 gap-12 text-red-900 pl-2">
        <p>Home</p>
        <p>Service</p>
        <p>Feature</p>
        <p>Product</p>
        <p>Testimomial</p>
        <p>Faq</p>
      </div>
      
      <div className="gap-8">
        <button className="gap-8 pr-6">Login</button>
        <button className="gap-8 pr-6 bg-green-950 text-white rounded-full p-2 text-center" >SignIn</button>
      </div>
      </div>
    </>
  )
}

export default Navbar