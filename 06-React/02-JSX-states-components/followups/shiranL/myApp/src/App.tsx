import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Article from './components/Article/Article';
import './App.scss';
import Mainbar from './components/Mainbar/Mainbar';
import ArticlePage from './components/ArticlePage/ArticlePage';

function App() {
  return (
   
    <>
    <Mainbar title='How to stay happy despite all the shit'/>
    <div className='articles'>
      <Article
            title=' Love yourself more ! ! !  '
            content='Learn more about your body and know how to listen to its needs'
            imgSrc='https://img.freepik.com/free-photo/portrait-young-beautiful-woman-gesticulating_273609-40418.jpg?w=740&t=st=1700037754~exp=1700038354~hmac=f106a00fb037af133ac84d224eda789792e74a870ecff51a689cd5c92de8f1b0' id={1}      />
      <Article
            title='Running as a lifestyle'
            content='Keeping fit is health along with enjoying life'
            imgSrc='https://img.freepik.com/free-photo/determined-muscular-build-woman-running-while-exercising-nature-copy-space_637285-4877.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.1.9697832.1687471476&semt=sph' id={2}      />
      <Article
            title='Meat is life'
            content='Dont give up on the good things along the way'
            imgSrc='https://img.freepik.com/free-photo/juicy-steak-medium-rare-beef-with-spices-grilled-vegetables_24972-2328.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.1.9697832.1687471476&semt=ais' id={3}      />
           <Article
            title='Religious in my opinion'
            content='Be religious with yourself in a pure heart'
            imgSrc='https://img.freepik.com/free-photo/traditional-candlelight-holder-hanukkah_23-2148330523.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.1.9697832.1687471476&semt=ais' id={4}      />
    </div>

    </>
  
  );
}

export default App;
