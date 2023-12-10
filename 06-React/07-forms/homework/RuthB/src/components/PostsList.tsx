import React, { useState , FC} from 'react'
import { handlePostByUSer } from '../api/posts';

interface PostsListProps{
  userId:number;
}

const  PostsList:FC<PostsListProps> = ({userId}) => {
  const getPosts:[] =async()=>{
    return await handlePostByUSer(userId)
  }

  const [posts, setPosts] = useState(getPosts())

  return (
    <div>
      {
        posts.map
      }
    </div>
  )
}

export default PostsList