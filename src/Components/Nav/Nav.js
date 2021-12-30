import React from 'react';
import search from '../../Assets/Icons/search.png';
import menu from '../../Assets/Icons/menu.png';
import stylesheet from '../../Stylesheets/Theme';

export const NavBar = () => {

    return (
        <div className='nav-bar' style={stylesheet.Typography, stylesheet.mainBlocks}>
            <div className='logo'>
                <div className="logo-container">
                    <h1 style={stylesheet.Logo}> Reddit Minimal </h1>
                </div>
            </div>
            <button className='search-button' style={stylesheet.contrastBlocks}>
                <img src={search} alt="search icon" />
            </button>
        </div>
    )
}