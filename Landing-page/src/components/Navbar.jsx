import React from 'react'

const Navbar = () => {
  return (
    <>
      <div>Navbar</div>
      <div className="">
        <img src="" alt="logo" />
      </div>
      <div className="grid text-[24px] ml-6 text-red-900">
        <li>Home</li>
        <li>Service</li>
        <li>Feature</li>
        <li>Product</li>
        <li>Testimomial</li>
        <li>Faq</li>
      </div>
      <div className="bg-green-600">
        <button>Login</button>
        <button>SignIn</button>
      </div>
    </>
  )
}

export default Navbar