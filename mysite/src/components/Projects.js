import React from 'react';
import sayWhatScreenshot from '../assets/SayWhatScreenshot.png'
import cravScreenshot from '../assets/cravScreenshot.png'
import starWarsScreenshot from '../assets/StarWarsAppScreenshot.png'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardLink } from 'reactstrap';

const Projects = () => {
  return (
    <div className='projects'>
      <div className='card-one'>
        <Card>
          <CardBody>
            <CardTitle>"SayWhat?" Translation and Travel</CardTitle>
            <CardSubtitle>Galvanize g90 Capstone</CardSubtitle>
          </CardBody>
          <CardImg top width="100%" src={sayWhatScreenshot} alt="SayWhat? Screenshot" />
          <CardBody>
            <CardText>The ‘SayWhat?’ app will allow the traveler to translate any words, sentences that they want.</CardText>
            <CardLink target='_blank' href="https://saywhat-37028.firebaseapp.com/">Launch App</CardLink>
          </CardBody>
        </Card>
      </div>
      <div className='card-two'>
        <Card>
          <CardBody>
            <CardTitle>"Crāv" - Restaurant App</CardTitle>
            <CardSubtitle>Collaboration Project</CardSubtitle>
          </CardBody>
          <CardImg top width="100%" src={cravScreenshot} alt="Crav Screenshot" />
          <CardBody>
            <CardText>'Crāv' is a restaurant selector app was a collaborative project built with three other developers, focusing on git workflow and learning Vue.</CardText>
            <CardLink target='_blank' href="https://crav-5afdb.firebaseapp.com/">Launch App</CardLink>
          </CardBody>
        </Card>
      </div>
      <div className='card-three'>
        <Card>
          <CardBody>
            <CardTitle>Star Wars App</CardTitle>
            <CardSubtitle>Movie Poster Generator</CardSubtitle>
          </CardBody>
          <CardImg top width="100%" src={starWarsScreenshot} alt="Star Wars Screenshot" />
          <CardBody>
            <CardText>The 'Star Wars App' allows the user to click on a movie title, and will then return the poster for that movie.</CardText>
            <CardLink target='_blank' href="https://star-wars-posters.firebaseapp.com/index.html">Launch App</CardLink>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Projects;