import React from 'react';
import sayWhatScreenshot from '../assets/SayWhatScreenshot.png'
import cravScreenshot from '../assets/cravScreenshot.png'
import starWarsScreenshot from '../assets/StarWarsAppScreenshot.png'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, a } from 'reactstrap';

const Projects = () => {
  return (
    <div className='projects-page'>
      <h1>Projects</h1>
      <div className='projects-container'>
        <div className='card-one'>
          <Card id='card-one'>
            <CardBody>
              <CardTitle>"SayWhat?" Translation and Travel</CardTitle>
              <CardSubtitle>Galvanize g90 Capstone</CardSubtitle>
            </CardBody>
            <CardImg top width="100%" src={sayWhatScreenshot} alt="SayWhat? Screenshot" />
            <CardBody>
              <CardText>The ‘SayWhat?’ app will allow the traveler to translate any words, sentences that they want.</CardText>
              <a target='_blank' rel="noopener noreferrer" href="https://saywhat-37028.firebaseapp.com/">Launch App</a>
            </CardBody>
          </Card>
        </div>
        <div className='card-two'>
          <Card id='card-two'>
            <CardBody>
              <CardTitle>"Crāv" - Restaurant App</CardTitle>
              <CardSubtitle>Collaboration Project</CardSubtitle>
            </CardBody>
            <CardImg top width="100%" src={cravScreenshot} alt="Crav Screenshot" />
            <CardBody>
              <CardText>'Crāv' is a restaurant selector app, focusing on git workflow and learning Vue.</CardText>
              <a target='_blank' rel="noopener noreferrer" href="https://crav-5afdb.firebaseapp.com/">Launch App</a>
            </CardBody>
          </Card>
        </div>
        <div className='card-three'>
          <Card id='card-three'>
            <CardBody>
              <CardTitle>Star Wars App</CardTitle>
              <CardSubtitle>Movie Poster Generator</CardSubtitle>
            </CardBody>
            <CardImg top width="100%" src={starWarsScreenshot} alt="Star Wars Screenshot" />
            <CardBody>
              <CardText>The 'Star Wars App' allows the user to click on a movie title, and will then return the poster for that movie.</CardText>
              <a target='_blank' rel="noopener noreferrer" href="https://star-wars-posters.firebaseapp.com/index.html">Launch App</a>
            </CardBody>
          </Card>
        </div>
        <div className='card-four'>
          <Card id='card-four'>
            <CardBody>
              <CardTitle>Lorem ipsum dolor</CardTitle>
              <CardSubtitle>Lorem ipsum dolor</CardSubtitle>
            </CardBody>
            <CardImg top width="100%" src={starWarsScreenshot} alt="Star Wars Screenshot" />
            <CardBody>
              <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu lectus et metus interdum semper. Integer rhoncus at felis in venenatis. Etiam dapibus vel ante in pharetra.</CardText>
              <a target='_blank' rel="noopener noreferrer" href="https://star-wars-posters.firebaseapp.com/index.html">Launch App</a>
            </CardBody>
          </Card>
        </div>
        <div className='card-five'>
          <Card id='card-five'>
            <CardBody>
              <CardTitle>Lorem ipsum dolor</CardTitle>
              <CardSubtitle>Lorem ipsum dolor</CardSubtitle>
            </CardBody>
            <CardImg top width="100%" src={starWarsScreenshot} alt="Star Wars Screenshot" />
            <CardBody>
              <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu lectus et metus interdum semper. Integer rhoncus at felis in venenatis. Etiam dapibus vel ante in pharetra.</CardText>
              <a target='_blank' rel="noopener noreferrer" href="https://star-wars-posters.firebaseapp.com/index.html">Launch App</a>
            </CardBody>
          </Card>
        </div>
        <div className='card-six'>
          <Card id='card-six'>
            <CardBody>
              <CardTitle>Lorem ipsum dolor</CardTitle>
              <CardSubtitle>Lorem ipsum dolor</CardSubtitle>
            </CardBody>
            <CardImg top width="100%" src={starWarsScreenshot} alt="Star Wars Screenshot" />
            <CardBody>
              <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu lectus et metus interdum semper. Integer rhoncus at felis in venenatis. Etiam dapibus vel ante in pharetra.</CardText>
              <a target='_blank' rel="noopener noreferrer" href="https://star-wars-posters.firebaseapp.com/index.html">Launch App</a>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;