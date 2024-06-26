import React,{useState} from 'react'
import './Trending.css'
import { Helmet } from 'react-helmet'
function Trending4() {
  const [sections] = useState([
    { id: 'section1', title: 'Dream11 Investment Plan' },
    { id: 'section2', title: 'Contest You Should Play' },
    { id: 'section3', title: 'Conclusion' },
   
    
  ]);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
        <div className='container trending style' >
    <Helmet>
     <title>Dream11 Investment Strategy</title>
     <meta name="description" content="If you play fantasy Cricket so you have to follow this profitable Dream11 Investment Plan for playing with the help of this Dream11 Investment Strategy you will know how to invest and how much invest in single match. " />
     <meta name="keywords" content=" Dream11 Investment Strategy, Fantasy Cricket Investment Strategy,Dream11 Investment Strategy" />
     <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
   </Helmet>
   <h1 className='my-3' style={{fontWeight:"600"}}>Dream11 Investment Strategy: </h1>
   <img src="/images/DREAm11.png" alt="Dream11 Investment plan" className='float-end img-trend' />
   <h2 className='heading-style my-3'>Preview</h2>
   <p >If you want to Earn money from Fantasy Cricket, the most important thing you need is a guide that helps you to guide how to invest your money or which contest is good for you so you can win easily or stay in profit most of the time. for profit you have to follow a before you know what is the Strategy you have to follow some tips if you do not follow investment plan is not working for you.Every fantasy cricket player who earn from fantasy cricket follow an investment plan because without a Investment plan you will never be in profit.  </p>
    <ol>
  <li>Follow Investment plan for 10 days Matches</li>
  <li>Invest Same Amount in Every Match for 10 matches</li>
  <li>Don`t Panic if you lose some matches</li>
    </ol>
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
   <br />
   <section id='section1'>
   <h2 className='heading-style my-3'>Dream11 Investment Plan:</h2>
 <p>This Investment Plan is same for every person who invest big or small amount in Fantasy Cricket .we understand this Investment Strategy as a example</p>
 <br />
 <p>Suppose you have 1000 rupees for a small investor and  for a big investor you can assume  you have 100000 rupees(1lakh). The investment plan is the same for all. <strong>Divide your money in 10 equal parts</strong> and invest the 10th part of your money in every match  doesn't matter if you lose  or win.Invest the same amount <strong>follow this plan for 10 matches</strong>you will definitely get  results.</p>
 <p>When you win 50% matches so you end with profit and on the other hand when you win 35% to 40%  matches so your loss will be minor you will not face huge losses if you follow this plan.</p>
 </section>
 
 <h3 className='heading-style'>Points to Remember:</h3>
 <ol>
    <li>Divide your Money in 10 equal Parts  - total amount/10</li>
    <li>Invest the 10th part of your money in every match.</li>
    <li>Don`t invest High or Low in single matches</li>
    <li>Join Multiple Contests like 2 member,3 member,or 4 member but less don`t invest your whole money in single contest </li>
    <li>Follow this Plan for 10 matches minimum.  </li>
 </ol>
 <section id='section2'>
    <h3 className='heading-style my-3'>Contest You should play </h3>
    <p>The contest you should play for the profit is 2Member or 3Member contets.Dont invest your whole Money in single contest.Suppose you have 1000 rupees so <strong>Invest 40% of money in H2H contest</strong> or <strong>Invest 60% in 3member contest</strong>because the margin of H2H contest is less than 3 Member so you have to Invest 60% of your money in 3 member or 40% in H2H.follow this strategy for 10 matches minimum.if you follow this plan for 10 days you will get result but <strong>Condition is Make your team according to Pitch and Players recent form</strong></p>
    </section>
    <section id='section3'>
    <h4 className='heading-style my-3'>Conclusion</h4>
    <p>If you want to play fantasy cricket so you have to follow this <strong>Dream11 investment plan</strong>because if you have no investment plan or strategy so the chance of your loss is very high because you don`t know how to invest and which contest you should play and in confusion you invest high amount in wrong contest and this will make the reason of your loss and your money will gone so you have to follow investment plan. this investment plan guides you how to invest your money and guides you which contest you should  play
    and how much money you invest in a single match or contest.</p>
    </section>
    <h5 className='heading-style'>Related Article</h5>
    <ol>
      <a href="/what-is-fantasyCricket"><li>what is fantasy Cricket</li></a>
      <a href="/Why-We-Should-Play-Fantasy-Cricket"><li>WHY We Should Play Fantasy Cricket</li></a>
      <a href="/How-to-Earn-Money-from-FantasyCricket"><li>How to Earn Money from Fantasy Cricket</li></a>
    </ol>
 </div>
    </div>
  )
}

export default Trending4
