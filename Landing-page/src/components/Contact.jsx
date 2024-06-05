import React from 'react'

const Contact = () => {
  return (
    <div>
      <p>Get in Touch</p>
      <p>Have questions or need support? Reach out to us!</p>
      <form action="#" method="post">
        <label htmlFor="">Name</label>
        <input type="text" />

        <label htmlFor="">Email</label>
        <input type="text" />

        <label htmlFor="">Message</label>
        <input type="text" />

        <p>Email</p>
        <p>Phone Number</p>
        <p>Address</p>        
      </form>
    </div>
  )
}

export default Contact