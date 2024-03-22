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
        <div className="Dnews  ">
          {
            News.map((news)=>{
              return(
                <div className="card1" key={news.id}>
                <img
                  src={news.img}
                  className="card-img-top img"
                  alt="404 not found"
                />
                <div class="card-body my-2">
                  <h2 class="card-title"style={{fontWeight:"600"}}>{news.Heading}</h2>
                  <p class="card-text" style={{fontSize:"1.6rem"}}>{news.content}</p>
                  <Link to={`/${news.perma}`}>
                   <button  className="btn btn-primary">
                    read more
                   </button>
                  </Link>
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
