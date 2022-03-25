import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBrush} from '@fortawesome/free-solid-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core'
import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='header '>
               <h1><FontAwesomeIcon icon={ faBrush
            }></FontAwesomeIcon>MakeUp Corner</h1>
              <div>
              <a href="/home">Home</a>
               <a href="/details">Details</a>
               <a href="/about">About</a>
               {/* <a href="/contact">Contact</a> */}
              </div>
            </nav>
        </div>
    );
};

export default Header;