import React, { useState } from 'react';
import search from '../../Assets/Icons/search.png';
import { useDispatch, useSelector } from 'react-redux';
import { changeTerm } from './searchSlice';

export const SearchBar = () => {

    const [term, setTerm] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) =>{

        const value = e.target.value;

        setTerm(value);
    }

    const handleClick = (e) =>{
        e.preventDefault();
        dispatch(changeTerm(term));
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