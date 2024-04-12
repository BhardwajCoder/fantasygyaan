import React,{useState} from 'react'
import './Match.css'
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function Matchdata1() {
  const [sections] = useState([
    { id: 'section1', title: 'PBKS vs RR Head To Head Records' },
    { id: 'section2', title: 'PBKS vs RR Pitch Report' },
    { id: 'section3', title: 'PBKS vs RR Playing11' },
    { id: 'section4', title: 'PBKS vs RR Dream11 Team' },
    { id: 'section5', title: 'Top Batting Picks' },
    { id: 'section6', title: 'Top All-Rounder Picks' },
    { id: 'section7', title: 'Top Bowling Picks' },
    { id: 'section8', title: 'PBKS vs RR Fantasy Tips' },
    
  ]);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
   <div className='Match container style' >
    <Helmet>
    <title> PBKS vs RR  Dream11 Prediction IPL 2024 - fantasygyaan </title>
    <meta name="description" content="Check the Best PBKS vs RR Dream11 Predictions with Fantasy Tips .Pitch is very Interesting check before selecting your Players and check  the  Best Picks." />
    <meta name="keywords" content="PBKS vs RR Dream11 Prediction,RR vs GT Today Match,PBKS vs RR Pitch Report, PBKS vs RR Playing11, PBKS vs RR Head To Head Records, PBKS vs RR Dream11 Team" />
    <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
    </Helmet>
      <h1 className='my-2 main-H1' >PBKS vs RR Dream11 Prediction IPL 2024</h1><br />
      <img src="/images/pbks vs rr poster.png" alt="PBKS vs RR Dream11 Prediction IPL 2024 "className=' main-img'/> <span> <p>
        <li>Published By: fantasygyaan</li>
        <li>Date: 12-April-2024</li>
      </p>
       </span>
     <h2 className='heading-style'>Preview:</h2>
     <p className='my-2  '>This is the match no 27 between Punjab kings and Sunrisers Hyderabad.The Match will play at Maharaja Yadavindra Stadium,Mullanpur.The match is going to be a thriller because both the teams have good Batting Units and amazing power hitters.Punjab Kings  holds the 8th Place in points table with 3 loss and 2 won and on the other side Rajasthan Royals are the table toppers now with 4 victory and 1 loss.so let`see who will win at collect 2 points in this action pack show.</p>
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
     <h2 className='heading-style'> PBKS vs RR Head to Head Records</h2>
     <div>
     <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"></th>
      <th scope="col">PBKS</th>
      <th scope="col">RR</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Total Match-26</td>
      <td>11 won</td>
      <td>15 won</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Highest Score</td>
      <td>223</td>
      <td>226</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Lowest Score</td>
      <td>124</td>
      <td>112</td>
    </tr>
  </tbody>
</table>
     </div>
     </section>
     <section id="section2" className='my-3'>
     <h2 className='heading-style' >PBKS vs RR Pitch Report</h2>
     <p style={{letterSpacing:"1px"}}>The match between PBKS vs RR will be played at <strong>Maharaja Yadavindra Stadium,Mullanpur Mohali</strong>.The nature of the pitch is good batting wicket .This is the good wicket for Batters and Pacers as well.stay tuned for official pitch report at toss time. </p>
     <div>
     <table className='table'>
    <tr>
        <th>Aspect</th>
        <th>Details</th>
    </tr>
    <tr>
        <td>Pitch Behaviour</td>
        <td>Batting Friendly with support for Pacers</td>
    </tr>
    <tr>
        <td>Average Score</td>
        <td>162</td>
    </tr>
    <tr>
        <td>Weather Conditions</td>
        <td>Clear Sky</td>
    </tr>
    
</table>
     </div>
     </section>
     
     <section className='my-3'id="section3" >
     <h2 className='heading-style'>PBKS vs RR Playing11:</h2>
        <p style={{letterSpacing:"1px"}} className='py-3'><strong>RR Playing11:</strong> <br />Yahasvi Jaiswal,Jos Buttler,Sanju Samson,Riyan Parag,Dhruv Jurel,Shimron Hetmyer,R Ashwin,S Dubey,Trent Boult,Avesh Khan,Kuldeep Sen,Y Chahal.</p> 

       <p style={{letterSpacing:"1px"}} className='py-3'><strong>PBKS Playing11:</strong> <br />Shikhar Dhawan(C),Jonny Baristow,Prabhsimran Singh,Sam Curran,Sikandar Raza,Jitesh Sharma(WK),Shashank Singh,Ashutosh Sharma,Harpreet Brar,Harshal Patel,Kagiso Rabada,Arshdeep Singh.</p>
      
     </section>
     </div>
     
     <div className='container style' >
      <section id='section4'>
      <h3 className='heading-style'>PBKS vs RR Dream11 Team </h3>
    <img src="/images/pbks vs rr dream11 team.jpg" alt="PBKS vs RR Dream11 Prediction,Fantasy Tips" className=' team-img ' />
      </section>
      <section id='section5'>
      <h3 className='my-3 heading-style'>Top Batting Picks:</h3>
     <ol>
     <li><strong>Shikhar Dhawan</strong>  - Good Recent Form and Venue Stats.</li>
     <li><strong>Sanju Samson</strong>- Good Recent Form and Venue Stats.</li>
     <li><strong>Jos Buttler</strong> - Good Batsmen and Consistent Scorer. </li>
     <li><strong>Y Jaiswal</strong>- Good Batsmen but Recent form is not good . </li>
     <li><strong>Riyan Parag</strong>- Good Batsmen with Good Recent Form. </li>
     </ol>
      </section>
     <section id='section6'>
     <h4 className='heading-style'>Top All-Rounder Picks:</h4>
     <ol>
     <li><strong>Sam Curran</strong>- will be the best pick in all-rounder section</li>
      <li><strong>Sikandar Raza</strong>- he can give points both with bat and ball-(IF PLAY)</li>
     <li><strong>R Ashwin</strong>-good Bowler with Lower Order Hitting.</li>
     </ol>
     </section>
     <section id='section7'>
     <h4 className='heading-style'>Top Bowling Picks:</h4>
     <ol>
      <li><strong>Trent Boult </strong>- Good Death Bowler.</li>
      <li><strong>Yuzi Chahal </strong>- you can try in both innings</li>
      <li><strong>Kagiso Rabbada</strong>- If GT Bowl First</li>
      <li><strong>Arshdeep/Kuldeep Sen</strong>- tryable option if you want to try </li>
     </ol>
     </section>
     <h4 className='heading-style'>Top Captaincy picks:</h4>
     <ol>
      <li><strong>Sam Curran</strong>- can contribute with bat and ball</li>
      <li><strong>Sikandar Raza</strong>- can contribute with bat and ball </li>
      <li><strong>Sanju Samson</strong>- Risky option pick but you can try</li>
     </ol>
     <section id='section8'>
     <h5 className='heading-style'> PBKS vs RR Fantasy tips:</h5>
     <ol>
      <li>you can take risk on Y Jaiswal because he is hitter type batsmen</li>
      <li>you can try Jos Buttler as acaptain in Batting first</li>
      <li>you can try Shashank Singh in your team -if punjab Bat first</li>
     </ol>
     </section>
     <h5 className='heading-style'>Related Articles</h5>
     <ol>
      <a href="/what-is-fantasyCricket"> <li>what-is-fantasyCricket</li></a> 
        <a href="/How-to-Earn-Money-from-FantasyCricket"><li>How-to-Earn-Money-from-FantasyCricket</li></a>
      
      </ol>
    
     <h6 className='heading-style'>Check out the final team after toss- <Link to='https://www.instagram.com/fantasygyaan9/'>  <FaInstagram size={"1.5rem"}/> </Link> </h6>
     
     </div>
     </>
  )
}

export default Matchdata1
