import React from 'react'
import me from '../assets/meMtEvansHiking.png'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-title'>
        <h1>Contact info</h1>
      </div>
      <div className='contact-main'>
        <div className='contact-info'>
          <h3>Email - piferdg@gmail.com</h3>
          <h3>Phone - &#40;303&#41; 847-9394</h3>
          <h3>Greater Denver, Colorado area</h3>
          <div className='contact-github-link'>
            <a target='-blank' href='https://github.com/piferdg'>GitHub</a>
          </div>
          <div className='contact-linkedin-link'>
            <a target='-blank' href='https://www.linkedin.com/in/daniel-pifer/'>Linkedin</a>
          </div>
        </div>
        <div className='contact-image'>
          <img src={me} alt='Me Hiking' />
        </div>
      </div>
    </div>
  )
}

export default Contact