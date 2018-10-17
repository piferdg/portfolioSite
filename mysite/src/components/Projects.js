import React from 'react';
import sayWhatScreenshot from '../assets/sayWhatScreenshot.png'
import cravScreenshot from '../assets/cravScreenshot.png'
import starWarsScreenshot from '../assets/starWarsPostersScreenshot.png'
import rockiesRosterScreenshot from '../assets/rockiesRosterScreenshot.png'
import dogImagesScreenshot from '../assets/dogImagesScreenshot.png'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Projects = () => {
  return (
    <div className='projects-page'>
      <h1>Projects</h1>
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
      <div className='projects-container'>
        <div className='card-one'>
          <Card id='card-one'>
            <CardBody>
              <CardTitle>"SayWhat?" Translation and Travel</CardTitle>
              <CardSubtitle>Galvanize g90 Capstone</CardSubtitle>
            </CardBody>
            <CardImg id='screenshot' top width="100%" src={sayWhatScreenshot} alt="SayWhat Screenshot" />
            <CardBody>
              <CardText>The ‘SayWhat?’ app will allow the traveler to translate any words, sentences that they want.</CardText>
              <CardText>Technologies Used: React, Reactstrap, CSS, Firebase, Google Cloud Machine Learning API, PostgreSQL, Node, Express, Knex, Heroku</CardText>
              <div className='card-buttons'>
                <div className='launch-app-link'>
                  <Button color='primary' target='_blank' rel="noopener noreferrer" href="https://saywhat-37028.firebaseapp.com/">Launch App</Button>
                </div>
                <div className='info-button'>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className='card-two'>
          <Card id='card-two'>
            <CardBody>
              <CardTitle>"Crāv" - Restaurant App</CardTitle>
              <CardSubtitle>Collaboration Project</CardSubtitle>
            </CardBody>
            <CardImg id='screenshot' top width="100%" src={cravScreenshot} alt="Crav Screenshot" />
            <CardBody>
              <CardText>'Crāv' is a restaurant selector app, focusing on git workflow and learning Vue.</CardText>
              <CardText>Technologies Used: Vue, CSS, firebase, PostgreSQL, Node, Express, Knex, Heroku</CardText>
              <div className='card-buttons'>
                <div className='launch-app-link'>
                  <Button color='primary' target='_blank' rel="noopener noreferrer" href="https://crav-5afdb.firebaseapp.com/">Launch App</Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className='card-three'>
          <Card id='card-four'>
            <CardBody>
              <CardTitle>Colorado Rockies Roster</CardTitle>
              <CardSubtitle>Add/Delete Players from the roster</CardSubtitle>
            </CardBody>
            <CardImg id='screenshot' top width="100%" src={rockiesRosterScreenshot} alt="Rockies Roster Screenshot" />
            <CardBody>
              <CardText>The purpose of this app was to practice React and building databases while having some fun at the same time!</CardText>
              <CardText>Technologies Used: React, CSS, firebase, PostgreSQL, Node, Express, Knex, Heroku</CardText>
              <div className='card-buttons'>
                <div className='launch-app-link'>
                  <Button color='primary' target='_blank' rel="noopener noreferrer" href="https://rockies-roster.firebaseapp.com/">Launch App</Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className='card-four'>
          <Card id='card-five'>
            <CardBody>
              <CardTitle>The Good Mood App!</CardTitle>
              <CardSubtitle>Click the bone to see a new dog</CardSubtitle>
            </CardBody>
            <CardImg id='screenshot' top width="100%" src={dogImagesScreenshot} alt="Dog Images Screenshot" />
            <CardBody>
              <CardText>The 'Good Mood App' was another fun app that I made to practice using React with an API.</CardText>
              <CardText>Technologies Used: React, CSS, firebase, PostgreSQL, Node, Express, Knex, Heroku</CardText>
              <div className='card-buttons'>
                <div className='launch-app-link'>
                  <Button color='primary' target='_blank' rel="noopener noreferrer" href="https://dog-app-e92c3.firebaseapp.com/">Launch App</Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className='card-five'>
          <Card id='card-three'>
            <CardBody>
              <CardTitle>Star Wars App</CardTitle>
              <CardSubtitle>Movie Poster Generator</CardSubtitle>
            </CardBody>
            <CardImg id='screenshot' top width="100%" src={starWarsScreenshot} alt="Star Wars Screenshot" />
            <CardBody>
              <CardText>The 'Star Wars App' allows the user to click on a movie title, and will then return the poster for that movie.</CardText>
              <CardText>Technologies Used: JavaScript, CSS, firebase, API</CardText>
              <div className='card-buttons'>
                <div className='launch-app-link'>
                  <Button color='primary' target='_blank' rel="noopener noreferrer" href="https://star-wars-posters.firebaseapp.com/index.html">Launch App</Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Projects;
