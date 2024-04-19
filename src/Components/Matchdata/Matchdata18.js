import React,{useState} from 'react'
import './Match.css'
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function Matchdata18() {
    const [sections] = useState([
        { id: 'section1', title: 'PAK vs NZ Head To Head Records' },
        { id: 'section2', title: 'PAKvs NZ Pitch Report' },
        { id: 'section3', title: 'PAKvs NZ Playing11' },
        { id: 'section4', title: 'PAKvs NZ Dream11 Team' },
        { id: 'section5', title: 'Top Batting Picks' },
        { id: 'section6', title: 'Top All-Rounder Picks' },
        { id: 'section7', title: 'Top Bowling Picks' },
        { id: 'section8', title: 'PAKvs NZ Fantasy Tips' },
        
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
    <title> PAK vs NZ 2nd T20I Dream11 Prediction, Fantasy Tips </title>
    <meta name="description" content="Check the Best PAK vs NZ dream11 predictions check the pitch report and the record of Babar Azam on this venue if you think to make him captain." />
    <meta name="keywords" content="PAK vs NZ 2nd T20I Dream11 Prediction,NZ vs PAK Today Match, PAK vs NZ Pitch Report, PAKvs NZ Playing11, PAKvs NZ Head To Head Records, PAK vs NZ Dream11 Team" />
    <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
    </Helmet>
    <h1 className='my-2 main-H1 text-center' > PAK vs NZ 2nd T20I Dream11 Prediction, Fantasy Tips</h1><br />
      <img src="/images/pak vs nz poster.png" alt="PAK vs NZ Dream11 Prediction, Fantasy Tips "className=' main-img'/> <span> <p>
        <li>Published By: fantasygyaan</li>
        <li>Date: 16-April-2024</li>
      </p>
       </span>
       <h2 className='heading-style'>Preview:</h2>
     <p className='my-2  '>This is the  2nd match of PAK vs NZ t20I series hosted by pakistan in Rawalpindi Cricket Stadium.Both teams are ready to test their players and prepare them for t20 world cup 2024.In this home series pakistan test their full strength against Newzealand but on the other side Newzeland some main players are injured that`s why their some main players miss the series and new players have chance to prove and attract some attention for the selection in the world cup team. </p>
     <h3 className='heading-style'>Pakistan</h3>
     <p>In this 5 matches t20 series pakistan test their full strength against new zealand and this is the great chance for pakistan to test their players performance before world cup.Also this is the great opportunity for pakistan to try some changes in the team before the world cup let`s see what happens in this series.Pakistani players have to show the intend in this series if they want to win the world cup and performed well to select in the world cup team.    </p>
     <h3 className='heading-style'>Newzeland</h3>
     <p>Newzeland is a great team in all formats but they have no t20 icc trophy yet.in this world cup Newzeland have to step up and their players have to play well but Some main players of Newzealnd not play in this series because of injury and other commitments but this is the chance for youngsters to prove and attract the selection committee focus to be a part of world cup team they have to perform well in this series to boost up their confidence before the world cup. </p>
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
     <h2 className='heading-style'> PAK vs NZ Head to Head Records</h2>
     <div>
     <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"></th>
      <th scope="col">PAK</th>
      <th scope="col">NZ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Total Match-39</td>
      <td>21 won</td>
      <td>17 won</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Highest Score</td>
      <td>201</td>
      <td>226</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Lowest Score</td>
      <td>100</td>
      <td>80</td>
    </tr>
  </tbody>
</table>
     </div>
     </section>
     <section id="section2" className='my-3'>
     <h2 className='heading-style' >PAK vs NZ Pitch Report</h2>
     <p style={{letterSpacing:"1px"}}>The match betwwen PAK vs NZ will be played at <strong>Rawalpindi Cricket Stadium</strong>.The nature of the pitch is good flat batting wicket .This is the good wicket for Batters and Pacers as well. you can expect a high scoring game in Rawalpindi.stay tuned for official pitch report at toss time. </p>
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
        <td>170-180</td>
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
        <p style={{letterSpacing:"1px"}} className='py-3'><strong>PAK Playing11:</strong> <br />,Saim Ayub,Babar Azam,Md Rizwan,Usman Khan,Iftikhar Ahmed,Irfan Khan,Shadab Khan,Shaheen Afridi,Md Amir,Naseem Shah,Abrar Ahmed.</p> 

       <p style={{letterSpacing:"1px"}} className='py-3'><strong>NZ Playing11:</strong> <br />Tim Seifert,Tom Robinson,D Foxcroft,Mark Chapman,James Neesham,M Bracewell,Josh Clarkson,Jacob Duffy,Ben Sears,Ben Lister,Ish Sodhi.</p>
      
     </section>
     </div>
     <div className='container style' >
      <section>
      <h3 className='heading-style'>PBKS vs SRH Dream11 Team </h3>
    <img src="/images/pak vs nz team.jpg" alt="PAK vs NZ Dream11 Prediction, Fantasy Tips" className=' team-img ' />
      </section>
      <section id='section5'>
      <h3 className='my-3 heading-style'>Top Batting Picks:</h3>
     <ol>
     <li><strong>Md Rizwan</strong>  - Good Batsmen with attacking approach  with keepinh advantage also venue stats is very good.</li>
     <li><strong>Saim Ayub</strong>- Good Recent Form but he is not consistent scorer but you can try him as a trump card because he has the ability to score big runs.</li>
     <li><strong>Babar Azam</strong> - Good Batsmen also his record in Rawalpindi is very ecxellent so you can try him. </li>
     <li><strong>Tim Siefert</strong>- Good attcaking batsmen with keeping advantage. </li>
     <li><strong>D Foxcrofy</strong>- he is good touch this season also score consistently.he is good pick in  batting section. </li>
     </ol>
      </section>
     <section id='section6'>
     <h4 className='heading-style'>Top All-Rounder Picks:</h4>
     <ol>
     <li><strong>Shadab Khan</strong> - Good pick in all-rounder section provide 4 overs bowling quota with lower order hitting.</li>
      <li><strong>Iftikhar Ahmed</strong> - decent spinner spinner and good power hitter tryable option.</li>
      <li><strong>Michael Bracewell</strong> - decent spinner spinner and good power hitter tryable option.</li>
      <li><strong>James Neesham</strong> - decent pace bowler and good power hitter tryable option.</li>
     </ol>
     </section>
     <section id='section7'>
     <h4 className='heading-style'>Top Bowling Picks:</h4>
     <ol>
      <li><strong>Shaheen Afridi </strong>- he is wicket taking bowler you can try him in both innings.</li>
      <li><strong>Md Amir </strong>-good death bowler you can try him in 1st innings due to death bowling.</li>
      <li><strong>Naseem Shah</strong>- you can try him If PAK Bowl First</li>
      <li><strong>Jacob Duffy</strong>- Good bowling options you can try him if NZ bowl first. </li>
      <li><strong>Ben Lister</strong>- Good pace bowler with good recent form. </li>
     </ol>
     </section>
     <h4 className='heading-style'>Top Captaincy picks:</h4>
     <ol>
      <li><strong>MD Rizwan</strong>- his record in ahemdabad is very good so you can try him as a captain</li>
      <li><strong>Babar Azam</strong>- his perfomace with the bat improving match by match also provide keeping advantage. </li>
      <li><strong>Shadab Khan</strong>-wicket taking spinner and contribute with the bat if needed.</li>
     </ol>
     <section id='section8'>
     <h5 className='heading-style'> PBKS vs SRH Fantasy tips:</h5>
     <ol>
      <li>you can try Fakhar Zaman in your team if bat first good recent form </li>
      <li>you can take  Mark Chapman in your team  good attacking batsmen</li>
      <li>you can Drop Ish Sodhui because pakistan players play spinner well.</li>
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

export default Matchdata18
