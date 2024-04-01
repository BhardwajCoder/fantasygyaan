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
      <div className="container " >
        <div className="grid-body">
          {
            News.map((news)=>{
              return(
                <div class="news-card">
                <img src={news.img} alt="Cricket News" className="news-card img"/>
                <div class="card-content ">
                    <h2 className="my-2">{news.Heading}</h2>
                    <p className="news-style">Enjoy the latest highlights of the cricket match. Catch all the action and unforgettable moments with our coverage.</p>
                    <Link to={`/${news.perma}`}><button className="btn btn-primary">Read More</button></Link>
                    
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
