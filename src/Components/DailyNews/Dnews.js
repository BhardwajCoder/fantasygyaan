import React from "react";
import "./Dnews.css";
import { Link } from "react-router-dom";
import News from "../Newsdata";
import { Helmet } from "react-helmet";
function Dnews() {
  return (
    <>
      <h1 className="text-center">News</h1>
      <Helmet>
       <title>Latest Cricket news</title>
       <meta name="description" content="Stay updated with Latest Cricket news and get all the latest news related to cricket" />
       <meta name="keywords" content="Latest Cricket news,Daily Cricket Updates" />
       <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
      </Helmet>
      <div className="container " style={{fontFamily:'sans-serif'}}>
        <div className="Dnews">
          {
            News.map((news)=>{
              return(
               
                <div className="card1 container" >
                <img src={news.img} className="card-img-top img" alt="SRH vs GT Dream11 Predictions"/>
                <div className="card-body">
                  <h2 className="card-title " >{news.Heading}</h2>
                  <p className="card-text"> Check all the updates about this match like Dream11 team,fantasy tips and playing11</p>
                  <Link to={`/${news.perma}`} className="btn btn-primary">Read More</Link>
                </div>
              </div>
             
              )
            })
          }
      
                  
                </div>
              </div>
        
    
    </>
  );
}

export default Dnews;
