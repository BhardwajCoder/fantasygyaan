import React,{useState} from 'react'
import './Match.css'
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function Matchdata15() {
    const [sections] = useState([
        { id: 'section1', title: 'SRH vs GT Head To Head Records' },
        { id: 'section2', title: 'SRH vs GT Pitch Report' },
        { id: 'section3', title: 'SRH vs GT Playing11' },
        { id: 'section4', title: 'SRH vs GT Dream11 Team' },
        { id: 'section5', title: 'Top Batting Picks' },
        { id: 'section6', title: 'Top All-Rounder Picks' },
        { id: 'section7', title: 'Top Bowling Picks' },
        { id: 'section8', title: 'SRH vs GT Fantasy Tips' },
        
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
    <title> SRH vs GT Dream11 Prediction Today Match 12 IPL 2024 </title>
    <meta name="description" content="The match between LSG vs PBKS will play on 30th march at Atal Bihari Vajpayee Stadium,Lucknow..check the dream11 teams and fantasy tips." />
    <meta name="keywords" content="SRH vs GT Dream11 Prediction,SRH vs GT Today Match, srh vs gt dream11 prediction, srh vs gt today match prediction,SRH vs GT Dream11 Teams" />
    <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
    </Helmet>
      <h1 className='my-2 heading-style' >SRH vs GT Dream11 Prediction Today Match 12 IPL 2024</h1>
      <img src="/images/SRH VS GT.png" alt="SRH vs GT Dream11 Prediction Today Match 12 IPL 2024 "  className=' main-img'/>
     <p className='my-3 px-1 text-wrap'>The match between SRH vs GT will play on 30th march at Narendra Modi Stadium,Ahmedabad.Both teams are ready for an action pack show.Because Sunrisers Hyderabad and Gujarat have Good hitters batsmen so we can expect a high scoring match and also a good entertainment for the audience.In this season both GT and SRH won 1 match out of their 2 matches so both teams are desperate to win to boost up their teams confidence and rankings in point table.stay tuned for official update and the srh vs gt dream11 prediction.</p>
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
      <th scope="col">SRH</th>
      <th scope="col">GT</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Total Match-3</td>
      <td>1 won</td>
      <td>2 won</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Highest Score</td>
      <td>195</td>
      <td>199</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Lowest Score</td>
      <td>154</td>
      <td>162</td>
    </tr>
  </tbody>
</table>
     </div>
     </section>
     <section id="section2" className='my-3'>
     <h2 className='heading-style' >SRH vs GT Pitch Report</h2>
     <p style={{letterSpacing:"1px"}}>The match betwwen RCB vs KKR play at <strong>Narendra Modi Stadium,Lucknow</strong>.The nature of the pitch is good batting wicket .This is the good wicket for Batters.stay tuned for official pitch report at toss time. </p>
     <div>
     <table className='table'>
    <tr>
        <th>Aspect</th>
        <th>Details</th>
    </tr>
    <tr>
        <td>Pitch Behaviour</td>
        <td>Batting Friendly</td>
    </tr>
    <tr>
        <td>Average Score</td>
        <td>186</td>
    </tr>
    <tr>
        <td>Weather Conditions</td>
        <td>Few Clouds</td>
    </tr>
    
</table>
     </div>
     </section>
     
     <section className='my-3'id="section3" >
     <h2 className='heading-style'>SRH vs GT Playing11:</h2>
        <p style={{letterSpacing:"1px"}} className='py-3'><strong>SRH Playing11:</strong>Travis Head,Mayank Agrawal,Rahul Tripathi,Abhishek Sharma,Adien Markaram,Henrich Klassen,Washington Sundar,Pat Cummins,Bhubneshwar Kumar,T Natrajan,Mayank Markande</p> 

       <p style={{letterSpacing:"1px"}} className='py-3'><strong>GT Playing11:</strong>Wriddhiman Saha(WK),Shubman Gill,Sai Sudharasn,Vijay Shankar,David Miller,Azmatullah Omarzai,Rahul Tewatia,Rashid Khan,Umesh Yadav,Spencer Jhonson,Sai Kishore,Mohit Sharma.</p>
      
     </section>
     </div>
     
     <div className='container style' >
      <section>
      <h3 className='heading-style'>SRH vs GT Dream11 Team </h3>
    <img src="/images/srhvsgtdream11.jpeg" alt="SRH vs GT Dream11 Team " className=' team-img ' />
      </section>
      <section id='section5'>
      <h3 className='my-3 heading-style'>Top Batting Picks:</h3>
     <ol>
     <li><strong>Travis Head</strong>  - Good Recent Form and Venue Stats.</li>
     <li><strong>Shubman Gill</strong>- Good Recent Form and Venue Stats.</li>
     <li><strong>Sai Sudharsan</strong> - Good Batsmen You Can Try. </li>
     <li><strong>Aiden Markaram</strong>- Good Batsmen. </li>
     <li><strong>Henrich Klassen</strong>- Good Batsmen. </li>
     </ol>
      </section>
     <section id='section6'>
     <h4 className='heading-style'>Top All-Rounder Picks:</h4>
     <ol>
     <li><strong>Azmatullah Omarzai</strong>- will be the best pick in all-rounder section</li>
      <li><strong>Marco Jansen</strong>- he can give points both with bat and ball-(IF PLAY)</li>
     <li><strong>Shabaz Ahmed</strong>-good pick in all-rounder section</li>
     </ol>
     </section>
     <section id='section7'>
     <h4 className='heading-style'>Top Bowling Picks:</h4>
     <ol>
      <li><strong>Rashid Khan </strong>- Good Pick in Both Innings.</li>
      <li><strong>Pat Cummins </strong>- you can try in both innings</li>
      <li><strong>Mohit Sharma</strong>- If GT Bowl First</li>
      <li><strong>Spencer Jhonson</strong>- good recent form </li>
     </ol>
     </section>
     <h4 className='heading-style'>Top Captaincy picks:</h4>
     <ol>
      <li><strong>Azmatullah Omarzai</strong>- can contribute with bat and ball</li>
      <li><strong>Shubman Gill</strong>- Good pick </li>
      <li><strong>Henrich Klassen</strong>- Risky option pick but you can try</li>
     </ol>
     <section id='section8'>
     <h5 className='heading-style'>Fantasy Bonus tips:</h5>
     <ol>
      <li>you can take risk on Travis Head because he is hitter type batsmen</li>
      <li>you can take Henrich Klassen in Batting first</li>
      <li>you can try Wriddhiman Saha in your team</li>
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

export default Matchdata15
