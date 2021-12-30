import React from 'react';
import { Post } from './Post';

export const Posts = () => {

    return(
        <div className="posts">
            {/* map through the posts here*/}
            <Post />
        </div>
    )
}