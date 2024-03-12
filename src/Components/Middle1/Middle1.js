import React from 'react'
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import './Middle1.css'
import { Helmet } from 'react-helmet';

function Middle1() {
  return (
    <div  >
       <Helmet>
          <title>Cricket match Analysis and Predictions</title>
        <meta name="description" content='Get Updates about Daily Match Prediction ,Latest cricket News,Dream 11 teams,Fantasy Cricket Tips ' />
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
    <meta name="keyword" content="Fantasy Cricket, Fantasy cricket Tips,Fantasy Cricket Investment plan."/>
        </Helmet>
      <div className="container margin px-4 py-3" id="featured-3">
    <h2 className="pb-2 border-bottom  text-center">Trending Topics</h2>
    <div className="row g-5 py-3 row-cols-1 row-cols-lg-3">
    
    <div className="feature col ">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            </div>
            <img src='/images/FANTASY.png' alt="404 not found" className='img' />
            <h3 className="fs-2 text-body-emphasis my-2">What is fantasy cricket</h3>
            <p style={{fontSize:'1.3rem'}}>if you want to play <strong>fantasy cricket</strong>you have to know before playing <strong> What is fantasy Cricket</strong> </p>
            <Link to='/what-is-fantasyCricket'>
            <button className='btn btn-primary  w-50' >Read more</button>
            </Link>
          </div>
          <div className="feature col ">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            </div>
            <img src='/images/Is it good to.png' alt="404 not found" className='img' />
            <h3 className="fs-2 text-body-emphasis my-2">Why We Should Play Fantasy Cricket</h3>
            <p style={{fontSize:'1.3rem'}}>if you want to play <strong>fantasy cricket</strong>you have to know before playing <strong> is it good or not</strong> </p>
            <Link to='/Why-We-Should-Play-Fantasy-Cricket'>
            <button className='btn btn-primary  w-50' >Read more</button>
            </Link>
          </div>
          <div className="feature col ">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            </div>
            <img src='/images/how to make.png' alt="404 not found" className='img' />
            <h3 className="fs-2 text-body-emphasis my-2">How to Earn Money from Fantasy Cricket</h3>
            <p style={{fontSize:'1.3rem'}}> if you want to Make Money from <strong>fantasy cricket</strong>you have to know before playing <strong> How You Earn money</strong>check simple steps. </p> 
            <Link to='/How-to-Earn-Money-from-FantasyCricket'>
            <button className='btn btn-primary  w-50' >Read more</button>
            </Link>
          </div>
          <div className="feature col ">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            </div>
            <img src='/images/how to earn money.png' alt="404 not found" className='img' />
            <h3 className="fs-2 text-body-emphasis my-2">Dream11 Investment Plan</h3>
            <p style={{fontSize:'1.3rem'}}>if you want to Make Money from <strong>fantasy cricket</strong>check the latest <strong> Fantasy Cricket Investment Plan</strong>check simple steps. </p> 
            <Link to='/Dream11-Investment-Plan'>
            <button className='btn btn-primary w-50' >Read more</button>
            </Link>
          </div>
          <div className="feature col ">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            </div>
            <img src='https://www.iwmbuzz.com/wp-content/uploads/2020/02/all-the-fixing-controversies-of-ipl-over-the-years-920x518.jpg' alt="404 not found" className='img' />
            <h3 className="fs-2 text-body-emphasis my-2"> is ipl sripted or not </h3>
            <p style={{fontSize:'1.3rem'}}>check if you want to know ipl is scripted or fixed ? then please check the full blog you will get your answer. </p> 
            <Link to='/is-ipl-scripted-or-not'>
            <button className='btn btn-primary  w-50' >Read more</button>
            </Link>
          </div>
      
          <div className="feature col ">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            </div>
            <img src='/images/shoulcricket.jpg' alt="404 not found" className='img' />
            <h3 className="fs-2 text-body-emphasis my-2">Should Cricket Be the National Game of India?</h3>
            <p style={{fontSize:'1.3rem'}}>If you are cricket fan so this is the most asked question by cricket fans <strong>Should Cricket Be the National Game of India?</strong>here you will get your answer. </p> 
            <Link to='/should-cricket-be-the-national-game-of-india'>
            <button className='btn btn-primary  w-50' >Read more</button>
            </Link>
          </div>

    </div>
  </div>
   <Footer/>
    </div>
  )
}

export default Middle1
