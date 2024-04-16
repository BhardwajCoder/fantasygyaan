import React,{useState} from 'react'
import './Match.css'
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function Matchdata17() {
    const [sections] = useState([
        { id: 'section1', title: 'GTvs DC Head To Head Records' },
        { id: 'section2', title: 'GTvs DC Pitch Report' },
        { id: 'section3', title: 'GTvs DC Playing11' },
        { id: 'section4', title: 'GTvs DC Dream11 Team' },
        { id: 'section5', title: 'Top Batting Picks' },
        { id: 'section6', title: 'Top All-Rounder Picks' },
        { id: 'section7', title: 'Top Bowling Picks' },
        { id: 'section8', title: 'GTvs DC Fantasy Tips' },
        
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
    <title> GT vs DC Dream11 Prediction, Fantasy Tips - fantasygyaan </title>
    <meta name="description" content="Check the Best GT vs DC dream11 predictions check the pitch report and the record of Shubman Gill on this venue if you think to make him captain ." />
    <meta name="keywords" content="GTvs DC Dream11 Prediction,DC vs GT Today Match, GT vs DC Pitch Report, GTvs DC Playing11, GTvs DC Head To Head Records, GT vs DC Dream11 Team" />
    <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
    </Helmet>
    <h1 className='my-2 main-H1 text-center' > GT vs DC Dream11 Prediction,Fantasy Tips</h1><br />
      <img src="/images/gt vs dc poster.png" alt="GT vs DC Dream11 Prediction, Fantasy Tips "className=' main-img'/> <span> <p>
        <li>Published By: fantasygyaan</li>
        <li>Date: 16-April-2024</li>
      </p>
       </span>
       <h2 className='heading-style'>Preview:</h2>
     <p className='my-2  '>This is the match no 32 between Gujarat Titans and Delhi Capitals.The Match will be played at Narendra Modi Stadium,Ahmedabad .The match is going to be a thriller show because Gujarat Titans start decent in this season.Gujarat Titans currently hold the 6th Place in points table with 3 loss and 3 won and on the other side Delhi Capitals hold the 8th place in points table with 2 victory out of their 6 matches.so let`see who will win and collect 2 points in this action pack show or can Delhi Capitals win this match and earn 2 points in this match..</p>
     <h3 className='heading-style'>Gujarat Titans</h3>
     <p>In this season Gujarat Titans perform well currently holds the 6th place in points table with 6 points.Gujarat Titans finishers plays an important role in their winnings also top order batsmen play well in powerplay.Bowlers did their job great taking wickets in power play also bowl economical in middle phase of the game but they have to step up in upcoming matches to qualify for the playoffs.Batting department should step up because batting side is not that explosive they have to improve it.</p>
     <h3 className='heading-style'>Delhi Capitals</h3>
     <p>The perfomance of Delhi Capitals in this season is not good and delhi capitals currently hold the 2nd last place in points table with 4 points.Delhi Capitals both department performance is very disappointed they have to play good their main weakness is their bowling attack not able to take wickets early and in middle order.Delhi Capitals bowler have to think about their bowling strategy if they want to qualify every match for Delhi Capitals is very crucial so they have to win all remaining matches.. </p>
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
     <h2 className='heading-style'> PBKS vs SRH Head to Head Records</h2>
     <div>
     <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"></th>
      <th scope="col">GT</th>
      <th scope="col">DC</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Total Match-3</td>
      <td>2 won</td>
      <td>1 won</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Highest Score</td>
      <td>162</td>
      <td>171</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Lowest Score</td>
      <td>157</td>
      <td>125</td>
    </tr>
  </tbody>
</table>
     </div>
     </section>
     <section id="section2" className='my-3'>
     <h2 className='heading-style' >GT vs DC Pitch Report</h2>
     <p style={{letterSpacing:"1px"}}>The match betwwen GT vs DC will be played at <strong>Narendara Modi Stadium,Ahemdabad</strong>.The nature of the pitch is good batting wicket .This is the good wicket for Batters and Pacers as well. you can expect a high scoring game in Ahemdabad.stay tuned for official pitch report at toss time. </p>
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
        <td>176</td>
    </tr>
    <tr>
        <td>Weather Conditions</td>
        <td>Clear Sky</td>
    </tr>
    
</table>
     </div>
     </section>
     <section className='my-3'id="section3" >
     <h2 className='heading-style'>PBKS vs SRH Playing11:</h2>
        <p style={{letterSpacing:"1px"}} className='py-3'><strong>GT Playing11:</strong> <br />Sai Sudharsan,Shubman Gill,Matthew Wade(wk),Abhinav Manohar,Vijay Shankar,Rahul Tewatia,Sharukh Khan(impact player),Rashid Khan,Noor Ahmed,Umesh Yadav,Spencer Jhonson,Mohit Sharma.</p> 

       <p style={{letterSpacing:"1px"}} className='py-3'><strong>DC Playing11:</strong> <br />Prithvi Shaw,David Warner,Jake Fraser- Mc Gurk,Risabh Pant,Tristan Stubbs,Shai Hope,Abhishek Porel,Axar Patel,Kuldeep yadav,Mukesh Kumar,iSHANT Sharma,Khaleel Ahmed.</p>
      
     </section>
     </div>
     <div className='container style' >
      <section>
      <h3 className='heading-style'>PBKS vs SRH Dream11 Team </h3>
    <img src="/images/gt vs dc team.jpg" alt="GT vs DC Dream11 Prediction, Fantasy Tips" className=' team-img ' />
      </section>
      <section id='section5'>
      <h3 className='my-3 heading-style'>Top Batting Picks:</h3>
     <ol>
     <li><strong>David Warner</strong>  - Good Batsmen with attacking approach but it`s form is not good in this season but tryable option you can try him.</li>
     <li><strong>Prithvi Shaw</strong>- Good Recent Form but he is not consistent scorer but you can try him as a trump card because he has the ability to score big runs.</li>
     <li><strong>Shubman Gill</strong> - Good Batsmen also his record in Ahemdabad is very ecxellent so you can try him. </li>
     <li><strong>Risabh Pant</strong>- Good attcaking batsmen with keeping advantage. </li>
     <li><strong>Sai Sudharsan</strong>- he is good touch this season also score consistently.he is good pick in  batting section. </li>
     </ol>
      </section>
     <section id='section6'>
     <h4 className='heading-style'>Top All-Rounder Picks:</h4>
     <ol>
     <li><strong>Axar Patel</strong> - Good pick in all-rounder section provide 4 overs bowling quota with lower order hitting.</li>
      <li><strong>Rashid Khan</strong> - good spinner and provide batting in lower order.</li>
     </ol>
     </section>
     <section id='section7'>
     <h4 className='heading-style'>Top Bowling Picks:</h4>
     <ol>
      <li><strong>Kuldeep Yadav </strong>- he is wicket taking spinner you can try him in both innings.</li>
      <li><strong>Mohit Sharmaa </strong>-good death bowler you can try him in 1st innings due to death bowling.</li>
      <li><strong>Spencer Jhonson</strong>- you can try him If GT Bowl First</li>
      <li><strong>Mukesh Kumar/Khaleel Ahmed</strong>- Good bowling options you can try him if you want according the team who bowl first. </li>
     </ol>
     </section>
     <h4 className='heading-style'>Top Captaincy picks:</h4>
     <ol>
      <li><strong>Shubman Gill</strong>- his record in ahemdabad is very good so you can try him as a captain</li>
      <li><strong>Risabh Pant</strong>- his perfomace with the bat improving match by match also provide keeping advantage. </li>
      <li><strong>Rashid Khan</strong>-wicket taking spinner and contribute with the bat if needed.</li>
     </ol>
     <section id='section8'>
     <h5 className='heading-style'> PBKS vs SRH Fantasy tips:</h5>
     <ol>
      <li>you can try Tristan Stubs in your team if bat first good form in this season</li>
      <li>you can take Mathhew Wade good attacking batsmen</li>
      <li>you can Drop Prithvi Shaw because he is not consistent scorer also hit and miss type batsmen.</li>
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

export default Matchdata17
