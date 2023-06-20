import React from 'react';
import logo from '../../assets/LOGO.png';

// Constante pour le logo kasa
const LogoNav = () => {
    return (
        <div className='header'>
        <div className='logo'>
            <img src={logo} alt='Logo Kasa' />
            </div>
        <div className='nav'>
        <h2 className='accueil'>Accueil</h2>
        <h2 className='aPropos'>A Propos</h2>
    </div></div>
    );
};


export default LogoNav

