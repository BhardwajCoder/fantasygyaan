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
      <h1 className=" my-4 text-center">Trending Matches </h1>
      <div className="container ">
        <Helmet>
       <title>Trending and Live matches</title>
         <meta name="description" content="Get full details about daily matches and stay updates with daily match predictions and dream11 teams" />
          <meta name="keywords"content="Daily Matches,Trending cricket matches" />
          <meta name="robots" content="follow, index, max-snippet:-1, max-video-previe,max-image-preview:large" />
        </Helmet>
       <header>
        <div className="Card-Main ">
        <div className="card" >
  <img src="/images/pbks vs rr poster.png" className="card-img-top" alt="PBKS vs RR Dream11 Prediction IPL 2024"/>
  <div className="card-body">
    <h2 className="card-title " >PBKS vs RR</h2>
    <p className="card-text"> Check all the updates about this match like Dream11 team,fantasy tips and playing11</p>
    <Link to='/pbks-vs-rr-dream11-prediction' className="btn btn-primary">Read More</Link>
  </div>
</div>

        <div className="card" >
  <img src="/images/rr vs lsg compress poster.png" className="card-img-top" alt="RR vs GT Dream11 Prediction"/>
  <div className="card-body">
    <h2 className="card-title " >RR vs GT</h2>
    <p className="card-text"> Check all the updates about this match like Dream11 team,fantasy tips and playing11</p>
    <Link to='/rr-vs-gt-dream11-prediction-ipl-2024' className="btn btn-primary">Read More</Link>
  </div>
</div>
        <div className="card" >
  <img src="/images/pbksvssrh compressed.png" className="card-img-top" alt="PBKS vs RR Dream11 Prediction,Fantasy Tips"/>
  <div className="card-body">
    <h2 className="card-title ">PBKS vs SRH</h2>
    <p className="card-text"> Check all the updates about this match like Dream11 team,fantasy tips and playing11.</p>
    <Link to='/pbks-vs-srh-dream11-predictions' className="btn btn-primary">Read More</Link>
  </div>
</div>
        <div className="card" >
  <img src="/images/rcb vs rr poster.png" className="card-img-top" alt=""/>
  <div className="card-body">
    <h2 className="card-title " >RCB vs RR</h2>
    <p className="card-text"> Check all the updates about this match like Dream11 team,fantasy tips and playing11.</p>
    <Link to='/rcb-vs-rr-dream11-prediction-today-match-prediction-ipl-2024' className="btn btn-primary">Read More</Link>
  </div>
</div>
        
        
        </div>
       </header>
    
      </div>
    </>
  );
}
export default Middle;
