import React from 'react';
import Comment from './Comment';

const CommentList = ({comments}) => {
    const commentList = comments.map( comment => {
        return <Comment comment = {comment} />
    })
    return <div> {commentList} </div>
}

export default CommentList;