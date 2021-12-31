import React, { useState } from 'react';
import search from '../../Assets/Icons/search.png';
import stylesheet from '../../Stylesheets/Theme';
import { SearchBar } from '../../Features/Search/SearchBar';
import './Nav.css';


export const NavBar = () => {

    const[searchActive, setSearchActive] = useState(false);

    const handleClick = () => {

        const dropdown = document.querySelector('.nav-dropdown');
        const searchBox = document.querySelector('.nav-search');

        if(searchActive){
            
            dropdown.style.maxHeight = '0px';
            dropdown.style.height = '1px';
            searchBox.style.display = 'none';
            setSearchActive(false);
            return;
        }

        dropdown.style.maxHeight = '70px';
        dropdown.style.height = '70px';
        searchBox.style.display = 'flex';
        setSearchActive(true);

    }

    return (
        <div className='nav-bar' style={stylesheet.Typography}>
            <div className='main-nav' style={stylesheet.mainBlocks}>
                <div className='logo'>
                    <div className="logo-container">
                        <h1 style={stylesheet.Logo}> Reddit Minimal </h1>
                    </div>
                </div>
                <button className='search-button' onClick={handleClick} style={stylesheet.contrastBlocks}>
                    <img src={search} alt="search icon" />
                </button>
            </div>
            <div className='nav-dropdown'>
                <div className='nav-search'>
                    <SearchBar />
                </div>
            </div>
        </div>
    )
}