import React,{useState} from 'react'
import './Match.css'
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function Matchdata19() {
 
    const [sections] = useState([
        { id: 'section1', title: 'RR vs MUM Head To Head Records' },
        { id: 'section2', title: 'RR vs MUM Pitch Report' },
        { id: 'section3', title: 'RR vs MUM Playing11' },
        { id: 'section4', title: 'RR vs MUM Dream11 Team' },
        { id: 'section5', title: 'Top Batting Picks' },
        { id: 'section6', title: 'Top All-Rounder Picks' },
        { id: 'section7', title: 'Top Bowling Picks' },
        { id: 'section8', title: 'RR vs MUM Fantasy Tips' },
        
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
    <title> RR vs MUM Dream11 Prediction, Fantasy Tips </title>
    <meta name="description" content="Check the Best RR vs MUMdream11 predictions check the pitch report and the record of Babar Azam on this venue if you think to make him captain." />
    <meta name="keywords" content="RR vs MUM Dream11 Prediction,MUM vs RR Today Match, RR vs MUM Pitch Report, RRvs MUM Playing11, RR vs MUM Head To Head Records, RR vs MUM Dream11 Team" />
    <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
    </Helmet>
    <h1 className='main-H1 text-center' > RR vs MUM Dream11 Prediction, Fantasy Tips</h1><br />
      <img src="/images/mum vs rr image.png" alt="RR vs MUM Dream11 Prediction, Fantasy Tips "className=' main-img'/> <span> <p>
        <li>Published By: fantasygyaan</li>
        <li>Date: 20-April-2024</li>
      </p>
       </span>
       <div className='player-wrapper'>
       <iframe className='match-video' src="https://www.youtube.com/embed/TbQ_H9OhTnw" title="RR vs MI Dream11 Prediction|RR vs MI Dream11|RR vs MI Dream11 Team|" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
       <h2 className='heading-style my-3'>Preview:</h2>
     <p >This is the  38th match of RR vs MUM  Tata IPL 2024 in Swaai Mansingh Cricket Stadium in Jaipur.RR did great job in this season they are currently table toppers with 12 points with amazing perfomance in their matches and on the other side MUM start their winning campaign again they are currently on 6th position in points table with 6 points perfomance of mumbai is not good in this season they have to perform good if they want to qualify for the playoffs in this season . </p>
     <h3 className='heading-style'>Rajasthan Royals</h3>
     <p>Rajasthan Royals play superb in this season and now they are table toppers with 12 points in table topper.Rajasthan both batting and bowling department did their gob great and that`s the reason that they are table toppers.Rajasthan top order batsmen provide the good start to their team in powerplay and on the other hand bowlers pick early wickets to give early shock to opponents.     </p>
     <h3 className='heading-style'>Mumbai Indians</h3>
     <p>Mumbai Indians perfomance in this seasin is not good in this season but they know how to come back and they start their winning campaign again.Batters did their job good with the bat their top order batsmen provide good start in the power play but the problem is middle order batsmen not maximise their start and in the bowling department except jasprit Bumrah not perform well. they have to improve that. </p>
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
     <h2 className='heading-style'> RR vs MUMHead to Head Records</h2>
     <div>
     <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"></th>
      <th scope="col">RR</th>
      <th scope="col">MUM</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Total Match-29</td>
      <td>13 won</td>
      <td>15 won</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Highest Score</td>
      <td>212</td>
      <td>214</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Lowest Score</td>
      <td>90</td>
      <td>92</td>
    </tr>
  </tbody>
</table>
     </div>
     </section>
     <section id="section2" className='my-3'>
     <h2 className='heading-style' >RR vs MUMPitch Report</h2>
     <p style={{letterSpacing:"1px"}}>The match betwwen RR vs MUMwill be played at <strong>Sawai Mansingh Cricket Stadium</strong>.The nature of the pitch is good  batting wicket .This is the good wicket for Batters and spinners as well. you can expect a good run scoring game in jaipur with some help for spinners.stay tuned for official pitch report at toss time. </p>
     <div>
     <table className='table'>
    <tr>
        <th>Aspect</th>
        <th>Details</th>
    </tr>
    <tr>
        <td>Pitch Behaviour</td>
        <td>Batting Friendly with support for spinners as well</td>
    </tr>
    <tr>
        <td>Average Score</td>
        <td>170-180</td>
    </tr>
    <tr>
        <td>Weather Conditions</td>
        <td>Broken Clouds</td>
    </tr>
    
</table>
     </div>
     </section>
     <section className='my-3'id="section3" >
     <h2 className='heading-style'>RR vs MUM Playing11:</h2>
        <p style={{letterSpacing:"1px"}} className='py-3'><strong>RR Playing11:</strong> <br />Yashasvi Jaiswal,Jos Buttler,Sanju Samson(wk),Riyan Parag,Dhruv Jurel,Ravi Ashwin,Shimron Hetmeyer,Trent Boult,Avesh Khan,Yuzi Chahal,Kuldeep Sen.</p> 

       <p style={{letterSpacing:"1px"}} className='py-3'><strong>MUMPlaying11:</strong> <br />Ishan Kishan(wk),,Rohit Sharma,Suryakumar Yadav,Tilak Verma,Hardik Pandaya,Tim David,Romario Shepherd,Mohammad Nabi,Gerald Coeetze,Shreyas Gopal,Jasprit Bumrah,Akash Madhwal.</p>
      
     </section>
     </div>
     <div className='container style'>
      <section>
      <h3 className='heading-style'>RR vs MUM Dream11 Team </h3>
    <img src="/images/mum vs rr team.jpg" alt="RR vs MUM Dream11 Prediction, Fantasy Tips" className=' team-img ' />
      </section>
      <section id='section5'>
      <h3 className='my-3 heading-style'>Top Batting Picks:</h3>
     <ol>
     <li><strong>Jos Buttler</strong>  - Good Batsmen with attacking approach  also recent form is good in this season.</li>
     <li><strong>Rohit Sharma</strong>- Good Recent Form in this season .</li>
     <li><strong>Ishan Kishan</strong> - Good Batsmen with good recent form also give keeping advantage </li>
     <li><strong>Sanju Samson</strong>- Good attcaking batsmen with keeping advantage. </li>
     <li><strong>Riyan Parag</strong>- he is good touch this season also score consistently.he is good pick in batting section. </li>
     </ol>
      </section>
     <section id='section6'>
     <h4 className='heading-style'>Top All-Rounder Picks:</h4>
     <ol>
     <li><strong>Hardik Pandaya</strong> - Good pick in all-rounder section but bowling not confirmed.</li>
      <li><strong>Romario Shepherd</strong> - good pacer and good power hitter tryable option.</li>
      <li><strong>Mohammad Nabi</strong> - decent spinnerand good power hitter tryable option.</li>
     </ol>
     </section>
     <section id='section7'>
     <h4 className='heading-style'>Top Bowling Picks:</h4>
     <ol>
      <li><strong>Jasprit Bumrah</strong>- he is wicket taking bowler you can try him in both innings.</li>
      <li><strong>Trent Boult </strong>-good death bowler you can try him in 1st innings due to death bowling.</li>
      <li><strong>Yuzi Chahal</strong>- Goodb wicket taking spinner</li>
      <li><strong>Gerlad Coetzee</strong>- Good bowling options you can try him if MUMbowl first. </li>
     </ol>
     </section>
     <h4 className='heading-style'>Top Captaincy picks:</h4>
     <ol>
      <li><strong>Rohit Sharma</strong>- Good form with the bat</li>
      <li><strong>Hardik Pandaya</strong>- his perfomace with the bat improving match by match also provide some overs. </li>
      <li><strong>Jos Buttler</strong>-good consistent scorer.</li>
     </ol>
     <section id='section8'>
     <h5 className='heading-style'> PBKS vs SRH Fantasy tips:</h5>
     <ol>
      <li>you can try Sanju Samson as a captain in this match </li>
      <li>you can take Yashasvi Jaiswal he is big hitter </li>
      <li>you can Dtake Tilak Verma he can score good runs if mum bat first.</li>
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

export default Matchdata19
