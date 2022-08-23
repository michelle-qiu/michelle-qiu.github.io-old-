import React from "react";
import style from './css/App.css';
import {Link} from 'react-router-dom';
import {AiOutlineGithub,AiFillLinkedin,AiOutlineMail} from 'react-icons/ai';

function Nav (){
  return (
    <div className="wrapper">
      <nav className="sidebar">
        <ul className="nav-links">
          
            <Link className='link' to='/home'>
              <li>home</li>
            </Link>
            <Link className='link' to='/about'>
              <li>about</li>
            </Link>
            <Link className='link' to='/experience'>
              <li>experience</li>
            </Link>
            <Link className='link' to='/projects'>
              <li>projects</li>
            </Link>
            <li>
            <a target="_blank" rel="noopener noreferrer" href= 'mailto:michelle.qiu@duke.edu'>
              {<AiOutlineMail className="icon"/>}
            </a>
            </li>
            <li>
            <a  target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/michelle-qiu-2a69ab220/'>
              {<AiFillLinkedin className="icon"/>}
            </a>
            </li>
            <li>
            <a  target="_blank" rel="noopener noreferrer" href='https://github.com/michelle-qiu'>
              {<AiOutlineGithub className="icon"/>}
            </a>
            </li>
          </ul>
      </nav>
    </div>

   )
  };
  export default Nav;
  

