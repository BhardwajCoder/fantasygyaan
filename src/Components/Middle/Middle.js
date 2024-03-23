import React from "react";
import "./Middle.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
function Middle() {
  return (
    <>
     <div className="my-2 container">
      <h1 className="text-center">Live Matches</h1>
     <iframe src="https://widget.crictimes.org/" title="live cricket scores" style={{width:"100%",minHeight:"450px"}} frameborder="0" scrolling="yes"></iframe>
     </div>
      <h1 className="  my-4 text-center">Trending Matches </h1>
      <div className="container">
        <Helmet>
       <title>Trending and Live matches</title>
         <meta name="description" content="Get full details about daily matches and stay updates with daily match predictions and dream11 teams" />
          <meta name="keywords"content="Daily Matches,Trending cricket matches" />
          <meta name="robots" content="follow, index, max-snippet:-1, max-video-previe,max-image-preview:large" />
        </Helmet>
        <header> 
          <div className="Card-Main  container" >
          <div className="card">
      <div className="content">
        <div className="title">Daily Matches</div>
        <h2 className="price">SRH vs KKR</h2>
        <p style={{fontSize:'1.3rem'}} className="text-white ">12-MARCH-2024</p>
        <div className="description">Check the Match preview, Pitch Report with Dream11 prediction and Fantasy Bonus Tips..</div>
      </div>
      <Link to='/srh-vs-kkr-dream11-predictions-ipl-2024'> <button className="w-100">Read More</button></Link>
  </div>

          <div className="card">
      <div className="content">
        <div className="title">Daily Matches</div>
        <h2 className="price">PBKS vs DC</h2>
        <p style={{fontSize:'1.3rem'}} className="text-white">23-MARCH-2024</p>
        <div className="description">Check the Match preview,Pitch Report with Dream11 prediction and Fantasy Bonus Tips..</div>
      </div>
      <Link to='/pbks-vs-dc-match-predictions'> <button className="w-100">Read More</button></Link>
  </div>

          <div className="card">
      <div className="content">
        <div className="title">Daily Matches</div>
        <h2 className="price">RCB vs CSK</h2>
        <p style={{fontSize:'1.3rem'}} className="text-white">22-MARCH-2024</p>
        <div className="description">Check the Match preview,Pitch Report with Dream11 prediction and Fantasy Bonus Tips.</div>
      </div>
      <Link to='/rcb-vs-csk-match-predictions'> <button className="w-100">Read More</button></Link>
       
  </div>
          
          </div> 
        </header>
      </div>
    </>
  );
}
export default Middle;
