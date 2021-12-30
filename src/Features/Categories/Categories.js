import React from 'react';
import hot from '../../Assets/Icons/hot.png';
import newIcon from '../../Assets/Icons/new.png';
import top from '../../Assets/Icons/top.png';
import rising from '../../Assets/Icons/rising.png';

export const Categories = () => {

    return (
        <div className='categories' >
            <div className='categories-wrapper'>
                <button className='hot-button'>
                    <img src={hot} alt='hot' />
                    <h2>Hot</h2>
                </button>
               <button className='new-button'>
                    <img src={newIcon} alt='new' />
                    <h2>New</h2>
                </button>
                <button className='top-button'>
                    <img src={top} alt='top' />
                    <h2>Top</h2>
                </button>
                <button className='rising-button'>
                    <img src={rising} alt='rising' />
                    <h2>Rising</h2>
                </button>
            </div>
        </div>
    )
}