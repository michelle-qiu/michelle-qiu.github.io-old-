import React,{useState,useEffect,displayLocation} from "react";
import Nav from "./Nav.js";
import Experience from "./pages/Experience.js";
import Projects from "./pages/Projects.js"
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import {BrowserRouter as Router, Routes, Route, useLocation, Navigate} from 'react-router-dom';
import style from "./css/Animation.css";
export default function App(){
    return(
        <Router >
            <div className="Website" id="Main Page">
                <title>Michelle Qiu</title>
                <Nav></Nav>
                <Content>
                </Content>
           </div>
           <footer>
                <div className="footer">
                <p>© Copyright 2022 Michelle Qiu. Made with <a href="https://github.com/facebook/create-react-app/" target="_blank" rel="noopener noreferrer"><strong>React</strong></a>,
                hosted by <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer"><strong>GitHub Pages</strong></a>, and coded <a href="https://github.com/michelle-qiu/michelle-qiu.github.io/" target="_blank" rel="noopener noreferrer"><strong> here</strong></a>.
                </p>   
                </div>
            </footer> 
        </Router> 
        
    )
};

function Content() {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransistionStage] = useState("fadeIn");
    useEffect(() => {
        if (location !== displayLocation) setTransistionStage("fadeOut");
      }, [location, displayLocation]);
    
      return (
        <div
          className={`${transitionStage}`}
          onAnimationEnd={() => {
            if (transitionStage === "fadeOut") {
              setTransistionStage("fadeIn");
              setDisplayLocation(location);
            }
          }}
        >
          <Routes location={displayLocation}>
          <Route path={'/'}>
                    <Route path={ '/'} element={<Home/>}/>
                    <Route path={'/home'} element= {<Home/>}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={ '/experience'} element={<Experience/>}/>
                    <Route path={ '/projects'} element={<Projects/>}/>
                    </Route>
                </Routes>
        </div>
      );
    }

    /*          <Routes location={displayLocation}>
              <Route path={ '/'} element={<Home/>}/>
              <Route path={'/home'} element= {<Home/>}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'/experience'} element={<Experience/>}/>
                    <Route path={'/projects'} element={<Projects/>}/>
          </Routes>
          <Router basename="/#">
            <Routes>
            <Route path={ '/'} element={<Home/>}/>
              <Route path={'/home'} element= {<Home/>}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'/experience'} element={<Experience/>}/>
                    <Route path={'/projects'} element={<Projects/>}/>
            </Routes>
          </Router>*/