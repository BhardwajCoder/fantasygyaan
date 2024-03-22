import React  from 'react'
import './Matches.css'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'
import MatchData from '../DailyMatches';
const Matches =() =>{
 
  return (
      <>
      <div className='input my-3 '>
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
            <div>
               <div  className="row g-0 border rounded overflow-hidden bg-dark text-white flex-md-row mb-2 shadow-sm h-md-250 position-relative search-card">
        <div className="col p-3 d-flex flex-column position-static">
          <strong className="d-inline-block text-white">{match.league}</strong>
        <h2>{match.Heading}</h2>  
          <div className=" text-body-secondary bg-light" >{match.Date}</div>
          <p className="card-text " style={{fontSize:'1.3rem'}}>View full blog for more details check it out now</p>
          <Link to={`/${match.perma}`}>
          <button className='btn btn-primary' > View </button>
          </Link>
        </div>
        
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

