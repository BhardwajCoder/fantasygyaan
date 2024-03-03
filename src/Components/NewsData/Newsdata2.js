import React from 'react'
import './News.css'
import { Helmet } from 'react-helmet'

function Newsdata2() {
  return (
    <div className='container News' style={{fontSize:"1.3rem"}}>
       <Helmet>
        <title>Csk new IPL squad</title>
        <meta name="description" content="Check the latest CSK ipl squad.check your favourite players in squad or not." />
        <meta name="keywords" content=" CSK new IPL squad, MI squad 2024" />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
      </Helmet>
      <h1 className='text-center'>CSK new IPL squad</h1>
        <img src="/images/csk.jpg" alt="Lion in yellow color" className='float-end img-news' />
      <p>"In IPL Auction at Coca-Cola Arena in Dubai.Chennai Super Kings Bought Six new players at the bidding. Csk Purchase the Kiwi Duo of Rachin Ravindra and Darly Mitchell. CSK purchase the Indian All-Rounder Shardul Thakur and the Hard hitting batter from Uttar Pardesh Sameer Rizvi. Now the biggest highliht of this Seaon is Who lead this side in IPL 2024?. Is CSK will look for future Captain In this Season so who will be the new Captain the Contenders are Ravindra Jadeja ,Devon Conway or Rising Ruturaj Gaikwad and apart from that Mahendera Singh Dhoni lead the Super Kings and win the Sixth title of Ipl for Chennai Super Kings</p>
      <h2>Auction picks</h2>
      <p>Rachin Raindra in INR 1.8CR,(Newzeland), Darly Mitchell in INR 14CR (Newzeland),Shardul Thakur in INR 4cr,Sameer Rizvi in 8.40cr , Mustafizur Rahman in INR 2cr , Avanish Rao in INR 20 lakhs</p>
      <h3>Wicketkeeper</h3>
      <p>MS Dhoni, Devon Conway (NZ), Avanish Rao Aravelly</p>
      <h4>Batters</h4>
      <p>Ruturaj Gaikwad, Shaik Rasheed, Ajinkya Rahane, Sameer Rizvi </p>
      <h4>All-Rounders</h4>
      <p>Moeen Ali (ENG), Shivam Dube, Rajvardhan Hangargekar, Ravindra Jadeja, Mitchell Santner (NZ), Ajay Mandal, Nishant Sindhu, Rachin Ravindra (NZ), Daryl Mitchell (NZ), Shardul Thakur</p>
      <h4>Bowlers</h4>
      <p>Deepak Chahar, Tushar Deshpande, Matheesha Pathirana (SL), Simarjeet Singh, Prashant Solanki, Maheesh Theekshana (SL), Mustafizur Rahman (BAN), Mukesh Choudhary.</p>
    </div>
  )
}

export default Newsdata2
