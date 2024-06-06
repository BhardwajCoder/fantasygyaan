import React,{useState} from 'react'
import './Match.css'
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Matchdata22(){
    const [sections] = useState([
        { id: 'section1', title: 'USA vs PAK Head To Head Records' },
        { id: 'section2', title: 'USA vs PAK Pitch Report' },
        { id: 'section3', title: 'USA vs PAK Playing11' },
        { id: 'section5', title: 'Top Batting Picks' },
        { id: 'section6', title: 'Top All-Rounder Picks' },
        { id: 'section7', title: 'Top Bowling Picks' },
        { id: 'section8', title: 'USA vs PAK Fantasy Tips' },
        
      ]);
      const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return(
<>
<div className='Match container style' >
     <Helmet>
    <title> USA vs PAK Dream11 Prediction, Fantasy Tips </title>
    <meta name="description" content="Check the Best USA vs PAK dream11 predictions check the pitch report and the record of Batters on this venue if you think to make him captain." />
    <meta name="keywords" content="USA vs PAK Dream11 Prediction , USA vs PAK Today Match, USA vs PAK Pitch Report, USA vs PAK Playing11, USA vs PAK Head To Head Records, USA vs PAK Dream11 Team" />
    <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
    </Helmet>
    <h1 className='main-H1 text-center' > USA vs PAK Dream11 Prediction,Fantasy Tips</h1><br />
      <img src="/images/pak vs usa.png" alt="USA vs PAK Dream11 Prediction, Fantasy Tips "className=' main-img'/> <span> <p>
        <li>Published By: fantasygyaan</li>
        <li>Date: 10-june-2024</li>
      </p>
       </span>
       <h2 className='heading-style my-3'>Preview:</h2>
     <p >This is the 11th match of T20 world cup 2024 will play between USA vs PAK in Grand Pairie Stadium.I think this is a good match because USA won their 1st match against canada so their confidence is high and on the other hand this is the 1st match for PAK so they want to win to start their winning carvan in t20 world cup 2024. </p>
      <h2 className='heading-style'>Table of content</h2>
     <div className='table-content container-fluid'>
      <ul>
        {sections.map(section => (
          <li key={section.id} className='py-1 my-2'>
            <a href={`#${section.id}`} onClick={() => scrollToSection(section.id)}>
              {section.title}
            </a>
          </li>
        ))}
      </ul>
     </div>
     <section id="section1" className='my-3'>
     <h2 className='heading-style'> USA vs PAK Head to Head Records</h2>
     <div>
     <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"></th>
      <th scope="col">USA</th>
      <th scope="col">PAK</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Total Match-7</td>
      <td>5 won</td>
      <td>2 won</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Highest Score</td>
      <td>240</td>
      <td>231</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Lowest Score</td>
      <td>120</td>
      <td>92</td>
    </tr>
  </tbody>
</table>
     </div>
     </section>
     <section id="section2" className='my-3'>
     <h2 className='heading-style' >USA vs PAK Pitch Report</h2>
     <p style={{letterSpacing:"1px"}}>The match betwwen USA vs PAK will be played at <strong>Grand Pairie Stadium</strong>.The nature of the pitch is good batting wicket with support for all department pacers and spinners perform well in this ground overall a neutral wicket. </p>
     <div>
     <table className='table'>
    <tr>
        <th>Aspect</th>
        <th>Details</th>
    </tr>
    <tr>
        <td>Pitch Behaviour</td>
        <td>Neutral Wicket</td>
    </tr>
    <tr>
        <td>Average Score</td>
        <td>150</td>
    </tr>
    <tr>
        <td>Weather Conditions</td>
        <td>Broken Clouds</td>
    </tr>
    
</table>
     </div>
     </section>
     <section className='my-3'id="section3" >
     <h2 className='heading-style'>USA vs PAKPlaying11:</h2>
        <p style={{letterSpacing:"1px"}} className='py-3'><strong>USA Playing11:</strong> <br />Steven Taylor,Monak Patel(WK),Andries Gous,Aaron Jones,Nitish Kumar,C Andreson,S V Schalkwyk,Harmeet Singh,Jasdeep Singh,S Netravalkar,Ali Khan</p> 

       <p style={{letterSpacing:"1px"}} className='py-3'><strong>PAK Playing11:</strong> <br />Babar Azam,Mohd Rizwan,Usman Khan,Fakhar Zaman,Azam KhanShadab Khan,Iftikhar Ahmed,Shaheen Afridi,Naseem Shah,Mohd Amir,Haris Rauf.</p>
      
     </section>
     </div>
     <div className='container style'>
      
     
      <section id='section5'>
      <h3 className='my-3 heading-style'>Top Batting Picks:</h3>
     <ol>
     <li><strong>Babar Azam</strong>  - Good Batsmen .</li>
     <li><strong>Mohd Rizwan</strong>  - Good Batsmen with attacking approach .</li>
     <li><strong>Fakhar Zaman</strong> - Good Batsmen tryable option   </li>
     <li><strong>Andries Gous</strong>- attacking Batsmen also recent form is very good </li>
     <li><strong>AAron Jones</strong> - Good Batsmen tryable option   </li>
     </ol>
      </section>
     <section id='section6'>
     <h4 className='heading-style'>Top All-Rounder Picks:</h4>
     <ol>
     <li><strong>Shadab Khan</strong> - Good pick in all-rounder but form is not good .</li>
     <li><strong>S Van Schalk</strong> - Good pace bowler with hard hitting .</li>
     <li><strong>C Andreson</strong> - Good pick in all-rounder .</li>
      <li><strong>S Taylor</strong> - good spinner and good power hitter tryable option.</li>
      
     </ol>
     </section>
     <section id='section7'>
     <h4 className='heading-style'>Top Bowling Picks:</h4>
     <ol>
      <li><strong>Shaheen Afridi</strong>- he is wicket taking bowler. try him in both innings.</li>
      <li><strong>Naseem Shah</strong>- good wicket taking bowler.</li>
      <li><strong> Haris Rauf</strong>-good death bowler try in 1st inning.</li>
      <li><strong>Ali Khan</strong>- Good death bowler tryable option</li>
   
     </ol>
     </section>
     <h4 className='heading-style'>Top Captaincy picks:</h4>
     <ol>
      <li><strong>Steven Taylor</strong>- Good form with the bat also contribute with the ball</li>
      <li><strong>Babar Azam</strong>- his perfomace with the bat improving . </li>
      <li><strong>Mohd Rizwan</strong>-good consistent scorer.</li>
      <li><strong>Shaheen Afridi</strong>-if PAK bowl first.</li>
     </ol>
     <section id='section8'>
     <h5 className='heading-style'> USA vs PAK Fantasy tips:</h5>
     <ol>
      <li>you can drop Azam Khan if bat 2nd </li>
      <li>you PAK drop Fakhar Zaman if bat 2nd</li>
      <li>you can try Monak Patel in your team.</li>
     </ol>
     </section>
     <h5 className='heading-style'>Related Articles</h5>
     <ol>
     <Link to='is-ipl-scripted-or-not'> <li>Is Ipl Scripted Or Not</li></Link>
        <Link to='should-cricket-be-the-national-game-of-india'> <li>Should Cricket Be The National Game Of India</li></Link>
        <Link to='dream11-small-league-winning-tips'> <li>Dream11 Small League Winning Tips</li></Link>
      </ol>
    
     <h6 className='heading-style'>Check out the final team after toss- <Link to='https://www.instagram.com/fantasygyaan9/'>  <FaInstagram size={"1.5rem"}/> </Link> </h6>
     
     </div>
</>
    )
}

export default Matchdata22