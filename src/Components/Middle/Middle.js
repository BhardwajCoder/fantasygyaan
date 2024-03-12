import React from "react";
import "./Middle.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
function Middle() {
  return (
    <>
      <h2 className="pb-2 border-bottom my-2 container">Trending Matches</h2>
      <div className="  mx-4  ">
        <Helmet>
          <table>Trending Matches</table> <meta name="description" content="Get full details about daily matches and stay updates with daily match predictions and dream11 teams" />
          <meta name="keywords"content="Daily Matches,Trending cricket matches" />
          <meta name="robots" content="follow, index, max-snippet:-1, max-video-previe,max-image-preview:large" />
        </Helmet>
        <header>
          <div className="Card-Main " style={{ fontFamily: "serif,Georgia" }}>

          <div className="card">
      <div className="content">
        <div className="title">Daily Matches</div>
        <div className="price">AFG vs IRE</div>
        <p className="text-white">15-MARCH-2024</p>
        <div className="description">Check the Match preview,Pitch Report with Dream11 prediction and Fantasy Bonus Tips.</div>
      </div>
      <Link to='/AFG-vs-IRE-today-Match-predictions'> <button className="w-100">Read More</button></Link>
       
  </div>

          <div className="card">
      <div className="content">
        <div className="title">Daily Matches</div>
        <div className="price">DEL-W vs GUJ-W</div>
        <p className="text-white">13-MARCH-2024</p>
        <div className="description">Check the Match preview,Pitch Report with Dream11 prediction and Fantasy Bonus Tips..</div>
      </div>
      <Link to='/DEL-W-vs-GUJ-W-W/Match-predictions'> <button className="w-100">Read More</button></Link>
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
