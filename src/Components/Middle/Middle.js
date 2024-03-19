import React from "react";
import "./Middle.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
function Middle() {
  return (
    <>
    <div className="container">
   <h1 className="text-center">Live Matches</h1>
    <iframe src="https://widget.crictimes.org/"title="cricket live score"  style={{width:"100%",minHeight: "450px"}} frameborder="0" scrolling="yes"></iframe>
    </div>
      <h2 className="pb-2 border-bottom my-2 container">Trending Matches </h2>
      <div className="    ">
        <Helmet>
       <title>Trending and Live matches</title>
         <meta name="description" content="Get full details about daily matches and stay updates with daily match predictions and dream11 teams" />
          <meta name="keywords"content="Daily Matches,Trending cricket matches" />
          <meta name="robots" content="follow, index, max-snippet:-1, max-video-previe,max-image-preview:large" />
        </Helmet>
        <header> 
          <div className="Card-Main " style={{ fontFamily: "serif,Georgia" }}>
    
          <div className="card">
      <div className="content">
        <div className="title">Daily Matches</div>
        <div className="price">PBKS vs DC</div>
        <p className="text-white">23-MARCH-2024</p>
        <div className="description">Check the Match preview,Pitch Report with Dream11 prediction and Fantasy Bonus Tips..</div>
      </div>
      <Link to='/pbks-vs-dc-match-predictions'> <button className="w-100">Read More</button></Link>
  </div>

          <div className="card">
      <div className="content">
        <div className="title">Daily Matches</div>
        <div className="price">RCB vs CSK</div>
        <p className="text-white">22-MARCH-2024</p>
        <div className="description">Check the Match preview,Pitch Report with Dream11 prediction and Fantasy Bonus Tips.</div>
      </div>
      <Link to='/rcb-vs-csk-match-predictions'> <button className="w-100">Read More</button></Link>
       
  </div>

  <div className="card">
      <div className="content">
        <div className="title">Daily Matches</div>
        <div className="price">RCB-W vs MUM-W</div>
        <p className="text-white">12-MARCH-2024</p>
        <div className="description">Check the Match preview,Pitch Report with Dream11 prediction and Fantasy Bonus Tips..</div>
      </div>
      <Link to='/RCB-W-vs-MUM-W/Match-predictions'> <button className="w-100">Read More</button></Link>
  </div>
  
  
  <div className="card">
      <div className="content">
        <div className="title">Daily Matches</div>
        <div className="price">MUS vs QUE</div>
        <p className="text-white">12-MARCH-2024</p>
        <div className="description">Check the Match preview,Pitch Report with Dream11 prediction and Fantasy Bonus Tips..</div>
      </div>
      <Link to='/MUS-vs-QUE/Match-Predictions'> <button className="w-100">Read More</button></Link>
  </div>
                    
          </div> 
        </header>
      </div>
    </>
  );
}
export default Middle;
