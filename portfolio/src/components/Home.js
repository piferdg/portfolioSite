import React from 'react'
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://image.ibb.co/k2gw5f/fishing.png',
    altText: 'Slide 1',
    header: 'Fishing',
    caption: 'Jefferson Lake Rainbow Trout'
  },
  {
    src: 'https://image.ibb.co/dfLvy0/me-hiking.png',
    altText: 'Slide 2',
    header: 'Hiking',
    caption: 'Some fall hiking at Jefferson Lake'
  },
  {
    src: 'https://image.ibb.co/d1PoJ0/baseball.png',
    altText: 'Slide 3',
    header: 'Baseball',
    caption: 'Taking in a game at AT&T Park in San Francisco'
  }
];

const Home = () => {
  return (
    <div className='homepage'>
      <div className="container">
        <div className="bird-container-one">
          <div className="bird-one"></div>
        </div>
        <div className="bird-container-two">
          <div className="bird-two"></div>
        </div>
        <div className="bird-container-three">
          <div className="bird-three"></div>
        </div>
        <div className="bird-container-four">
          <div className="bird-four"></div>
        </div>
      </div>
      <div className='homepage-name'>
        <h1>Daniel Pifer</h1>
        <h4>Full Stack Web Developer</h4>
      </div>
      <div id='carousel'>
        <UncontrolledCarousel id='carousel-items' items={items} />
      </div>
      <div className='homepage-bio'>
        <h3>Biography</h3>
        <p>I have a wide range of experience that makes me uniquely well rounded. This quality makes me a valuable asset to any company. My military experience taught me leadership, and how to be an effective member of a team. My building experience taught me attention to detail, and how to deliver a professional, finished product to a customer.</p>
        <p>My tech experience in Customer Support and QA allow me to see the larger picture, and gave me a familiarity with the entire development process. As a QA Tester, I used my customer support experience to keep the users' needs in mind, which in turn made for a better final product.</p>
        <p>I'm comfortable diving into projects by myself, and also enjoy collaboration with a team. I worked remote for a year so I can get the job done with little supervision.</p>
        <p>But it's not all just work! I love heading up into the mountains for the weekend, exploring new hiking trails, or finding a good spot on a river and going fly-fishing. As an avid baseball fan, I also enjoy going to Rockies games whenever I can.</p>
        <p>I’m looking for opportunities that allow me to continue learning, and to fine tune my skills as a developer. I'd love to join a team that I can contribute to, and through the developers around me, become a valuable addition to the company.</p>
      </div>
    </div>
  )
}

export default Home