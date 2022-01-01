import React from 'react';
import hot from '../../Assets/Icons/hot.png';
import newIcon from '../../Assets/Icons/new.png';
import top from '../../Assets/Icons/top.png';
import rising from '../../Assets/Icons/rising.png';
import './Categories.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory, enableButton, selectActiveStatuses } from './categoriesSlice';

export const Categories = () => {

    const dispatch = useDispatch();
    const activeStatuses = useSelector(selectActiveStatuses);

    const handleClick = (e) => {

        const target = e.target.id;

        switch (target){

            case 'hot':

                dispatch(changeCategory('hot'));
                dispatch(enableButton('hot'));
                break;
            
            case 'new':

                dispatch(changeCategory('new'));
                dispatch(enableButton('new'));
                break;
            
            case 'top':

                dispatch(changeCategory('top'));
                dispatch(enableButton('top'));
                break;
            
            case 'rising':

                dispatch(changeCategory('rising'));
                dispatch(enableButton('rising'));
                break;
            
            default:

                break;
        } 

    }

    return (
        <div className='categories' >
            <div className='categories-wrapper'>
                <button className='hot-button' onClick={handleClick} id='hot' style={activeStatuses.hot? {backgroundColor: '#eeeeee'}: null}>
                    <img src={hot} alt='hot'/>
                    <h2>Hot</h2>
                </button>
               <button className='new-button' onClick={handleClick} id='new' style={activeStatuses.new? {backgroundColor: '#eeeeee'}: null}>
                    <img src={newIcon} alt='new'/>
                    <h2>New</h2>
                </button>
                <button className='top-button' onClick={handleClick} id='top' style={activeStatuses.top? {backgroundColor: '#eeeeee'}: null}>
                    <img src={top} alt='top' />
                    <h2>Top</h2>
                </button>
                <button className='rising-button' onClick={handleClick} id='rising' style={activeStatuses.rising? {backgroundColor: '#eeeeee'}: null}>
                    <img src={rising} alt='rising' />
                    <h2>Rising</h2>
                </button>
            </div>
        </div>
    )
}