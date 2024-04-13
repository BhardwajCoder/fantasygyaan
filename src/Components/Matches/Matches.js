import React  from 'react'
import './Matches.css'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'
import MatchData from '../DailyMatches';
const Matches =() =>{
 
  return (
      <>
      <div className='input my-3  '>
        <h1 className='container'>Daily Matches -fantasy prediction for free</h1>
        
        <Helmet>
          <title>fantasy prediction for free</title>
        <meta name="description" content='Get Updates about Daily Match Prediction ,Dream 11 teams,Fantasy Cricket Tips ' />
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
    <meta name="keyword" content="PSLprediction for free,today's match prediction dream 11,Dream 11 Predictions,Today Match Predictions,fantasy prediction for free"/>
        </Helmet>
      </div>
      <div className='Blog-card container my-3 ' style={{fontFamily:"sans-serif"}}>
        {
          MatchData.map((match)=>{
            return(
          
               <div  className=" row g-0 border rounded overflow-hidden  text-dark flex-md-row mb-2 shadow-sm h-md-250 position-relative ">
        <div className=" search-card   ">
          <strong className="d-inline-block text-white">{match.league}</strong>
        <h2 className='matches-heading text-center' >{match.Heading}</h2>
        <img src={match.img} alt="" className='search-img ' />  
          <p className=" text-body-secondary bg-light my-2" >{match.Date}</p>
          <p className="cardtext-matches">Check the Dream11 teams, Playing11, Pitch Report and Fantasy Cricket Tips</p>
          <Link to={`/${match.perma}`}>
          <button className='btn btn-primary w-50' > Read More </button>
          </Link>
        </div>
        
      </div>
           
            )
          })
        }
      </div>
      
</>
  )
  }
export default Matches

