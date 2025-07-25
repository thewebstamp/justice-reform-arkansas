import './header.css';
import images from '../../assets/images.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Header({home, about, protest, stories, reachout}) {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const showMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className='header-container'>
            <div className="header">
                <a href="#"><img onClick={() => {navigate('/')}} src={images.logo} alt="Convicted by Corruption Logo" className="logo" /></a>
                <nav >
                    <ul className={menuOpen ? "show-menu" : ""}>
                        <li className={home} onClick={() => { navigate('/') }}><a href="#">Home</a></li>
                        <li className={about} onClick={() => { navigate('/about') }}><a href="#">About</a></li>
                        <li className={protest} onClick={() => { navigate('/protest') }}><a href="#">Protest</a></li>
                        <li className={stories} onClick={() => { navigate('/stories') }}><a href="#">Stories</a></li>
                        <li className={reachout} onClick={() => { navigate('/reachout') }}><a href="#">Donate</a></li>
                    </ul>
                </nav>
                <button onClick={showMenu} id="menu-toggle" className={`menu-toggle ${menuOpen ? 'open' : ''}`}>
                    <span className="hamburger-menu"></span>
                </button>
            </div>
        </header>
    )
};

export default Header;