import React from 'react';

export const Comment = (prop) => {

    return (
        <div className="comment-container">
            <div className='user-container'>
                {prop.user? <h3>{prop.user}</h3> : <h3>Unknown</h3>}
            </div>
            <div className='body-container'>
                {prop.comment? <p>{prop.comment}</p> : <p>no comment :/.</p>}
            </div>
        </div>
    )
}