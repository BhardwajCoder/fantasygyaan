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
import Matchdata4 from './Components/Matchdata/Matchdata4';
import Matchdata6 from './Components/Matchdata/Matchdata6';
import Matchdata7 from './Components/Matchdata/Matchdata7';
import Trending5 from './Components/Trending/Trending5';
import Matchdata8 from './Components/Matchdata/Matchdata8';
import Matchdata9 from './Components/Matchdata/Matchdata9';

function App() {
 
return (
  <>
  <BrowserRouter>
  <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Daily-matches-predictions' element={<Matches  />}/>
      <Route path= '/about' element= {<About/>}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/policy' element={<Policy />}/>
      <Route path='/Ban-w-vs-Mum-w/Match-predictions' element={<Matchdata1 />}/>
      <Route path='/Mum-women-vs-UP-women-Predictions' element={<Matchdata2 />}/>
      <Route path='/MUS-vs-LAQ/MatchPredictions' element={<Matchdata3 />}/>
      <Route path='/QUE-vs-ISL/MatchPredictions' element={<Matchdata4 />}/>
      <Route path='/UP-W-vs-BAN-W/MatchPredictions' element={<Matchdata5 />}/>
      <Route path='/BAN-W-vs-UP-W/MatchPredictions' element={<Matchdata6/>}/>
      <Route path='/LAH-vs-KAR/MatchPredictions' element={<Matchdata7/>}/>
      <Route path='/QUE-vs-KAR/Match-Predictions' element={<Matchdata8/>}/>
      <Route path='/LAH-vs-ISL/Match-Predictions' element={<Matchdata9/>}/>
      <Route path='/MI-NEW-IPL-SQUAD' element={<Newsdata1 />}/>
      <Route path='/CSK-NEW-IPL-SQUAD' element={<Newsdata2 />}/>
      <Route path='/RCB-NEW-IPL-SQUAD' element={<Newsdata3 />}/>
      <Route path='/Rohit-Captaincy-news' element={<Newsdata4/>}/>
      <Route path='/Mohammad-Shami-Ipl-ruled-out' element={<Newsdata5/>}/>
      <Route path='/what-is-fantasyCricket' element={<Trending1 />}/>
      <Route path='/Isit-good-to-play-fantasyCricket' element={<Trending2 />}/>
      <Route path='/How-to-Earn-Money-from-FantasyCricket' element={<Trending3 />}/>
      <Route path='/Dream11-Investment-Plan' element={<Trending4 />}/>
      <Route path='/is-ipl-scripted-or-not' element={<Trending5 />}/>
      <Route path='/latest-cricket-news' element={<Dnews   />}/>
    </Routes>
    </BrowserRouter>
    <div>
<Helmet>
      <title>Today Match Prediction| Dream 11 Prediction</title>
    <meta name="description" content='Fantasygyaan is the best Dream 11 Prediction website.Use the free team generator,detailed Player Stats and match Predictions with analysis' />
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
<meta name="keyword" content="Fantasy Cricket Predictions for free, Dream11 Predictions,Fantasy Cricket News,Today Match Predictions"/>
</Helmet>
</div>
    </>
  )
}

export default App