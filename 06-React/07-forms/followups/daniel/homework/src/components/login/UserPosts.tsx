import { FC, useEffect, useState } from 'react'
import { getPost } from '../../api/PostApi'
import { UserData } from '../../api/UserApi'

interface Post{
      id: number,
      title: string,
      body: string,
      userId: number,
      tags: string[],
      reactions: number,
}

interface UserPostProps{
    user:UserData
}

const UserPosts:FC<UserPostProps> = ({user}) => {
  const [posts,setPosts] = useState<Post[]>([])

  const handleGetPosts = async ()=>{
    try {
      const data = await getPost()
      console.log('user id:', user.id);
      
      console.log('Received Data:',data);
      
      if( data.posts && data.posts.length >0){
        const userPosts = data.posts.filter((post:Post)=> post.userId === Number(user.id))
        console.log('the userpost is',userPosts);
        
        setPosts(userPosts)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(()=>{
    handleGetPosts()
  },[user.id])

  return (
    <div >
      
       
          <h2>User Posts</h2>
          <ul>{
            posts.map((post) =>(
                
                <div key={post.id}>
                    <p>{post.body}</p>

                <p>{post.reactions}</p>
                </div>
                
            ))
            }</ul>
       
      
    </div>
  )
}

export default UserPosts