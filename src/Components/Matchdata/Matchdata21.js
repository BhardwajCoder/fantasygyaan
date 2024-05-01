import React,{useState} from 'react'
import './Match.css'
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function Matchdata21() {
    const [sections] = useState([
        { id: 'section1', title: 'CSK vs PBKS Head To Head Records' },
        { id: 'section2', title: 'CSK vs PBKS Pitch Report' },
        { id: 'section3', title: 'CSK vs PBKS Playing11' },
        { id: 'section4', title: 'CSK vs PBKS Dream11 Team' },
        { id: 'section5', title: 'Top Batting Picks' },
        { id: 'section6', title: 'Top All-Rounder Picks' },
        { id: 'section7', title: 'Top Bowling Picks' },
        { id: 'section8', title: 'CSK vs PBKS Fantasy Tips' },
        
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
    <title> CSK vs PBKS Dream11 Prediction, Fantasy Tips </title>
    <meta name="description" content="Check the Best CSK vs PBKS dream11 predictions check the pitch report and the record of Batters on this venue if you think to make him captain." />
    <meta name="keywords" content="CSK vs PBKS Dream11 Prediction,PBKS vs CSK Today Match, CSK vs PBKS Pitch Report, CSK vs PBKS Playing11, CSK vs PBKS Head To Head Records, CSK vs PBKS Dream11 Team" />
    <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
    </Helmet>
    <h1 className='main-H1 text-center' > CSK vs PBKS Dream11 Prediction,Fantasy Tips</h1><br />
      <img src="/images/csk vs pbks poster.png" alt="CSK vs PBKS Dream11 Prediction, Fantasy Tips "className=' main-img'/> <span> <p>
        <li>Published By: fantasygyaan</li>
        <li>Date: 29-April-2024</li>
      </p>
       </span>
       <h2 className='heading-style my-3'>Preview:</h2>
     <p >This is the  49th match of CSK vs PBKS Tata IPL 2024 in MA Chidambram Cricket Stadium in Chennai.CSK did great job in this season they are currently hold the 3rd place in points table with 10 points with amazing perfomance in their matches and on the other side PBKS perfomance is not good in this season and they are on 8th position in points table with 6 points in 9 matches.chances of Punjab Kings is still alive so let`s see what happened in this match be ready for the thriller encounter . </p>
     <h3 className='heading-style'>Chennai Super Kings</h3>
     <p>Chennai Super Kings perfomance is good as always thery are currently on 3rd position in points table with 10 points.Chennai top order give good start to their team in the power play and their middle order have explosive power hitters so they easily maximize the start and put the big score on scorecard and their bowlers perfomance is good that`s the reason chennai is on 3red position.</p>
     <h3 className='heading-style'>Punjab Super Kings</h3>
     <p>Punjab Super Kings perfomance in this season is not good they only won 3 matches out of 9 matches and they are on 8th position with 6 points chances to qualify for the playoffs is very less but chances is still alive.PBKS batting side perform well but their bowling department have to step up in upcoming matches they have potential to qualify for the playoffs. </p>
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
     <h2 className='heading-style'> CSK vs PBKS Head to Head Records</h2>
     <div>
     <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"></th>
      <th scope="col">CSK</th>
      <th scope="col">PBKS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Total Match-28</td>
      <td>15 won</td>
      <td>13 won</td>
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
     <h2 className='heading-style' >CSK vs PBKS Pitch Report</h2>
     <p style={{letterSpacing:"1px"}}>The match betwwen CSK vs PBKS will be played at <strong>MA Chindambram Staium Chennai</strong>.The nature of the pitch is good  batting wicket .This is the good wicket for Batters and spinners as well. you can expect a good run scoring game in chennai with some help for spinners.stay tuned for official pitch report at toss time. </p>
     <div>
     <table className='table'>
    <tr>
        <th>Aspect</th>
        <th>Details</th>
    </tr>
    <tr>
        <td>Pitch Behaviour</td>
        <td>Batting Friendly with support for Pacers as well</td>
    </tr>
    <tr>
        <td>Average Score</td>
        <td>175</td>
    </tr>
    <tr>
        <td>Weather Conditions</td>
        <td>Broken Clouds</td>
    </tr>
    
</table>
     </div>
     </section>
     <section className='my-3'id="section3" >
     <h2 className='heading-style'>CSK vs PBKSPlaying11:</h2>
        <p style={{letterSpacing:"1px"}} className='py-3'><strong>CSK Playing11:</strong> <br />Ajinkya Rahane,Ruturaj Gaikwad,Daryl Mitchell,Shivam Dube,Moeen Ali,Ravindra Jadeja,Ms Dhoni(WK),Deepak Chahar,Tushar Deshpande,Mustfizur Rahman,Matheesa Pathirana,Shardul Thakur.</p> 

       <p style={{letterSpacing:"1px"}} className='py-3'><strong>PBKS Playing11:</strong> <br />Prabhsimran Singh,Jonny Baristow,Rilee Rossouw,Sam Curran,Jitesh Sharma,Shashank Singh,Ashutosh Sharma,Harpreet Brar,Harshal Patel,Kagiso Rabbada,Rahul Chahar,Arshdeep Singh.</p>
      
     </section>
     </div>
     <div className='container style'>
      <section>
      <h3 className='heading-style'>CSK vs PBKS Dream11 Team </h3>
    <img src="/images/csk vs pbks team.jpg" alt="CSK vs PBKS Dream11 Prediction, Fantasy Tips" className=' team-img ' />
      </section>
      <section id='section5'>
      <h3 className='my-3 heading-style'>Top Batting Picks:</h3>
     <ol>
     <li><strong>Jonny Baristow</strong>  - Good Batsmen with attacking approach but recent form is not good but you can try if pitch is batting friendly.</li>
     <li><strong>Ruturaj Gaikwad</strong>- Consistent Scorer also recent form is very good and venue stats is also good .</li>
     <li><strong>Shivam Dube</strong> - Good Batsmen with good recent form showing great consistency in this season.  </li>
     <li><strong>Shashank Singjh</strong>- Good batsmen but if Punjab batting first. </li>
     <li><strong>Daryl Mitchell</strong>-You can try but his recent form is not good but good batsmen tryable option. </li>
     </ol>
      </section>
     <section id='section6'>
     <h4 className='heading-style'>Top All-Rounder Picks:</h4>
     <ol>
     <li><strong>Ravindra Jadeja</strong> - Good pick in all-rounder .</li>
      <li><strong>Sam Curran</strong> - good pacer and good power hitter tryable option.</li>
      <li><strong>Moeen Ali</strong> - decent spinner and good power hitter tryable option.</li>
     </ol>
     </section>
     <section id='section7'>
     <h4 className='heading-style'>Top Bowling Picks:</h4>
     <ol>
      <li><strong>Matheesa Pathirana</strong>- he is wicket taking bowler you can try him in both innings.</li>
      <li><strong>Kagiso Rabbada </strong>-good death bowler you can try him in 1st innings due to death bowling.</li>
      <li><strong>Arshdeep Singh</strong>- Good bowler tryable option</li>
      <li><strong>Mustufizur Rahman</strong>- trump card pick in chennai wicket.</li>
     </ol>
     </section>
     <h4 className='heading-style'>Top Captaincy picks:</h4>
     <ol>
      <li><strong>Sam Curran</strong>- Good form with the bat also contribute with the bat</li>
      <li><strong>Ravindra Jadeja</strong>- his perfomace with the bat improving match by match also provide some overs. </li>
      <li><strong>Ruturaj Gaikwad</strong>-good consistent scorer.</li>
     </ol>
     <section id='section8'>
     <h5 className='heading-style'> CSK vs PBKS Fantasy tips:</h5>
     <ol>
      <li>you can Drop Ajinkya Rahane in both innings recent form is not good. </li>
      <li>you can take Ashutosh Sharma if  Punjab Bat first</li>
      <li>you can try Rahul Chahar because chennai wickets support spinners.</li>
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

export default Matchdata21
