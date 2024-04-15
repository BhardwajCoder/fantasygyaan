import React,{useState} from 'react'
import './Match.css'
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function Matchdata12() {
  const [sections] = useState([
    { id: 'section1', title: 'KKR vs RR Head To Head Records' },
    { id: 'section2', title: 'KKR vs RR Pitch Report' },
    { id: 'section3', title: 'KKR vs RR Playing11' },
    { id: 'section4', title: 'KKR vs RR Dream11 Team' },
    { id: 'section5', title: 'Top Batting Picks' },
    { id: 'section6', title: 'Top All-Rounder Picks' },
    { id: 'section7', title: 'Top Bowling Picks' },
    { id: 'section8', title: 'KKR vs RR Fantasy Tips' },
    
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
    <title>KKR vs RR Dream11 Prediction, Fantasy Tips - fantasygyaan </title>
    <meta name="description" content="Check the Best KKR vs RR Dream11 Predictions with Fantasy Tips .Pitch is very Interesting check before selecting your Players and check  the  Best Picks." />
    <meta name="keywords" content="KKR vs RR Dream11 Prediction,KRR vs RR Today Match,KKR vs RR Pitch Report, KKR vs RR Playing11, KKR vs RR Head To Head Records, KKR vs RR Dream11 Team" />
    <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
    </Helmet>
      <h1 className='my-2 main-H1 text-center' >KKR vs RR Dream11 Prediction,Fantasy Tips.</h1><br />
      <img src="/images/kkr vs rr poster.png" alt="KKR vs RR Dream11 Prediction,Fantasy Tips "className=' main-img'/> <span> <p>
        <li>Published By: fantasygyaan</li>
        <li>Date: 15-April-2024</li>
      </p>
       </span>
     <h2 className='heading-style'>Preview:</h2>
     <p className='my-2  '>This is the match no 31 between will be played between Kolkata Knight Riders and Rajasthan Royals.The Match will play at Eden Gardens Kolkata.The match is going to be a thriller because both the teams have good Batting power and amazing power hitters.Kolkata holds the 2nd Place in points table with 1 loss and 4 victory and on the other side Rajasthan Royals are the table toppers now with 5 victory and 1 loss.so let`see who will win at collect 2 points in this action pack show. </p>
      <h3 className='trend-heading'>Kolkat Knight Riders(KKR)</h3>
      <p>In this season kolkata knight riders in good touch.kolkata knight riders won 4 matches out of their 5 matches.KKR shows great intend in this season with bat and ball they have good power hitters like Russell and Rinku in the middle order and also Kolkata have good top order batsmen they give excellent start in power play.that's the reason KKR holds the 2nd place in points table..</p>
      <h3 className='trend-heading'>Rajasthan Royals(RR)</h3>
      <p>Rajasthan Royals (RR) currently holds the 1st place in points table with 10 points and the reason is his great pace attack and top order.RR have good explosive batsmen in top order like yashasvi jaiswal and jos buttler with sanju samson who provide excellent start in powerplay and the pace attack take early wickets that`s the reason Rajasthan is the table toppers this season.</p>
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
     <h2 className='heading-style'> KKR vs RR Head to Head Records</h2>
     <div>
     <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"></th>
      <th scope="col">KKR</th>
      <th scope="col">RR</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Total Match-28</td>
      <td>14 won</td>
      <td>13 won</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Highest Score</td>
      <td>210</td>
      <td>217</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Lowest Score</td>
      <td>125</td>
      <td>81</td>
    </tr>
  </tbody>
</table>
     </div>
     </section>
     <section id="section2" className='my-3'>
     <h2 className='heading-style' >KKR vs RR Pitch Report</h2>
     <p style={{letterSpacing:"1px"}}>The match between KKR vs RR will be played at <strong>Edens Garden Kolkata</strong>.The nature of the pitch is good batting wicket .This is the good wicket for Batters and Pacers as well.stay tuned for official pitch report at toss time. </p>
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
        <td>175</td>
    </tr>
    <tr>
        <td>Weather Conditions</td>
        <td>Few Clouds</td>
    </tr>
    
</table>
     </div>
     </section>
     
     <section className='my-3'id="section3" >
     <h2 className='heading-style'>KKR vs RR Playing11:</h2>
        <p style={{letterSpacing:"1px"}} className='py-3'><strong>RR Playing11:</strong> <br />Yahasvi Jaiswal,Jos Buttler,Sanju Samson,Riyan Parag,Dhruv Jurel,Shimron Hetmyer,R Ashwin,S Dubey,Trent Boult,Avesh Khan,Kuldeep Sen,Y Chahal.</p> 

       <p style={{letterSpacing:"1px"}} className='py-3'><strong>KKR Playing11:</strong> <br />Phil Salt(wk),Sunil Naraine,Angkrish Raghuvanshi,Shreyas Iyer,Venkatesh Iyer,Andre Russell,Rinku Singh,Ramandeep Singh,Mitchell Starc,Vaibhav Arora(Impact player),Harshit Rana,Varun Chakaravarthy.</p>
      
     </section>
     </div>
     
     <div className='container style' >
      <section id='section4'>
      <h3 className='heading-style'>KKR vs RR Dream11 Team </h3>
    <img src="/images/rr vs kkr team.jpg" alt="KKR vs RR Dream11 Prediction,Fantasy Tips" className=' team-img ' />
      </section>
      <section id='section5'>
      <h3 className='my-3 heading-style'>Top Batting Picks:</h3>
     <ol>
     <li><strong>Phil Salt</strong>:<span> Agressive batsmen and the form is good in this season so you can try him but he can struggle against <strong>trent Boult</strong>  in initaial overs due to swing.</span></li> 
     <li><strong>Sanju Samson</strong>- Good Recent Form in this season and also provide backup with keeping advantage  .</li>
     <li><strong>Y Jaiswal</strong>- Good Batsmen but Recent form is not good but he can score good runs today because <strong> Eden Gardens provides good batting wicket</strong> . </li>
     <li><strong>Riyan Parag</strong>- Good Batsmen with Good Recent Form in this season you can try him in both innings. </li>
     </ol>
      </section>
     <section id='section6'>
     <h4 className='heading-style'>Top All-Rounder Picks:</h4>
     <ol>
     <li><strong>Andre Russell</strong>-he can contribute with bat and ball you can try him in both innings </li>
      <li><strong>Sunil Naraine</strong>- he can give points both with bat and ball also batting at top order with full 4 over quota.</li>
     <li><strong>R Ashwin</strong>-good Bowler with Lower Order Hitting.</li>
     </ol>
     </section>
     <section id='section7'>
     <h4 className='heading-style'>Top Bowling Picks:</h4>
     <ol>
      <li><strong>Trent Boult </strong>- Good Death Bowler and he can take wickets in initial overs also.</li>
      <li><strong>Yuzi Chahal </strong>- good spinners you can take him on both innings.</li>
      <li><strong>Mitchell Starc</strong>- Good pace bowler also bowl in death overs. good pick in 1st innings.</li>
      <li><strong>Vaibhav Arora/Kuldeep Sen</strong>- tryable option if you want to try you can try in 1st innings. </li>
     </ol>
     </section>
     <h4 className='heading-style'>Top Captaincy picks:</h4>
     <ol>
      <li><strong>Andre Russell</strong>-  he can contribute with bat and ball</li>
      <li><strong>Sanju Samson</strong>-  he can contribute with bat also he can give backup with keeping advantage. </li>
      <li><strong>Sunil Naraine</strong>- he can contribute with both bat and ball so you can try him as a captain.</li>
     </ol>
     <section id='section8'>
     <h5 className='heading-style'> KKR vs RR Fantasy tips:</h5>
     <ol>
      <li>you can take risk to drop  Y Jaiswal because he is hitter type batsmen also his recent form is not good.</li>
      <li>you can try Jos Buttler as acaptain in Batting first if play </li>
      <li>you can try Shreyas Iyer in your team but he is not a consistent scorer but he can score good runs in his home ground. -if kolkata Bat first</li>
      <li>you can drop Rinku Singh if Kolkata bat in 2nd innings due to late batting order.</li>
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

export default Matchdata12
