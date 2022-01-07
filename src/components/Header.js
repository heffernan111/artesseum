import React from 'react';
import './Header.css';
import { FaGithub } from 'react-icons/fa';
import GitLogo from './GitLogo.js'


const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-md fixed-top">
                <div className="container-fluid">

                    <a className="navbar-brand" href="#">Artesseum<span className="navbar-dot">.</span></a>
                    <GitLogo />
                </div>
            </nav>
        </header>
    );
}


export default Header;
