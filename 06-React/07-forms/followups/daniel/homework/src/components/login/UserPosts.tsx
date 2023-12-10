// import { FC, useEffect, useState } from 'react'
// import { getPost } from '../../api/PostApi'

// interface PostProps{
//       id: number,
//       title: string,
//       body: string,
//       userId: number,
//       tags: string[],
//       reactions: number,
   
// }

// const UserPosts:FC<PostProps> = ({userId,id,title,body,tags,reactions}) => {
//   const [post,setPosts] = useState([])

//   const handleGetPosts = async ()=>{
//     try {
//       const data = await getPost()
//       if(data.length >0){
//         setPosts(data)
//       }
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   useEffect(()=>{
//     handleGetPosts()
//   },[userId])

//   return (
//     <div >
      
//         <div key={userId}>
//           <h1>{id}</h1>
//           <h3>{title}</h3>
//           <p>{body}</p>
//           <p>{userId}</p>
//           <p>{tags}</p>
//           <p>{reactions}</p>
    
//         </div>
      
//     </div>
//   )
// }

// export default UserPosts