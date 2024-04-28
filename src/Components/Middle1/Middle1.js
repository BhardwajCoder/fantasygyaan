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
        <img src="/images/VS (6).png" alt="Placeholder " class="card-image"/>
        <div class="card-content">
            <h1 className='H1-middle1'>Is Esports Good Career In India.</h1>
  <Link to='/esport-good-carrer-india'><button class="card-button">Click Me!</button></Link>    
        </div>
    </div>
    <div class="card">
        <img src="https://i.ytimg.com/vi/A0S-AC24_WI/maxresdefault.jpg" alt="Placeholder " class="card-image"/>
        <div class="card-content">
            <h1 className='H1-middle1'>Mobile Games Like Valorant</h1>
  <Link to='/mobile-games-like-valorant'><button class="card-button">Click Me!</button></Link>    
        </div>
    </div>
    <div class="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq4JPTjN0XGa3Hhyji7khRMgXi3RZEF3Q_wQ&s" alt="Placeholder " class="card-image"/>
        <div class="card-content">
            <h1 className='H1-middle1'>Fantasy Cricket Guru - Ibrahim Saifi</h1>
  <Link to='/fantasy-cricket-guru'><button class="card-button">Click Me!</button></Link>    
        </div>

    </div>
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

    <div class="card">
        <img src="https://www.iwmbuzz.com/wp-content/uploads/2020/02/all-the-fixing-controversies-of-ipl-over-the-years-920x518.jpg" alt="Placeholder " class="card-image"/>
        <div class="card-content">
            <h1 className='H1-middle1'>Is Ipl Scripted Or Not</h1>
  <Link to='/is-ipl-scripted-or-not'><button class="card-button">Click Me!</button></Link>    
        </div>
    </div>



   
</div>
 
   <Footer/>
    </div>
  )
}

export default Middle1
