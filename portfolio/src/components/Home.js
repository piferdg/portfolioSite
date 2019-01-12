import React from 'react'
import { UncontrolledCarousel } from 'reactstrap';
import htmlLogo from '../assets/htmlLogo.png'
import cssLogo from '../assets/CSS3_logo.png'
import cypressLogo from '../assets/cypressLogo.png'
import expressLogo from '../assets/expressLogo.png'
import firebaseLogo from '../assets/firebaseLogo.png'
import herokuLogo from '../assets/herokuLogo.png'
import javaScriptLogo from '../assets/JavaScript-logo.png'
import knexLogo from '../assets/knexLogo.png'
import mongoDBLogo from '../assets/mongodb-logo.png'
import nodeLogo from '../assets/nodejsLogo.png'
import postgresLogo from '../assets/PostgreSQLLogo.png'
import reactLogo from '../assets/React.js_logo.png'
import vueLogo from '../assets/vueLogo.png'

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
      <div className='homepage-name'>
        <h1>Daniel Pifer</h1>
        <h4>Full Stack Web Developer</h4>
      </div>
        <div className='carousel-container'>
          <div id='carousel'>
            <UncontrolledCarousel id='carousel-items' items={items} />
          </div>
        </div>
      <div className='technologies'>
        <h3>Technologies</h3>
        <div className='tech-images'>
          <div className='frontend'>
            <div>
              <img src={javaScriptLogo} alt='JavaScript' />
              <h4>JavaScript</h4>
            </div>
            <div>
              <img src={reactLogo} alt='React' />
              <h4>React</h4>
            </div>
            <div>
              <img src={vueLogo} alt='Vue' />
              <h4>Vue</h4>
            </div>
            <div>
              <img src={firebaseLogo} alt='Firebase' />
              <h4>Firebase</h4>
            </div>
            <div>
              <img src={htmlLogo} alt='html' />
              <h4>HTML</h4>
            </div>
            <div>
              <img src={cssLogo} alt='css' />
              <h4>CSS</h4>
            </div>
            <div>
              <img src={cypressLogo} alt='Cypress' />
              <h4>Cypress</h4>
            </div>
          </div>
          <div className='backend'>
            <div>
              <img src={expressLogo} alt='Express' />
              <h4>Express</h4>
            </div>
            <div>
              <img src={herokuLogo} alt='Heroku' />
              <h4>Heroku</h4>
            </div>
            <div>
              <img src={knexLogo} alt='Knex' />
              <h4>Knex</h4>
            </div>
            <div>
              <img src={mongoDBLogo} alt='MongoDB' />
              <h4>MongoDB</h4>
            </div>
            <div>
              <img src={nodeLogo} alt='Node' />
              <h4>Node</h4>
            </div>
            <div>
              <img src={postgresLogo} alt='PostgreSQL' />
              <h4>PostgreSQL</h4>
            </div>
          </div>
        </div>
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