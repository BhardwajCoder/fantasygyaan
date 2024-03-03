import React from 'react'
import './News.css'
import { Helmet } from 'react-helmet'

function Newsdata1() {
  return (
    <div className='container News' style={{fontSize:"1.3rem"}}>
      <Helmet>
        <title>MI new IPL squad</title>
        <meta name="description" content="Check the latest MI ipl squad.check your favourite players in squad or not." />
        <meta name="keywords" content=" MI new IPL squad, MI squad 2024" />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
      </Helmet>
      <h1 className='text-center'>MI new IPL squad</h1>
        <img src="/images/Mi.png" alt="MI a ipl franchise team " className='float-end img-news' />
      <p>Mumbai Indians did some big changes in IpL 2024. MI biggest Decision in this season is to remove Rohit Sharma from Captaincy and Hardik Pandya will be the new Captain of Mumbai Indians and MI bought some new players in IPL Auction like South African Pacer Gerald Coetzee With Srilankan Pace Bowler Dilshan Madhushanka and Nuwan Thusara and Afghanistan All-Rounder Muhammad Nabi.In this Season Mumbai Indians will ready to Win sixth title of ipl for their team and Indian All-Rounder Hardik Pandya lead this side in tata IPL 2024</p>
      <h2>Auction picks</h2>
      <p>Gerald Coetzee in  INR 5cr (South Africa ),Dilshan Madhushanka in INR 4.6cr(Srilanka),Nuwan Thusara in INR 4.8cr(Srilanka), Mohammad Nabi in INR 1.scr (Afghanistan).</p>
      <h4>Batters</h4>
      <p> Rohit Sharma ,Dewald Brevis ,SuryaKumar Yadav,Dewald Brevis, Tim David, Nehal Wadhera  </p>
      <h3>Wicketkeeper</h3>
      <p>Ishan Kishan, Vishnu Vinod</p>
      <h4>All-Rounders</h4>
      <p>Hardik Pandya(Captain) , Mohammad Nabi , Romario Shepherd , Shreyas Gopal , Piyush Chawla, Shams Mulani ,Anuk Kamboj</p>
      <h4>Bowlers</h4>
      <p>Jason Behrendroff , Jasprit Bumrah , Gerald Coetzee , Kumar Kartikeya , Dilshan Madhushanka , Nuwan Thusara, Akash Madhwal , Arjun Tendulkar</p>
    </div>
  )
}

export default Newsdata1
