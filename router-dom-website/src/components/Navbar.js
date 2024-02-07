import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavbarStyles.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className="header">
            <Link to="/">
                <h1>GLX TRVL</h1>
            </Link>
            <div className="hamburger" onClick={handleClick}>
                {click ? <FaTimes size={20} style={{ color: '#fff' }} /> : <FaBars size={20} style={{ color: '#fff' }} />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to="/" onClick={handleClick}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/pricing" onClick={handleClick}>
                        Pricing
                    </Link>
                </li>
                <li>
                    <Link to="/training" onClick={handleClick}>
                        Training
                    </Link>
                </li>
                <li>
                    <Link to="/contact" onClick={handleClick}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
