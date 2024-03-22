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
      <div className="container margin px-4 py-3" id="featured-3">
    <h2 className="pb-2 border-bottom  text-center">Trending Topics</h2>
    <div className="row g-5 py-3 row-cols-1 row-cols-lg-3">

    <div className="feature col ">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            </div>
            <img src='https://mybestguide.com/wp-content/uploads/2020/08/cricket-vs-football.webp' alt="404 not found" className='img' />
            <h1 className="fs-2 text-body-emphasis my-2">Can Cricket Overtake Football?</h1>
            <p style={{fontSize:'1.6rem',fontWeight:'500',fontFamily:'sans-serif'}}>This is the most debatable question between cricket and football which is more famous or cricket can overtake football in future.check the facts and possiblities in the blog. </p> 
            <Link to='/can-cricket-overtake-football'>
            <button className='btn btn-primary  w-50' >Read more</button>
            </Link>
          </div>
    
    <div className="feature col ">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            </div>
            <img src='/images/FANTASY.png' alt="404 not found" className='img' />
            <h1 className="fs-2 text-body-emphasis my-2">What is fantasy cricket</h1>
            <p  style={{fontSize:'1.6rem',fontWeight:'500',fontFamily:'sans-serif'}}>if you want to play <strong>fantasy cricket</strong>you have to know before playing <strong> What is fantasy Cricket</strong> </p>
            <Link to='/what-is-fantasyCricket'>
            <button className='btn btn-primary  w-50' >Read more</button>
            </Link>
          </div>
          <div className="feature col ">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            </div>
            <img src='https://pbs.twimg.com/media/FDCphp9VgAshKYQ.jpg' alt="404 not found" className='img' />
            <h2  className="fs-2 text-body-emphasis my-2">Should Ipl Be Banned </h2>
            <p   style={{fontSize:'1.6rem',fontWeight:'500',fontFamily:'sans-serif'}}className='my-2' >If you are a ipl fan you should check this blog should ipl banned in india or not.  </p> 
            <Link to='/Should-Ipl-Be-Banned'>
            <button className='btn btn-primary  w-50' >Read more</button>
            </Link>
          </div>
          <div className="feature col ">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            </div>
            <img src='/images/how to make.png' alt="404 not found" className='img' />
            <h2 className="fs-2 text-body-emphasis my-2">How to Earn Money from Fantasy Cricket</h2>
            <p  style={{fontSize:'1.6rem',fontWeight:'500',fontFamily:'sans-serif'}}> if you want to Make Money from <strong>fantasy cricket</strong>you have to know before playing <strong> How You Earn money</strong>check simple steps. </p> 
            <Link to='/How-to-Earn-Money-from-FantasyCricket'>
            <button className='btn btn-primary  w-50' >Read more</button>
            </Link>
          </div>
          <div className="feature col ">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            </div>
            <img src='/images/how to earn money.png' alt="404 not found" className='img' />
            <h2 className="fs-2 text-body-emphasis my-2">Dream11 Investment Plan</h2>
            <p  style={{fontSize:'1.6rem',fontWeight:'500',fontFamily:'sans-serif'}} >if you want to Make Money from <strong>fantasy cricket</strong>check the latest <strong> Fantasy Cricket Investment Plan</strong>check simple steps. </p> 
            <Link to='/Dream11-Investment-Plan'>
            <button className='btn btn-primary w-50' >Read more</button>
            </Link>
          </div>
          <div className="feature col ">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            </div>
            <img src='https://www.iwmbuzz.com/wp-content/uploads/2020/02/all-the-fixing-controversies-of-ipl-over-the-years-920x518.jpg' alt="404 not found" className='img' />
            <h2 className="fs-2 text-body-emphasis my-2"> is ipl sripted or not </h2>
            <p  style={{fontSize:'1.6rem',fontWeight:'500',fontFamily:'sans-serif'}}>check if you want to know ipl is scripted or fixed ? then please check the full blog you will get your answer. </p> 
            <Link to='/is-ipl-scripted-or-not'>
            <button className='btn btn-primary  w-50' >Read more</button>
            </Link>
          </div>
      
          <div className="feature col ">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            </div>
            <img src='/images/shoulcricket.jpg' alt="404 not found" className='img' />
            <h2 className="fs-2 text-body-emphasis my-2 ">Should Cricket Be the National Game of India?</h2>
            <p  style={{fontSize:'1.6rem',fontWeight:'500',fontFamily:'sans-serif'}}>If you are cricket fan so this is the most asked question by cricket fans <strong>Should Cricket Be the National Game of India?</strong>here you will get your answer. </p> 
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
