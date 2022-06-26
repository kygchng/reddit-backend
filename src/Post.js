import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Post = ({post}) => {
console.log("this isnpostn",post);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia>
        <img src = "https://image.petmd.com/files/styles/article_image/public/hand-holding-iguana-120960418_1.jpg?VersionId=dYGbpMWb7L_3kjpsWlF3A.nE_ucVY1AC&itok=hX3nrKHO" width="345" height="230"/>
        </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Post;