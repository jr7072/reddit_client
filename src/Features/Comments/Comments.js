import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoadingComments, selectHasErrorComments} from './commentSlice';
import { Comment } from './Comment';
import "./Comments.css";

export const Comments = (prop) => {

    const isLoadingComments = useSelector(selectIsLoadingComments);
    const hasError = useSelector(selectHasErrorComments);
    let comments;
    prop.comments? comments = prop.comments: comments = [];

    return(
        <div className='comments'>

            {comments.map(comment => {
                return (
                    <Comment 
                        key = {comment.id}
                        user = {comment.author}
                        comment = {comment.body}
                    />
                )
            })}

        </div>
    )
}