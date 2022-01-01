import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, loadPostsByCategory } from './postsSlice';
import { Post } from './Post';
import './Posts.css';

export const Posts = () => {

    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);

    useEffect(() => {
        dispatch(loadPostsByCategory({category: 'hot'}));
    }, []);

    return(
        <div className="posts">
            {posts.map(post => {
                return (
                    <Post
                        key={post.key} 
                        upVotes={post.upVotes}
                        postTitle={post.postTitle}
                        postImage={post.postImage}
                        postUser={post.postUser}
                        postTime={post.postTime}
                        postCommentCount={post.postCommentCount}
                    />
                );
            })}
        </div>
    )
}