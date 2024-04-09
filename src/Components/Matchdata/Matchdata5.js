import React,{useState} from 'react'
import './Match.css'
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function Matchdata5() {
  const [sections] = useState([
    { id: 'section1', title: 'RR vs GT Head To Head Records' },
    { id: 'section2', title: 'RR vs GT Pitch Report' },
    { id: 'section3', title: 'RR vs GT Playing11' },
    { id: 'section4', title: 'RR vs GT Dream11 Team' },
    { id: 'section5', title: 'Top Batting Picks' },
    { id: 'section6', title: 'Top All-Rounder Picks' },
    { id: 'section7', title: 'Top Bowling Picks' },
    { id: 'section8', title: 'RR vs GT Fantasy Tips' },
    
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
    <title>RR vs GT Dream11 Prediction IPL 2024 - fantasygyaan </title>
    <meta name="description" content="Check the Best RR vs GT Dream11 Predictions with Fantasy Tips.Pitch is very Interesting check before selecting your Players and check the Best Picks." />
    <meta name="keywords" content="RR vs GT Dream11 Prediction,RR vs GT Today Match Prediction,RR vs GT Pitch Report, RR vs GT Playing11,RR vs GT Head To Head Records,RR vs GT Dream11 Team" />
    <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
    </Helmet>
      <h1 className='my-2 main-H1' >RR vs GT Dream11 Prediction IPL 2024 - Playing11,Pitch Report,Fantasy Tips and Free Dream11 Team.</h1><br />
      <img src="/images/rr vs lsg compress poster.png" alt="RR vs GT Dream11 Prediction"className=' main-img'/><span><p>
        <li>Published By: fantasygyaan</li>
        <li>Date: 09-April-2024</li>
      </p>
       </span>
     <h2 className='heading-style'>Preview:</h2>
     <p className='my-2'>This is the match no 24 between Rajasthan Royals and Gujarat Titans.The Match will play at Swai Mansingh Stadium Jaipur.The match is going to be a thriller because both the teams have good Batting Units and amazing power hitters.Rajasthan Royals currently hold the 1st Place in points table with 4 victory  on the other side Gujarat Titans hold the 7th place with same 3 loss and 2 won .so let`see who will win at collect 2 points in this action pack show.</p>
      <h2 className='heading-style'>Table of content</h2>
     <div className='table-content container-fluid'>
      <ul>
        {sections.map(section =>(
          <li key={section.id} className='py-1 my-2'>
            <a href={`#${section.id}`} onClick={() => scrollToSection(section.id)}>
              {section.title}
            </a>
          </li>
        ))}
      </ul>
     </div>
     <section id="section1" className='my-3'>
     <h2 className='heading-style'> RR vs GT Head to Head Records</h2>
     <div>
     <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"></th>
      <th scope="col">RR</th>
      <th scope="col">GT</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Total Match-5</td>
      <td>4 won</td>
      <td>1 won</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Highest Score</td>
      <td>188</td>
      <td>192</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Lowest Score</td>
      <td>118</td>
      <td>177</td>
    </tr>
  </tbody>
</table>
     </div>
     </section>
     <section id="section2" className='my-3'>
     <h2 className='heading-style' >RR vs GT Pitch Report</h2>
     <p style={{letterSpacing:"1px"}}>The match betwwen RCB vs KKR play at <strong>Swai Mansingh Stadium ,Jaipur</strong>.The nature of the pitch is good batting wicket .This is the good wicket for Batters and Pacers as well.stay tuned for official pitch report at toss time. </p>
     <div>
     <table className='table'>
    <tr>
        <th>Aspect</th>
        <th>Details</th>
    </tr>
    <tr>
        <td>Pitch Behaviour</td>
        <td>Batting Friendly with some support for Pacers</td>
    </tr>
    <tr>
        <td>Average Score</td>
        <td>176</td>
    </tr>
    <tr>
        <td>Weather Conditions</td>
        <td>Broken Clouds</td>
    </tr>
    
</table>
     </div>
     </section>
     
     <section className='my-3'id="section3" >
     <h2 className='heading-style'>RR vs GT Playing11:</h2>
        <p style={{letterSpacing:"1px"}} className='py-3'><strong>RR Playing11:</strong> <br />Yahasvi Jaiswal,Jos Buttler,Sanju Samson,Riyan Parag,Dhruv Jurel,Shimron Hetmyer,R Ashwin,S Dubey,Trent Boult,Avesh Khan,Nandre Burger,Y Chahal.</p> 

       <p style={{letterSpacing:"1px"}} className='py-3'><strong>GT Playing11:</strong> <br />Sai Sudharsan,Shubman Gill,Kane Williamson,BR Sharath(WK),Darshan Nalkande,Rashid Khan,Umesh Yadav,Spencer JhonsonNoor Ahmed,Mohit Sharma.</p>
      
     </section>
     </div>
     
     <div className='container style' >
      <section>
      <h3 className='heading-style'>RR vs GT Dream11 Team </h3>
    <img src="/images/rr vs gt dream11 team.jpg" alt="PBKS vs SRH Dream11 Prediction,Fantasy Tips" className=' team-img ' />
      </section>
      <section id='section5'>
      <h3 className='my-3 heading-style'>Top Batting Picks:</h3>
     <ol>
     <li><strong>Jos Buttler</strong>  - Good Batsmen .</li>
     <li><strong>Yashasvi Jaiswal</strong>- Good Attacking Batsmen.</li>
     <li><strong>Sanju Samson</strong> - Good form this season with Keeping Advantage. </li>
     <li><strong>Sai Sudharsan</strong>- Good Recent Form. </li>
     <li><strong>Shubman Gill</strong>- Good Batsmen and Consistent Scorer. </li>
     </ol>
      </section>
     <section id='section6'>
     <h4 className='heading-style'>Top All-Rounder Picks:</h4>
     <ol>
     <li><strong>R Ashwin</strong>- 4 overs and lower order hitting</li>
      <li><strong>Riyan Parag</strong>- Good Batsmen but less Bowling Chances 1-2 overs</li>
     </ol>
     </section>
     <section id='section7'>
     <h4 className='heading-style'>Top Bowling Picks:</h4>
     <ol>
      <li><strong>Trent Boult </strong>- Good Death Bowler.</li>
      <li><strong>Y Chahal </strong>- you can try in both innings</li>
      <li><strong>Mohit Sharma</strong>-Good Pick If GT Bowl First</li>
      <li><strong>Nandre Burger/ Rashid Khan</strong>- Good Option You can try. </li>
     </ol>
     </section>
     <h4 className='heading-style'>Top Captaincy picks:</h4>
     <ol>
      <li><strong>Sam Curran</strong>- can contribute with bat and ball</li>
      <li><strong>Sikandar Raza</strong>- can contribute with bat and ball </li>
      <li><strong></strong>- Risky option pick but you can try</li>
     </ol>
     <section id='section8'>
     <h5 className='heading-style'> RR vs GT Fantasy tips:</h5>
     <ol>
      <li>you can take risk on Yashasvi Jaiswal because he is hitter type batsmen</li>
      <li>you can take Kane Williamson in Batting first</li>
      <li>you can take Wridhiman Saha decent pick with keeping advantage.</li>
     </ol>
     </section>
     <h5 className='heading-style'>Related Articles</h5>
     <ol>
      <a href="/what-is-fantasyCricket"> <li>what-is-fantasyCricket</li></a> 
        <a href="/How-to-Earn-Money-from-FantasyCricket"><li>How-to-Earn-Money-from-FantasyCricket</li></a>
       <a href="/Dream11-Investment-Plan"><li>/Dream11-Investment-Plan</li></a> 
      </ol>
    
     <h6 className='heading-style'>Check out the final team after toss- <Link to='https://www.instagram.com/fantasygyaan9/'>  <FaInstagram size={"1.5rem"}/> </Link> </h6>
     
     </div>
 </>
  )
}

export default Matchdata5
