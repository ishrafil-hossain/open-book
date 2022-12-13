import React from 'react';
import './Navbar.css'
import { TbLanguage } from 'react-icons/tb';
import { SiInternetarchive } from 'react-icons/si';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container navbar-item'>
                <p><SiInternetarchive size={25} /> INTERNET ARCHIVE</p>
                <div className='mb-3'>
                    <button className='nav-btn'>Donate</button>
                    <TbLanguage className='ms-3' size={25} />
                </div>
            </div>

        </div>
    );
};

export default Navbar;