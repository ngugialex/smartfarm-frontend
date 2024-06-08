import React from 'react'

const Contact = () => {
  return (
    <div>
      <p className='font-bold mt-4 text-center'>Get in Touch</p>
      <p className='text-center'>Have questions or need support? Reach out to us!</p>
      <form action="#" method="post">
        <div className="grid gap-4">
      <div className="text-center ">
        <label htmlFor="">Email</label>
        <input type="text" className='bg-slate-300 rounded-full' placeholder=' email address'/>
        </div>
        <div className=" text-center">
        <label htmlFor="" >Message</label>
        <input type="text" className='bg-slate-300 rounded-full' placeholder ='for esteemed experience'/>
        </div>
        </div>
      </form>
    </div>
  )
}

export default Contact