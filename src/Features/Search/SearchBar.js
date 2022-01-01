import React, { useState } from 'react';
import search from '../../Assets/Icons/search.png';

export const SearchBar = () => {

    const [term, setTerm] = useState('');

    const handleChange = (e) =>{

        const value = e.target.value;

        setTerm(value);
    }

    const handleClick = () =>{
        setTerm('');
    }

    return(

        <form>
            <input type='search' id='search-bar' name='search' value={term} onChange={handleChange}/>
            <button onClick={handleClick}>
                <img src={search} alt='search' />
            </button>
        </form>
     
    )
}