import React,{useState} from 'react'
import './Match.css'
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function Matchdata6() {
  const [sections] = useState([
    { id: 'section1', title: 'Head To Head Records' },
    { id: 'section2', title: 'Pitch Report' },
    { id: 'section3', title: 'RCB vs KKR Playing11' },
    { id: 'section4', title: 'RCB vs KKR Dream11 Team' },
    { id: 'section5', title: 'Top Batting Picks' },
    { id: 'section6', title: 'Top All-Rounder Picks' },
    { id: 'section7', title: 'Top Bowling Picks' },
    { id: 'section8', title: 'RCB vs KKR Fantasy Tips' },
    
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
    <title> RCB vs KKR Dream11 Prediction Today Match 10 IPL 2024 </title>
    <meta name="description" content="Check the free Dream11 Predictions and fantasy tips of rcb vs csk match.This is the 1st match of ipl 2024 will play between rcb vs csk.Both teams have huge fanbase and this is going to be an action pack show for audience." />
    <meta name="keywords" content="RCB vs KKR Dream11 Prediction,RCB vs KKR Today Match,RCB vs KKR Dream11 Prediction Today Match,rcb vs kkr dream11 prediction,RCB vs KKR Dream11 Teams" />
    <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
    </Helmet>
      <h1 className='my-2 heading-style'>RCB vs KKR Dream11 Prediction,Today Match 10 IPL 2024</h1>
      <img src="/images/rcbvskkrposter.jpg" alt="RCB vs KKR Dream11 Prediction Today Match IPL 2024 "  className='float-end match-img'/>
      <ul>
        <li>
        <p className='my-3'>This is the 7th match of ipl 2024 will play between RCB vs KKR.Both teams have huge fanbase and this is going to be an action pack show for audience. KKR shows his ecellent Batting performace in last match against SRH and the RCB chase Beautifully at Chinnaswamy in his last match so the match is going to be fully entertainment because both temas strong area is batting. </p>
        </li>
        <li>
        <p> RCB played 2 matches in this season with 1 loss and 1 victory and on the other side KKR won their 1st match against SRH by 4 runs.Both teams want to win to boost up their confidence let`s see what happens stay tuned for the official updates and team news at toss time.</p>
        </li>
      </ul> 
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
      <section id='section1'className='my-3'>
      <h2 className='heading-style'> RCB vs KKR Head to Head Records</h2>
     <div>
     <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"></th>
      <th scope="col">RCB</th>
      <th scope="col">KKR</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Total Match-32</td>
      <td>14 won</td>
      <td>18 won</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Highest Score</td>
      <td>213</td>
      <td>222</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Lowest Score</td>
      <td>49</td>
      <td>84</td>
    </tr>
  </tbody>
</table>
     </div>
     </section>
     <section id='section2' className='my-3'>
     <h2 className='heading-style'>RCB vs KKR Pitch Report</h2>
     <p>The match betwwen RCB vs KKR play at <strong> M Chinawsamy Stadium,Banglore</strong>.The nature of the pitch is good batting wicket .this is the 2nd match on this ground so you can expect good batting wicket.stay tuned for official pitch report at toss time. </p>
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
        <td>Sunny</td>
    </tr>
    
</table>
     </div>
     </section>
     <section id='section3'>
      <h2 className='heading-style'>RCB vs KKR Squad:</h2>
      <ol>
         <p style={{letterSpacing:"1px"}}><strong>RCB Playing 11:</strong> Faf du Plessis,Virat Kholi,Rajat Patidar,Glenn Maxwell,Cameron Green,Dinesh Karthik(wk),Mayank Dagar,Mohammad Siraj,Reece Topley,Alzari Joseph,Akash Deep,Vijaykumar Vyshak</p>
       <p style={{letterSpacing:"1px"}}><strong>KKR Playing 11: </strong>Phil Salt,Sunil Naraine,Venkatesh Iyer,Shreyas Iyer,Nitish Rana,Ramandeep Singh,Rinku Singh,Andre Russell,Mitchell Starc,Harshit Rana,Varun Chakaravarthy,Suyesh Sharma</p>
      </ol>
      </section>
     </div>
     <div className='container style' >
     <section id='section4'> <h3 className='heading-style'>RCB vs KKR Dream11 Team</h3>
    <img src="/images/rcbvskkr.jpeg" alt="RCB vs KKR Dream11 Team " className=' team-img ' /></section>
     
     <section id='section5'>
     <h3 className='my-3 heading-style'>Top Batting Picks:</h3>
     <ol>
     <li> <strong>Virat Kholi</strong>  - good recent form and venue stats</li>
     <li> <strong>Faf Du Plesis</strong>- good recent form and venue stats</li>
     <li> <strong>Phil Salt</strong> - good batsmen you can try </li>
     <li><strong>Shreyas Iyer</strong>- Good Batsmen </li>
     </ol>
     </section>
     <section id='section6'>
     <h4 className='heading-style'>Top All-Rounder Picks:</h4>
     <ol>
     <li><strong>Glen Maxwell</strong>- will be the best pick in all-rounder section</li>
      <li><strong>Cameron Green</strong>- he can give points both with bat and ball</li>
      <li><strong>Andre Russell</strong>-Batting at no  7 but he can bowl 4 overs full quota</li>
      <li><strong>Sunil Naraine</strong>- will be good pick beacause he can bowl some overs</li>
      
     </ol>
     </section>
    <section id='section7'>
    <h4 className='heading-style'>Top Bowling Picks:</h4>
     <ol>
      <li><strong>Mitchell Starc </strong>- if RCB bowl first.</li>
      <li><strong>Harshit Rana </strong>- you can try in both innings</li>
      <li><strong>Mohammed Siraj</strong>- pich provide help to spinners</li>
      <li><strong>Alzari Joseph</strong>- good recent form and venue stats</li>
      
     </ol>
    </section>
     
     <h4 className='heading-style'>Top Captaincy picks:</h4>
     <ol>
      <li><strong>Glen Maxwell</strong>- can contribute with bat and ball</li>
      <li><strong>Cameron Green</strong>- can contribute with bat and ball- Risky </li>
      <li><strong>Andre Russell</strong>- safe pick but you can try</li>
      <li><strong>Virat Kholi</strong>- risky captain option pick but you can try</li>
     </ol>
     <section id='section8'>
     <h5 className='heading-style'>Fantasy Bonus tips:</h5>
     <ol>
      <li>you can try Dinesh Karthik in 1st innings</li>
      <li>you can take M Siraj in 1st  inning</li>
      <li>you can try Suyesh Sharma in your team.</li>
     </ol>
     </section>
    
     <h6 className='heading-style'>Check out the final team after toss- <Link to='https://www.instagram.com/fantasygyaan9/'>  <FaInstagram size={"1.5rem"}/> </Link> </h6>
     
     </div>
     </>
      
    
  )
}

export default Matchdata6

