import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, selectIsLoadingPosts, selectHasError, loadPostsByCategory } from './postsSlice';
import { selectCategory } from '../Categories/categoriesSlice';
import { selectTerm } from '../Search/searchSlice';
import { Post } from './Post';
import './Posts.css';

export const Posts = () => {

    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const category = useSelector(selectCategory);
    const searchTerm = useSelector(selectTerm);
    const isLoadingPosts = useSelector(selectIsLoadingPosts);
    const hasError = useSelector(selectHasError);

    useEffect(() => {
        dispatch(loadPostsByCategory({category: category, term: searchTerm}));
    }, [category, searchTerm, dispatch]);

    return(
        <div className="posts">
            {posts.map(post => {
                return (
                    <Post
                        key={post.key}
                        id={post.key} 
                        upVotes={post.upVotes}
                        postTitle={post.postTitle}
                        postImage={post.postImage}
                        postUser={post.postUser}
                        postTime={post.postTime}
                        postCommentCount={post.postCommentCount}
                        isLoading={isLoadingPosts}
                        hasError={hasError}
                    />
                );
            })}
        </div>
    )
}