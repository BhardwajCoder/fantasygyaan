import React,{useState} from 'react'
import './Match.css'
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function Matchdata11() {
  const [sections] = useState([
    { id: 'section1', title: 'RCB vs RR Head To Head Records' },
    { id: 'section2', title: 'RCB vs RR Pitch Report' },
    { id: 'section3', title: 'RCB vs RR Playing11' },
    { id: 'section4', title: 'RCB vs RR Dream11 Team' },
    { id: 'section5', title: 'Top Batting Picks' },
    { id: 'section6', title: 'Top All-Rounder Picks' },
    { id: 'section7', title: 'Top Bowling Picks' },
    { id: 'section8', title: 'RCB vs RR Fantasy Tips' },
    
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
    <title> RCB vs RR Dream11 Prediction Today Match 19 IPL 2024 </title>
    <meta name="description" content="The match between RCB vs RR will play on 30th march at Swai Mansingh Stadium,Jaipur.check the dream11 teams and fantasy tips for good winnings." />
    <meta name="keywords" content="RCB vs RR Dream11 Prediction,RCB vs RR Today Match, rcb vs rr dream11 prediction, rcb vs rr today match prediction,RCB vs RR Dream11 Teams" />
    <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
    </Helmet>
      <h1 className='my-2 heading-style' >RCB vs RR Dream11 Prediction Today Match-19 IPL 2024</h1>
      <img src="/images/rcb vs rr poster.png" alt="RCB vs RR Dream11 Prediction Today Match 12 IPL 2024 "  className='float-end match-img'/>
     <p className='my-3 px-1 text-wrap'>This is the 19th match of ipl 2024 will play between RCB and RR.In this season Royal Challengers Bangalore only won 1 match out of their 4 matches the performance in this season is disappointed but on the other hand Rajasthan Royals won their all 3 matches and hold the 2nd no spot in points table.In this match RCB players have to step up in both batting and bowling department to win this match But Rajasthan Royals are ready to get his 4 consecutive win.so stay tuned what happens in this match check out the dream11 teams,pitch report and fantasy tips for this match.    </p>
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
     <h2 className='heading-style'> SRH vs GT Head to Head Records</h2>
     <div>
     <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"></th>
      <th scope="col">RCB</th>
      <th scope="col">RR</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Total Match-30</td>
      <td>15 won</td>
      <td>12 won</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Highest Score</td>
      <td>200</td>
      <td>217</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Lowest Score</td>
      <td>70</td>
      <td>58</td>
    </tr>
  </tbody>
</table>
     </div>
     </section>
     <section id="section2" className='my-3'>
     <h2 className='heading-style' >RCB vs RR Pitch Report</h2>
     <p style={{letterSpacing:"1px"}}>The match betwwen RCB vs RR play at <strong>Swai Mansingh Stadium,Jaipur</strong>.The nature of the pitch is good batting wicket with some help for spinners .This is the good wicket for Batters and spinners.stay tuned for official pitch report at toss time. </p>
     <div>
     <table className='table'>
    <tr>
        <th>Aspect</th>
        <th>Details</th>
    </tr>
    <tr>
        <td>Pitch Behaviour</td>
        <td>Batting Friendly with some help for spinners</td>
    </tr>
    <tr>
        <td>Average Score</td>
        <td>162</td>
    </tr>
    <tr>
        <td>Weather Conditions</td>
        <td>Broken Clouds</td>
    </tr>
    
</table>
     </div>
     </section>
     
     <section className='my-3'id="section3" >
     <h2 className='heading-style'>RCB vs RR Playing11:</h2>
        <p style={{letterSpacing:"1px"}} className='py-3'><strong>RCB Playing11:</strong>Faf du Plessis,Virat Kholi,Rajat Patidar,Glenn Maxwell,Cameron Green,Mahipal Lomror,Dinesh Karthik(wk),Mayank Dagar,Mohammad Siraj,Reece Topley,Yash Dayal</p> 

       <p style={{letterSpacing:"1px"}} className='py-3'><strong>RR Playing11:</strong>Yashasvi Jaiswal,Jos Buttler(wk),Sanju Samson,Riyan Parag,R Ashwin,Shubham Dubey,Dhruv Jurel,Simron Hetmyer,Trent Boult,Avesh Khan,Nandre Burger,Yuzi Chahal.</p>
      
     </section>
     </div>
     
     <div className='container style' >
      <section>
      <h3 className='heading-style'>RCB vs RR Dream11 Team </h3>
    <img src="/images/rcb vs rr dream team.jpeg" alt="rcb vs rr dream11 teams " className=' team-img ' />
      </section>
      <section id='section5'>
      <h3 className='my-3 heading-style'>Top Batting Picks:</h3>
     <ol>
     <li><strong>Yashasvi Jaiswal</strong>  - Good Recent Form and Venue Stats.</li>
     <li><strong>Jos Buttler</strong>- Good Player .</li>
     <li><strong>Virat Kholi</strong> - Great Batting form this season. </li>
     <li><strong>Faf DU Plessis</strong>- Good Batsmen you can try. </li>
     <li><strong>Riyan Parag</strong>- Good form with the bat but if bat at top order. </li>
     </ol>
      </section>
     <section id='section6'>
     <h4 className='heading-style'>Top All-Rounder Picks:</h4>
     <ol>
     <li><strong>Gllen Maxwell</strong>- will be the best pick in all-rounder section</li>
      <li><strong>Cameron Green</strong>- he can give points both with bat and ball</li>
     <li><strong>Ravi Ashwin</strong>-good pick in all-rounder section</li>
     </ol>
     </section>
     <section id='section7'>
     <h4 className='heading-style'>Top Bowling Picks:</h4>
     <ol>
      <li><strong>Yuzi Chahal </strong>- Good Pick in Both Innings.</li>
      <li><strong>Nandre Burger </strong>- Good pick if RR bowl first</li>
      <li><strong>Trent Boult</strong>- Good Pick in Both Innings</li>
      <li><strong>Reece Topley</strong>- good Bowler you can try </li>
     </ol>
     </section>
     <h4 className='heading-style'>Top Captaincy picks:</h4>
     <ol>
      <li><strong>Glen Maxwell</strong>- can contribute with bat and ball</li>
      <li><strong>Virat Kholi</strong>- Good pick </li>
      <li><strong>Jos Buttler</strong>- Risky option pick but you can try</li>
     </ol>
     <section id='section8'>
     <h5 className='heading-style'>Fantasy Bonus tips:</h5>
     <ol>
      <li>you can take risk on Yashavu Jaiswal because he is hitter type batsmen but highly risky move</li>
      <li>you can take Dinesh Karthik if bat first</li>
      <li>you can Try Cameron Green as a captain or vice captain option in your team</li>
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

export default Matchdata11
