import React from 'react'
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import './Middle1.css'
import { Helmet } from 'react-helmet';

function Middle1() {
  return (
    <div className='container'  >
       <Helmet>
          <title>Cricket match Analysis and Predictions</title>
        <meta name="description" content='Get Updates about Daily Match Prediction ,Latest cricket News,Dream 11 teams,Fantasy Cricket Tips ' />
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
    <meta name="keyword" content="Fantasy Cricket, Fantasy cricket Tips,Fantasy Cricket Investment plan."/>
        </Helmet>
      
    <h1 className="pb-2 border-bottom  text-center">Trending Topics</h1>
    <div class="grid">

    <div class="card">
        <img src="/images/how to win small league.png" alt="Placeholder " class="card-image"/>
        <div class="card-content">
          <h1 className='H1-middle1'>Dream11 Small League Winning Tips</h1>
            
<Link to='/dream11-small-league-winning-tips'> <button class="card-button">Click Me!</button></Link>
           
        </div>
    </div>
   
    <div class="card">
        <img src="/images/shoulcricket.jpg" alt="Placeholder " class="card-image"/>
        <div class="card-content">
            <h1 className='H1-middle1'>Should Cricket Be The National Game Of India</h1>
  <Link to='/should-cricket-be-the-national-game-of-india'><button class="card-button">Click Me!</button></Link>    
        </div>
    </div>

   
</div>
 
   <Footer/>
    </div>
  )
}

export default Middle1
