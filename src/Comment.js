import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


const Comment = ({comment, onLike}) => {
    console.log(comment.likes.length);
    return(
        <Card sx={{ maxWidth: 345 }}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {comment.user}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {comment.text}
            </Typography>
        </CardContent>

        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} onClick = {() => onLike()}/>
        
        </Card>
    )
}

export default Comment;
