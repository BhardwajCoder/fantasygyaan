import React from "react";
import "./Middle.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
function Middle() {
  return (
    <>
     <div className=" container">
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
  <img src="/images/kkr vs dc.png" className="card-img-top" alt="KKR vs RR Dream11 Prediction,Fantasy Tips"/>
  <div className="card-body">
    <h2 className="card-title " >KKR vs DC</h2>
    <p className="card-text"> Check all the updates about this match like Dream11 team,fantasy tips and playing11.</p>
    <Link to='/kkr-vs-dc-dream11-prediction' className="btn btn-primary">Read More</Link>
  </div>
</div>
        <div className="card" >
  <img src="/images/mum vs rr image.png" className="card-img-top" alt="RR vs GT Dream11 Prediction"/>
  <div className="card-body">
    <h2 className="card-title " >RR vs MUM</h2>
    <p className="card-text"> Check all the updates about this match like Dream11 team,fantasy tips and playing11</p>
    <Link to='/rr-vsmum-dream11-prediction' className="btn btn-primary">Read More</Link>
  </div>
</div>
        <div className="card" >
  <img src="/images/pak vs nz poster.png" className="card-img-top" alt="RR vs GT Dream11 Prediction"/>
  <div className="card-body">
    <h2 className="card-title " >PAK vs NZ</h2>
    <p className="card-text"> Check all the updates about this match like Dream11 team,fantasy tips and playing11</p>
    <Link to='/pak-vs-nz-2nd-t20i-dream11-prediction' className="btn btn-primary">Read More</Link>
  </div>
</div>
        <div className="card" >
  <img src="/images/gt vs dc poster.png" className="card-img-top" alt="PBKS vs RR Dream11 Prediction,Fantasy Tips"/>
  <div className="card-body">
    <h2 className="card-title ">GT vs DC</h2>
    <p className="card-text"> Check all the updates about this match like Dream11 team,fantasy tips and playing11.</p>
    <Link to='/gt-vs-dc-dream11-predictions-fantasy-tips' className="btn btn-primary">Read More</Link>
  </div>
</div>
  
        </div>
       </header>
    
      </div>
    </>
  );
}
export default Middle;
