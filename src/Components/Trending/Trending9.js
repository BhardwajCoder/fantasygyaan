import React,{useState} from 'react'
import './Trending.css'
import { Helmet } from 'react-helmet'
function Trending9() {
    const [sections] = useState([
        { id: 'section1', title: 'What is Small League in Dream11' },
        { id: 'section2', title: 'Tips To Win Small League in Dream11' },
        { id: 'section3', title: 'Conclusion' },
    
      ]);
      const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
  return (
   <>
   <div className='container trending style'>
   <Helmet>
        <title>Dream11 Small League winning Tips - fantasygyaan</title>
        <meta name="description" content="Check the Best Tips  to win  Small Leagues in Dream11.Get all the information  about small leagues and tips related to small leagues that helps you in winnings." />
        <meta name="keywords" content=" How To Win Small League In Dream11,Tips To Win Small League in Dream11,What is Small League in Dream11 " />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
      </Helmet>
     <h1 className='main-H1 my-2'>Dream11 Small League winning Tips:</h1>
      <section id='section1' className='my-4'>
     <h2 className='trend-heading  '>What is Small League in Dream11</h2>
     <p>Small Leagues are  generally 2 Member,3 Member or 4 Member contests where less no of players play.In these types of contests less risk involved in comparison of Grand leagues or large contests because in these contest few players compete with each other and the amount of winning is less in comparison of grand leagues but due to less risk most of the people prefer small leagues.Small Leagues are the best type of contest for regular winnings and make profit from fantasy cricket. </p>
     </section>
     <img src="/images/how to win small league.png" alt="How To Win Small League In Dream11" className='main-img' />
     <h2 className='heading-style my-3'>Table Of Content</h2>
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
    <section id='section2'>
     <h2 className='trend-heading my-3'>Tips To Win Small League in Dream11</h2>
     <ol>
        <li className='trend-heading'>Choose Your Contests:</li> <span>You have to Choose your contest first that which contest is suitable for you according to your budget. For example 2 Member,3 Member or 4 Member.In 2 Member only two people compete with each other so the chances of winning is 50% but the profit percentage is less and in 3 Member or 4 member profit percentage is high but the chance of winning is little less.  </span>
        <li className='trend-heading'>Divide Your Budget:</li> <span>When you choose your contest you have to divide your budget according to your contest.for example if you have 1000 rs to invest your money in different contests like invest 500rs in 2 Member because chances of winning is 50% in 2 member and invest 300 rs in 3 Member or 200rs in 4 Member so the overall chances of your winning is good if you divide your budget.</span>
        <li className='trend-heading'>Pick 1 or 2 Risky Players:</li> <span>In small leagues people create their team according to selection percentage so the chances of winning is very less when your opponent players are the same so you have to pick 1 or 2 risky players according to match analysis because when your risky players score you can easily win all your contests.</span>
        <li className='trend-heading'>Try Different Captaincy Option:</li> <span>In Small Leagues generally players choose safe captaincy options but we have to choose some different captaincy options because when our captain scores so we can easily win our all contest but we have to be carefull because when we choose wrong captain so we can lose our all contests.</span>
     </ol>
     </section>
     <section id='section3'>
     <h4 className='trend-heading'>Conclusion</h4>
     <p>In above paragraph we disscuss some tips that help you in winning small leagues.you have to follow these tips to earn profit from small leagues.small leagues are the best type of contest to earn regular profit from small leagues.In small leagues competiton is very low in comparison of big contests or grand leagues so people generally prefer small leagues and the chance of winning is very high in small leagues in comparison of risk.Most of the famous fantasy cricket expert play small leagues because small leagues have the potential to give regaular profits and with the help of small leagues they can earn regular profits and sustain for the long time in fantasy cricket field. </p>
     </section>
     <h4 className='trend-heading'>Related Articles</h4>
     <ol className='my-2'>
      <a href="/what-is-fantasyCricket"> <li>what-is-fantasy Cricket</li></a> 
        <a href="/How-to-Earn-Money-from-FantasyCricket"><li>How To Earn Money From Fantasy Cricket</li></a>
       <a href="/dream11-investment-strategy"><li>Dream11-Investment-Strategy</li></a> 
      </ol>
   </div>
   </>
  )
}

export default Trending9
