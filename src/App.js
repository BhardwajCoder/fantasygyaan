import React from 'react'
import { BrowserRouter,Route,Routes} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Matches from './Components/Matches/Matches';
import About from './Components/About/About';
import { Helmet } from 'react-helmet';
import Contact from './Components/Contact/Contact';
import Policy from './Components/Policy';
import Dnews from './Components/DailyNews/Dnews';
import ScrollToTop from './Components/ScrollToTop';
import Matchdata1 from './Components/Matchdata/Matchdata1';
import Matchdata2 from './Components/Matchdata/Matchdata2';
import Matchdata3 from './Components/Matchdata/Matchdata3';
import Newsdata1 from './Components/NewsData/Newsdata1';
import Newsdata2 from './Components/NewsData/Newsdata2';
import Newsdata3 from './Components/NewsData/Newsdata3';
import Trending1 from './Components/Trending/Trending1';
import Trending2 from './Components/Trending/Trending2';
import Trending3 from './Components/Trending/Trending3';
import Trending4 from './Components/Trending/Trending4';
import Newsdata4 from './Components/NewsData/Newsdata4';
import Newsdata5 from './Components/NewsData/Newsdata5';
import Matchdata5 from './Components/Matchdata/Matchdata5';
import './App.css'
import Matchdata6 from './Components/Matchdata/Matchdata6';
import Matchdata7 from './Components/Matchdata/Matchdata7';
import Trending5 from './Components/Trending/Trending5';
import Matchdata8 from './Components/Matchdata/Matchdata8';
import Matchdata9 from './Components/Matchdata/Matchdata9';
import Trending6 from './Components/Trending/Trending6';
import Matchdata10 from './Components/Matchdata/Matchdata10';
import Matchdata11 from './Components/Matchdata/Matchdata11';
import Matchdata12 from './Components/Matchdata/Matchdata12';
import Matchdata13 from './Components/Matchdata/Matchdata13';
import Trending7 from './Components/Trending/Trending7';
import Matchdata14 from './Components/Matchdata/Matchdata14';
import Matchdata15 from './Components/Matchdata/Matchdata15';
import Matchdata16 from './Components/Matchdata/Matchdata16';
import Trending9 from './Components/Trending/Trending9';
import Matchdata17 from './Components/Matchdata/Matchdata17';
import Trending10 from './Components/Trending/Trending10';
import Matchdata18 from './Components/Matchdata/Matchdata18';
import Trending11 from './Components/Trending/Trending11';
import Matchdata19 from './Components/Matchdata/Matchdata19';
import Trending12 from './Components/Trending/Trending12';
import Matchdata20 from './Components/Matchdata/Matchdata20';
import Matchdata21 from './Components/Matchdata/Matchdata21';
import Matchdata22 from './Components/Matchdata/Matchdata22';


function App() {
 
return (
  <>
  <BrowserRouter>
  <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Daily-matches-predictions' element={<Matches  />}/>
      <Route path= '/about-fantasygyaan' element= {<About/>}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/privacy-policy-fantasygyaan' element={<Policy />}/>
      <Route path='/pbks-vs-rr-dream11-prediction' element={<Matchdata1 />}/>
      <Route path='/pbks-vs-dc-match-predictions' element={<Matchdata2 />}/>
      <Route path='/MUS-vs-LAQ/MatchPredictions' element={<Matchdata3 />}/>
      <Route path='/rr-vs-gt-dream11-prediction-ipl-2024' element={<Matchdata5 />}/>
      <Route path='/rcb-vs-kkr-dream11-prediction-today-match-prediction-match10-ipl-2024' element={<Matchdata6/>}/>
      <Route path='/LAH-vs-KAR/MatchPredictions' element={<Matchdata7/>}/>
      <Route path='/srh-vs-kkr-dream11-predictions-ipl-2024' element={<Matchdata8/>}/>
      <Route path='/LAH-vs-ISL/Match-Predictions' element={<Matchdata9/>}/>
      <Route path='/MUS-vs-QUE/Match-Predictions' element={<Matchdata10/>}/>
      <Route path='/rcb-vs-rr-dream11-prediction-today-match-prediction-ipl-2024' element={<Matchdata11/>}/>
      <Route path='/kkr-vs-rr-dream11-predictions-fantasy-tips' element={<Matchdata12/>}/>
      <Route path='/rcb-vs-pbks-dream11-prediction-today-match-ipl-2024' element={<Matchdata13/>}/>
      <Route path='/lsg-vs-pbks-dream11-prediction-today-match-prediction-ipl-2024' element={<Matchdata14/>}/>
      <Route path='/srh-vs-gt-dream11-prediction-today-match-prediction-ipl-2024' element={<Matchdata15/>}/>
      <Route path='/pbks-vs-srh-dream11-predictions' element={<Matchdata16 />}/>
      <Route path='/gt-vs-dc-dream11-predictions-fantasy-tips' element={<Matchdata17 />}/>
      <Route path='/pak-vs-nz-2nd-t20i-dream11-prediction' element={<Matchdata18 />}/>
      <Route path='/rr-vsmum-dream11-prediction' element={<Matchdata19 />}/>
      <Route path='/kkr-vs-dc-dream11-prediction' element={<Matchdata20 />}/>
      <Route path='/csk-vs-pbks-dream11-prediction' element={<Matchdata21 />}/>
      <Route path='/pak-vs-usa-dream11-prediction' element={<Matchdata22 />}/>
      <Route path='/MI-NEW-IPL-SQUAD' element={<Newsdata1 />}/>
      <Route path='/CSK-NEW-IPL-SQUAD' element={<Newsdata2 />}/>
      <Route path='/RCB-NEW-IPL-SQUAD' element={<Newsdata3 />}/>
      <Route path='/Rohit-Captaincy-news' element={<Newsdata4/>}/>
      <Route path='/Mohammad-Shami-Ipl-ruled-out' element={<Newsdata5/>}/>
      <Route path='/what-is-fantasyCricket' element={<Trending1 />}/>
      <Route path='/Should-Ipl-Be-Banned' element={<Trending2 />}/>
      <Route path='/How-to-Earn-Money-from-FantasyCricket' element={<Trending3 />}/>
      <Route path='/dream11-investment-strategy' element={<Trending4 />}/>
      <Route path='/is-ipl-scripted-or-not' element={<Trending5 />}/>
      <Route path='/should-cricket-be-the-national-game-of-india' element={<Trending6 />}/>
      <Route path='/can-cricket-overtake-football' element={<Trending7 />}/>
      <Route path='/dream11-small-league-winning-tips' element={<Trending9 />}/>
      <Route path='/fantasy-cricket-guru' element={<Trending10 />}/>
      <Route path='/mobile-games-like-valorant' element={<Trending11 />}/>
      <Route path='/esport-good-carrer-india' element={<Trending12 />}/>
      <Route path='/latest-cricket-news' element={<Dnews   />}/>
    </Routes>
    </BrowserRouter>
    <div>
<Helmet>
      <title>Today Match Prediction| Dream 11 Prediction</title>
    <meta name="description" content='Check all the latest updates and cricket news,free Dream11 Predictions,Fantasy Tips,Pitch Report and Cricket related New Informations' />
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
<meta name="keyword" content="Fantasy Cricket Predictions for free, Dream11 Predictions,Fantasy Cricket News,Today Match Predictions"/>
</Helmet>
</div>
    </>
  )
}

export default App
