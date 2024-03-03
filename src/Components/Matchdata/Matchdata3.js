import React from 'react'
import './Match.css'
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function Matchdata3() {
  return (
    <>
    <div className='container Match' style={{fontSize:"1.3rem"}}>
    <Helmet>
    <title>MUS vs LAQ</title>
    <meta name="description" content="Check the Fantasy Predictions and Dream11 Free teams of MUS vs LAQ match.Get the Fantasy Bonus Tips to increase your chance of winnings" />
    <meta name="keywords" content="MUS vs LAQ, PSL free temas,MUS vs LAQ Deam11 teams,Multan vs Lahore Fantasy team" />
    <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
    </Helmet>
      <h1 className='text-center'>MUS vs LAQ</h1>
      <img src="/images/musvslaq.jpg" alt=""  className='float-end match-img'/>
      <p>the match between MUS vs LAQ will play on 27 feb at Multan cricket stadium,Pakistan.get ready for the thriller because in this season we see some high scoring matches already so get ready for one more high scoring encounter.Multan campaign is going good with 4 win out of 5 matches and on the other hand LAH still wait for their 1st win they loose their all 5 matches so they desperately need a win so be ready at 7:30pm for toss and official pitch report updates</p>
     
     <h2>Pitch Report</h2>
     <p>The pitch will be going  batting friendly.Pakistan provides batting friendly wicket so pick batsmen in your team in this pitch Batters will be key with death bowlers .</p>
     <h3>Multan Probable 11</h3>
     <p>Mohammad Rizwan,Dawid Malan,Reeza Hendricks,khusdil Shah,Yasir Khan,Iftikhar Ahmed,Dawid willey,Usama Mir,Abbas Afridi,Mohammad ali,Shahnawaz Dahani</p>
     <h3>Lahore Probable 11</h3>
     <p>S Farhan(wk),Fakhar Zaman,R vd Dussen,A Shafique,Sikandar Raza,C Brathwaite,Jahandad Khan,George Linde,Saheen Afridi,Haris Rauf,Zaman Khan</p>
     
     </div>
     <div className="container">
     <h3>Top Batting Picks</h3>
     <ol>
      <li> <strong>S Farhan</strong></li>
      <li><strong>R vd Dussen</strong>good batting form</li>
      <li><strong>Reeza Hendricks</strong></li>
      <li><strong>Mohammad Rizwan</strong>good batting form with keeping advantage.</li>
     </ol>
     <h4>Top All-Rounder Picks</h4>
     <ol>
      <li><strong>Sikandar Raza </strong></li>
      <li><strong>Iftikhar Ahmed</strong></li>
      <li><strong>David willey</strong></li>
     </ol>
     <h4>Top Bowling Picks</h4>
     <ol>
      <li><strong>Abbas Afridi</strong>if bowl first</li>
      <li><strong>Mohammad Ali</strong>if bowl first</li>
      <li><strong>Shaheen Afridi</strong>pick if bowl first</li>
      <li><strong>Zaman khan</strong> if bowl first</li>
     </ol>
     <h4>Top Captaincy picks</h4>
     <ol>
      <li><strong>Sikandar Raza</strong></li>
      <li><strong>Mohammad Rizwan</strong></li>
      <li><strong>R vd Dussen</strong> if bat 1st</li>
      
     </ol>
     <h5>Fantasy Bonus tips</h5>
     <ol>
      <li>You can try Iftikhar Ahmed as captain if bat first</li>
      <li>you can try Usama Mir if bowl 2nd good form</li>
      <li>you can try Haris Rauf if bowl first</li>
     </ol>
     </div>
     <h6>Check out the final team after toss-  <Link to='https://www.instagram.com/fantasygyaan9/'><FaInstagram size={"1.5rem"}/> </Link></h6>
   
    </>
  )
}

export default Matchdata3
