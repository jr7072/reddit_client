import React, { useState } from 'react';
import stylesheet from '../../Stylesheets/Theme';
import arrow from '../../Assets/Icons/right-arrow.png'
import arrowFilled from '../../Assets/Icons/right-arrow-filled.png';
import comment from '../../Assets/Icons/comment.png';
import { Comments } from '../Comments/Comments';
import { useSelector, useDispatch } from 'react-redux';
import { loadCommentsForPost, selectComments } from '../Comments/commentSlice';
import { selectTerm } from '../Search/searchSlice';

export const Post = (prop) => {

    const [upArrowClicked, setUpArrowClicked] = useState(false);
    const [downArrowClicked, setDownArrowClicked] = useState(false);
    const [commentsActive, setCommentsActive] = useState(false);
    const comments = useSelector(selectComments);
    const subTerm = useSelector(selectTerm);
    const dispatch = useDispatch();

    const handleClick = (e) => {

        const arrow = e.target.id

        switch (arrow){

            case 'up-arrow':

                if(upArrowClicked){
                    setUpArrowClicked(false);
                    break;
                }

                setUpArrowClicked(true);
                setDownArrowClicked(false);
                break;
            
            case 'down-arrow':
                
                if(downArrowClicked){
                    setDownArrowClicked(false);
                    break;
                }

                setDownArrowClicked(true);
                setUpArrowClicked(false);
                break;
            
            case 'comment':
                
                if(commentsActive){
                    setCommentsActive(false);
                    break;
                }

                setCommentsActive(true);
                dispatch(loadCommentsForPost({articleId: prop.id, subTerm: subTerm}));
                break;

            default:
                break;

        }
        
    }



    return(
        <div className='post' style={stylesheet.Typography} data-testid="post">
            <div className='post-votes'>
                <div className='up-votes-wrapper'>
                    <div className='up-arrow-wrapper'>
                        <button onClick={handleClick} className='up-arrow'>
                            {upArrowClicked? <img id='up-arrow' src={arrowFilled} alt='up arrow' data-testid='up-arrow-filled' /> : <img id='up-arrow' src={arrow} alt='up arrow' data-testid='up-arrow-unfilled'/>}
                        </button>
                    </div>
                    <div className='count-wrapper'>
                        {prop.upVotes? <p>{prop.upVotes}</p> : <p>0</p>}
                    </div>
                    <div className='down-arrow-wrapper'>
                        <button onClick={handleClick} className='down-arrow'>
                            {downArrowClicked? <img id='down-arrow' src={arrowFilled} alt='down arrow' data-testid='down-arrow-filled' /> : <img id='down-arrow' src={arrow} alt='down arrow' data-testid='down-arrow-unfilled'/>}
                        </button>
                    </div>
                </div>
            </div>
            <div className='body-footer-wrapper'>
                <div className='post-body'>
                    <div className='post-title-wrapper'>
                        {prop.postTitle? <h2 className='post-title'>{prop.postTitle}</h2>: <h2>Error</h2>}
                    </div>
                    <div className='post-image-wrapper' >
                        {prop.postImage? <img className='post-image' src={prop.postImage} alt='post'/> : null}
                    </div>
                </div>
                <div className='post-footer'>
                    <div className='user-wrapper'>
                        {prop.postUser? <p>{prop.postUser}</p>: <p>Error</p>}
                    </div>
                    <div className='post-time-wrapper'>
                        {prop.postTime? <p>{prop.postTime}</p>: <p>Error</p>}
                    </div>
                    <div className='comment-button-wrapper'>
                        <button className='comment-button' onClick={handleClick}>
                            <img id='comment' src={comment} alt='comment' />
                        </button>
                        {prop.postCommentCount? <p>{prop.postCommentCount}</p>: <p>unknown</p>}
                    </div>
                </div>
                <div className='comments-wrapper' style={!commentsActive? {display: 'none'} : {display: 'flex'}}>
                    <Comments comments={comments[prop.id]}/>
                </div>
            </div>
        </div>
    )
}