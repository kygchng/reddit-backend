import React from 'react';
import Comment from './Comment';

const CommentList = ({comments, onLike}) => {
    const commentList = comments.map( comment => {
        return <Comment comment = {comment} onLike = {onLike}/>
    })
    return <div> {commentList} </div>
}

export default CommentList;