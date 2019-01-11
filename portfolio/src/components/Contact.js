import React from 'react'
import me from '../assets/meMtEvansHiking.png'
import PDF from '../assets/DanielPifer_DeveloperResume_forDownload.pdf'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-title'>
        <h1>Contact info</h1>
      </div>
      <div className='contact-main'>
        <div className='contact-info'>
          <h3>Phone: &#40;303&#41; 847-9394</h3>
          <h3>Location: Denver, CO.</h3>
          <div className='contact-github-link'>
            <h3>GitHub: <a target='-blank' href='https://github.com/piferdg'>piferdg</a></h3>
          </div>
          <div className='contact-linkedin-link'>
            <h3>Linkedin: <a target='-blank' href='https://www.linkedin.com/in/daniel-pifer/'>daniel-pifer</a></h3>
          </div>
          <div className='contact-email-link'>
            <h3>Email: <a href='mailto:piferdg@gmail.com'>piferdg@gmail.com</a></h3>
          </div>
          <div className='contact-resume-link'>
            <h3>Resume: <a href={PDF} download>Download my resume!</a></h3>
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