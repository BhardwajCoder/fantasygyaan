import React from 'react'
import './Home.css'
import { Helmet } from 'react-helmet';
import { TypeAnimation } from 'react-type-animation';
import Middle from '../Middle/Middle';
import Middle1 from '../Middle1/Middle1';
function Home({ Blogs, handleclick,Newsclick }) {
  return (
    <>
    <div className='container-fluid Home'>
      <div className='Home1'>
      <Helmet>
          <title>Today Match Predictions| Dream 11 Predictions</title>
        <meta name="description" content='Get Updates about Daily Match Prediction ,Latest cricket News,Dream 11 teams,Fantasy Cricket Tips ' />
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
    <meta name="keyword" content=" Dream 11 Predictions,Fantasy Cricket Predictions,Today Match Predictions,Dream 11 teams"/>
    </Helmet>
    <h1 className='H1text color-white' style={{fontFamily:'sans-serif'}}>Get Daily Updates About</h1>
    <h2 className='H2text'>{
     <TypeAnimation  className='font-serif'
     sequence={[
       // Same substring at the start will only be typed out once, initially
       ' Latest Cricket News',
       1000, // wait 1s before replacing "Mice" with "Hamsters"
       'Fantasy Cricket Teams',
       1000,
       ' Cricket Match Predictions',
       1000,
       'Dream 11 Predictions',
       1000
     ]}
     wrapper="span"
     speed={50}
     style={{ fontSize: '1em', color:'white',fontFamily:'sans-serif' }}
     repeat={Infinity}
   />
    }</h2>
      </div>
     <img src="https://dreamtips11.com/wp-content/uploads/2021/06/banner-image.png" className=' Himg' alt="404 not found" />
    </div>
   <Middle  Blogs={ Blogs} handleclick={handleclick} />
   <Middle1  Newsclick={Newsclick} />
    </>
  )
}

export default Home
