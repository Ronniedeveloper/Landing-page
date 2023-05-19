import '../styles/nav.css'
import React from 'react';
import { FaSearch,
         FaCircleNotch, 
         FaBookmark,
         FaCaretDown
        } from 'react-icons/fa'
import ronnie from '../images/ronnie.jpg'

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <h3>Anime</h3>
            </div>
            <div className="links">
                <ul>
                    <li>
                        <a href="/">Movies</a>
                    </li>
                    <li>
                        <a href="/shows">TV shows</a>
                    </li>
                    <li>
                        <a href="/animation">Animation</a>
                    </li>
                    <li>
                        <a href="/plan">Plan</a>
                    </li>
                </ul>
            </div>
            <div className="search-container">
                <div className='icons'>
                    <FaSearch className='search'/>
                    <FaCircleNotch className='circle'/>
                    <FaBookmark className='bookmark'/>
                </div>
                <div className="profile">
                    <img src={ronnie} alt="ronnie" className='img'/>
                    <FaCaretDown className='arrow'/>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;