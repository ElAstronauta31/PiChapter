import React from 'react';
import Header from "./Components/Header/header";
import Home from "./Components/Home/home";
import About from './Components/About/about';
import Join from './Components/Join/join';
import WWA from "./Components/About/whoweare";
import ChapterHistory from "./Components/About/chapterhistory";
import ContactUs from "./Components/About/contactus";
import { Brothers } from './Components/Brothers/brothers';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';



function App() {
  
  const shortpath = window.location.pathname;

  return (
    <Router>
        <div>
          
          <Header/>
          {
            shortpath.includes("/about/") ? <About/> :  null
              
          }
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/join" element={<Join/>} />
            <Route path="/about/whoweare" element={<WWA/>}></Route>
            <Route path="/about/chapterhistory" element={<ChapterHistory/>}></Route>
            <Route path="/about/contactus" element={<ContactUs/>}></Route>
            <Route path="/brothers" element= {<Brothers/>}></Route>
          </Routes>
        </div>
        
    </Router>
  );
}

export default App;
