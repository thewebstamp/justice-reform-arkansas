import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './footer.css';
import StayInformed from '../stayInformed/stayInformed.jsx'

const Footer = ({ home, about, protest, stories, reachout }) => {
    const navigate = useNavigate();

    return (
        <footer className="site-footer">
            <div className="footer-top">
                <div className="newsletter">
                    <StayInformed />
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li onClick={() => {navigate('/')}}><a className={home} href="#">Home</a></li>
                        <li onClick={() => {navigate('/about')}}><a className={about} href="#">About</a></li>
                        <li onClick={() => {navigate('/protest')}}><a className={protest} href="#">Protest</a></li>
                        <li onClick={() => {navigate('/stories')}}><a className={stories} href="#">Stories</a></li>
                        <li onClick={() => {navigate('/reachout')}}><a className={reachout} href="#">Donate</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-disclaimer">
                <p>
                    <strong>Legal Disclaimer:</strong> This website is a platform for public awareness and
                    peaceful advocacy. All content represents constitutionally protected speech under the First
                    Amendment of the U.S. Constitution. The creators and contributors do not condone violence,
                    threats, or any form of unlawful conduct. Information shared is based on documented public
                    accounts, personal experiences, and independent reporting. This site does not assert legal
                    conclusions, and any allegations mentioned are presented as opinion and concern for public
                    interest.
                </p>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Convicted by Corruption. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
