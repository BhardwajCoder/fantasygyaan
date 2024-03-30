import React,{useState} from 'react'
import './Match.css'
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function Matchdata14() {
  const [sections] = useState([
    { id: 'section1', title: 'Head To Head Records' },
    { id: 'section2', title: 'Pitch Report' },
    { id: 'section3', title: 'LSG vs PBKS Playing11' },
    { id: 'section4', title: 'LSG vs PBKS Dream11 Team' },
    { id: 'section5', title: 'Top Batting Picks' },
    { id: 'section6', title: 'Top All-Rounder Picks' },
    { id: 'section7', title: 'Top Bowling Picks' },
    { id: 'section8', title: 'LSG vs PBKS Fantasy Tips' },
    
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
    <title> LSG vs PBKS Dream11 Prediction Today Match 10 IPL 2024 </title>
    <meta name="description" content="The match between LSG vs PBKS will play on 30th march at Atal Bihari Vajpayee Stadium,Lucknow..check the dream11 teams and fantasy tips." />
    <meta name="keywords" content="LSG vs PBKS Dream11 Prediction,LSG vs PBKS  Today Match,lsg vs pbks dream11 prediction,lsg vs pbks today match prediction,LSG vs PBKS Dream11 Teams" />
    <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
    </Helmet>
      <h1 className='my-2 heading-style' >LSG vs PBKS Dream11 Prediction Today Match-10 IPL 2024</h1>
      <img src="/images/lsgvspbksposter.png" alt="LSG vs PBKS Dream11 Prediction Today Match IPL 2024 "  className='float-end match-img'/>
     <p className='my-3'>The match between LSG vs PBKS will play on 30th march at Atal Bihari Vajpayee Stadium,Lucknow.Both teams are ready for an action pack show.Because Lucknow and Punjab have Good hitters batsmen so we can expect a high scoring match and also a good entertainment for the audience.In this season Lucknow lost their 1st match again RR and on the other side Punjab played 2 matches with 1win or 1 loss so both teams are ready to win.</p>
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
     <h2 className='heading-style'> RCB vs KKR Head to Head Records</h2>
     <div>
     <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"></th>
      <th scope="col">LSG</th>
      <th scope="col">PBKS</th>
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
      <td>257</td>
      <td>201</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Lowest Score</td>
      <td>159</td>
      <td>133</td>
    </tr>
  </tbody>
</table>
     </div>
     </section>
     <section id="section2" className='my-3'>
     <h2 className='heading-style' >RCB vs KKR Pitch Report</h2>
     <p style={{letterSpacing:"1px"}}>The match betwwen RCB vs KKR play at <strong> Atal Bihari Vajpayee Stadium,Lucknow</strong>.The nature of the pitch is good batting wicket .this is the 1st match on this ground so you can expect good batting wicket.stay tuned for official pitch report at toss time. </p>
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
        <td>160</td>
    </tr>
    <tr>
        <td>Weather Conditions</td>
        <td>Sunny</td>
    </tr>
    
</table>
     </div>
     </section>
     
     <section className='my-3'id="section3" >
     <h2 className='heading-style'>LSG vs PBKS Playing11:</h2>
        <p style={{letterSpacing:"1px"}} className='py-3'><strong>LSG Playing11:</strong>Quinton de Kock,KL Rahul(C), Devdutt Padikkal,Ayush Badoni,Deepak Hooda,Nicholas Pooran,Marcus Stonis,Krunal Pandya,Ravi Bishnoi,Mohsin Khan,Naveen-ul-Haq,Yash Thakur</p> 

       <p style={{letterSpacing:"1px"}} className='py-3'><strong>PBKS Playing11:</strong>Shikhar Dhawan(C),Jonny Baristow,Prabhsimran Singh,Liam Livingstone,Sam Curran,Jitesh Sharma(WK),Shashank Singh,Harpreet Brar,Harshal Patel,Kagiso Rabada,Rahul Chahar,Arshdeep Singh</p>
      
     </section>
     </div>
     
     <div className='container style' >
      <section>
      <h3 className='heading-style'>LSG vs PBKS Dream11 Team </h3>
    <img src="/images/lsgvspbksdreamteam.jpeg" alt="LSG vs PBKS Dream11 Team " className=' team-img ' />
      </section>
      <section id='section5'>
      <h3 className='my-3 heading-style'>Top Batting Picks:</h3>
     <ol>
     <li><strong>Shikhar Dhawan</strong>  - Good Recent Form and Venue Stats.</li>
     <li><strong>KL Rahul</strong>- Good Recent Form and Venue Stats.</li>
     <li><strong>Quinton de Kock</strong> - Good Batsmen You Can Try. </li>
     <li><strong>Liam Livingstone</strong>- Good Batsmen. </li>
     </ol>
      </section>
     <section id='section6'>
     <h4 className='heading-style'>Top All-Rounder Picks:</h4>
     <ol>
     <li><strong>Sam Curran</strong>- will be the best pick in all-rounder section</li>
      <li><strong>Krunal Pandya</strong>- he can give points both with bat and ball</li>
     </ol>
     </section>
     <section id='section7'>
     <h4 className='heading-style'>Top Bowling Picks:</h4>
     <ol>
      <li><strong>Kagiso Rabbada </strong>- if PBKS bowl first.</li>
      <li><strong>Naveen-ul-Haq </strong>- you can try in both innings</li>
      <li><strong>Ravi Bishnoi</strong>- pich provide help to spinners</li>
      <li><strong>Yash Thakur</strong>- good recent form and venue stats</li>
     </ol>
     </section>
     <h4 className='heading-style'>Top Captaincy picks:</h4>
     <ol>
      <li><strong>Sam Curran</strong>- can contribute with bat and ball</li>
      <li><strong>KL Rahul</strong>- can contribute with bat and ball- Risky </li>
      <li><strong>Shikhar Dhawan</strong>- Risky pick but you can try</li>
     </ol>
     <section id='section8'>
     <h5 className='heading-style'>Fantasy Bonus tips:</h5>
     <ol>
      <li>you can try Prabhsimran Singh in 1st innings</li>
      <li>you can take Harshal Patel in 1st  inning</li>
      <li>you can try Marcus Stonis in your team contribute with bat and ball.</li>
     </ol>
     </section>
    
     <h6 className='heading-style'>Check out the final team after toss- <Link to='https://www.instagram.com/fantasygyaan9/'>  <FaInstagram size={"1.5rem"}/> </Link> </h6>
     
     </div>
    </>
  )
}

export default Matchdata14
