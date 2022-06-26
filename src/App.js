import Post from './Post';
import CommentList from './CommentList';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {

  const[post, setPost] = useState(null);
  const[commentList, setCommentList] = useState([]);

  useEffect(() => {
    const getPost = async() => {
      const response = await axios.get("http://localhost:4000/api/v1/reddit/fetch/posts/62ab7d8493a479e9cbc79697")
      console.log(response.data[0]);
      setPost(response.data[0]);
    }

    const getComments = async() => {
      const response = await axios.get("http://localhost:4000/api/v1/reddit/fetch/comments/62ab8299b5e2f61dd4f57886")
      console.log(response.data);
      setCommentList(response.data);
    }

    getPost();
    getComments();
  }, [])

  
  return(
    <div>
      {
        post && <Post post = {post}/>
      }
      {
        commentList && <CommentList comments = {commentList} />
      }
    </div>
  )
}

export default App;
 