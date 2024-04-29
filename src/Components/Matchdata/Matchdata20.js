import React,{useState} from 'react'
import './Match.css'
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function Matchdata20() {
    const [sections] = useState([
        { id: 'section1', title: 'KKR vs DC Head To Head Records' },
        { id: 'section2', title: 'KKR vs DC Pitch Report' },
        { id: 'section3', title: 'KKR vs DC Playing11' },
        { id: 'section4', title: 'KKR vs DC Dream11 Team' },
        { id: 'section5', title: 'Top Batting Picks' },
        { id: 'section6', title: 'Top All-Rounder Picks' },
        { id: 'section7', title: 'Top Bowling Picks' },
        { id: 'section8', title: 'KKR vs DC Fantasy Tips' },
        
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
    <title> KKR vs DC Dream11 Prediction, Fantasy Tips </title>
    <meta name="description" content="Check the Best KKR vs DC dream11 predictions check the pitch report and the record of Batters on this venue if you think to make him captain." />
    <meta name="keywords" content="KKR vs DC Dream11 Prediction,DC vs KKR Today Match, KKR vs DC Pitch Report, KKR vs DC Playing11, KKR vs DC Head To Head Records, KKR vs DC Dream11 Team" />
    <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
    </Helmet>
    <h1 className='main-H1 text-center' > KKR vs DCDream11 Prediction, Fantasy Tips</h1><br />
      <img src="/images/kkr vs dc.png" alt="KKR vs DC Dream11 Prediction, Fantasy Tips "className=' main-img'/> <span> <p>
        <li>Published By: fantasygyaan</li>
        <li>Date: 27-April-2024</li>
      </p>
       </span>
       <div className='player-wrapper'>
       <iframe className='match-video' src="https://www.youtube.com/embed/YMhSwOArDQo" title="KKR vs DC Dream11 Prediction|KKR vs DC Dream11|KKR vs DC Dream11 Team|" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
       <h2 className='heading-style my-3'>Preview:</h2>
     <p >This is the  47th match of KKR vs DC Tata IPL 2024 in Eden Gardens Kolkata Cricket Stadium in Kolkata.KKR did great job in this season they are currently hold the 2nd place in points table with 10 points with amazing perfomance in their matches and on the other side DC start their winning campaign again they are currently hold 5th position in points table with 10 points perfomance of DelhiCapitals is not good in this season they have to perform good if they want to qualify for the playoffs in this season . </p>
     <h3 className='heading-style'>Kolkata Kinght Riders</h3>
     <p>Kolkata Knight Riders play superb in this season and now they are holding 2nd position with 10 points in table.Kolkata both batting and bowling department did their gob great and that`s the reason that they are on 2nd position on points table.Kolkata top order batsmen provide the good start to their team in powerplay and on the other hand bowlers pick early wickets to give early shock to opponents.</p>
     <h3 className='heading-style'>Delhi Capitals</h3>
     <p>DelhiCapitals perfomance in this seasin is not good in this season but they know how to come back and they start their winning campaign again.Batters did their job good with the bat their top order batsmen provide good start in the power play but the problem is middle order batsmen not maximise their start and in the bowling department  bowlers perfomance is not well. they have to improve that if they want to qualify for the playoffs. </p>
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
     <h2 className='heading-style'> KKR vs DC Head to Head Records</h2>
     <div>
     <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"></th>
      <th scope="col">KKR</th>
      <th scope="col">DC</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Total Match-33</td>
      <td>17 won</td>
      <td>15 won</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Highest Score</td>
      <td>272</td>
      <td>228</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Lowest Score</td>
      <td>97</td>
      <td>98</td>
    </tr>
  </tbody>
</table>
     </div>
     </section>
     <section id="section2" className='my-3'>
     <h2 className='heading-style' >KKR vs DC Pitch Report</h2>
     <p style={{letterSpacing:"1px"}}>The match betwwen KKR vs DC will be played at <strong>Edens Garden KKRkta</strong>.The nature of the pitch is good  batting wicket .This is the good wicket for Batters and Pacers as well. you can expect a good run scoring game in Eden Gardens with some help for Pacers.stay tuned for official pitch report at toss time. </p>
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
        <td>215</td>
    </tr>
    <tr>
        <td>Weather Conditions</td>
        <td>Broken Clouds</td>
    </tr>
    
</table>
     </div>
     </section>
     <section className='my-3'id="section3" >
     <h2 className='heading-style'>KKR vs DCPlaying11:</h2>
        <p style={{letterSpacing:"1px"}} className='py-3'><strong>KKR Playing11:</strong> <br />Phil Salt,Sunil Naraine,Venkatesh Iyer,Andre Russell,Shreyas Iyer,Rinku Singh,Ramandeep Singh,A Raghuvanshi,Dusmantha Chammera,Varun Chakarborthy,Harshit Rana,Anukul Roy.</p> 

       <p style={{letterSpacing:"1px"}} className='py-3'><strong>DC Playing11:</strong> <br />Jake Fraser Mcgurk,Abhishek Porel,Shai Hope,Risabh Pant,Tristan Stubbs,Axar Patel,Kumar Kushagar,Kuldeep Yadav,Lizard Williams,Mukesh Kumar,Khallel Ahmed,R Dar</p>
      
     </section>
     </div>
     <div className='container style'>
      <section>
      <h3 className='heading-style'>KKR vs DC Dream11 Team </h3>
    <img src="/images/kkr vs dc team.jpg" alt="KKR vs DCDream11 Prediction, Fantasy Tips" className=' team-img ' />
      </section>
      <section id='section5'>
      <h3 className='my-3 heading-style'>Top Batting Picks:</h3>
     <ol>
     <li><strong>Risabh Pant</strong>  - Good Batsmen with attacking approach  also recent form is good in this season with keeping advantage.</li>
     <li><strong>Phil Salt</strong>- Good Recent Form in this season with attacking approach with keeping advantage .</li>
     <li><strong>Jake Fraser Mcgurk</strong> - Good Batsmen with good recent form  but he is hit and miss type  </li>
     <li><strong>Shreyas Iyer</strong>- Good batsmen but try if KKR bat first. </li>
     <li><strong>Tristan Stubbs</strong>- he is  ingood touch this season also score consistently.he is good pick in batting section. </li>
     </ol>
      </section>
     <section id='section6'>
     <h4 className='heading-style'>Top All-Rounder Picks:</h4>
     <ol>
     <li><strong>Andre Russell</strong> - Good pick in all-rounder section but bowling not confirmed.</li>
      <li><strong>Sunil Naraine</strong> - good spinner and good power hitter tryable option.</li>
      <li><strong>Axar Patel</strong> - decent spinner and good power hitter tryable option.</li>
     </ol>
     </section>
     <section id='section7'>
     <h4 className='heading-style'>Top Bowling Picks:</h4>
     <ol>
      <li><strong>Mukesh Sharma</strong>- he is wicket taking bowler you can try him in both innings.</li>
      <li><strong>Harshit Rana </strong>-good death bowler you can try him in 1st innings due to death bowling.</li>
      <li><strong>Kuldeep Yadav</strong>- Goodb wicket taking spinner</li>
     </ol>
     </section>
     <h4 className='heading-style'>Top Captaincy picks:</h4>
     <ol>
      <li><strong>Sunil Naraine</strong>- Good form with the bat also contribute with the bat</li>
      <li><strong>Andre Rusell</strong>- his perfomace with the bat improving match by match also provide some overs. </li>
      <li><strong>Risabh Pant</strong>-good consistent scorer with keeping advantage.</li>
     </ol>
     <section id='section8'>
     <h5 className='heading-style'> KKR vs DC Fantasy tips:</h5>
     <ol>
      <li>you can Drop Jake Fraser MCgurk because he is hit and miss type batsmen but risky move </li>
      <li>you can take Lizard Williams in bowling first</li>
      <li>you can take Shreyas Iyer in batting first tryable option.</li>
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

export default Matchdata20
