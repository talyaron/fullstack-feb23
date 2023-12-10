import React, { useEffect, useState } from 'react';
import { fetchUserPosts } from '../api/userPostApi';

const Post = () => {
  const userFromStorage = sessionStorage.getItem('user');
  if (!userFromStorage) throw new Error("no user at storage");
  const user: User = JSON.parse(userFromStorage);

  const [posts, setPosts] = useState<Post[] | null>(null);
  const [allPost, setAllPost] = useState<JSX.Element[] | null>(null);

  const userPostsApi = async () => {
    try {
      const response = await fetchUserPosts(user);

      if (response && response.length > 0) {
        setPosts(response);
      } else {
       
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    userPostsApi();
  }, []);

  useEffect(() => {
    if (posts === null) {
      setAllPost(null);
      return;
    }

    const userPosts = posts.map((post: Post) =>
     (
      <div className="post">
        
      <div className='userInformation' key={post.id}>
       <div className="author	">
       <img className="author-image" src={user.image} alt="user-image" />
       <div className="author-date">
       <h3 className="author-name">{user.firstName} {user.lastName}</h3>
       <p className='time'>2 huors ago</p>
       </div>
       <div className="add">
<span className="material-icons" style={{ color: 'black', fontSize: '20px', margin: '0 0px', padding: '0px', backgroundColor: 'white' }}>more_horiz</span></div>
       
       </div>
      



    </div>
    <div className="post-information">
                        <p className='post-title'>{post.title}</p>
                        <p className='post-body'>{post.body}</p>
                        <div className='tags'>{post.tags.map((tag: string) => { return <p className='tag'>#{tag} </p> })}</div>
                        
                    </div>
                    <div className="img">
                        <img className='image' src=
                            "https://picsum.photos/id//500/500"
                            alt="post-image" />
                    </div>
                    <div className="post-comment">
                    <span className="material-icons " style={{ color: '#CE3240', fontSize: '18px' }}>favorite</span>
                    <p>{post.reactions}</p>
                    <span className="material-icons" style={{ color: '#676E75', fontSize: '18px' }}>comment</span>
                    <p>{post.tags.length}</p>
                    <span className="material-icons" style={{ color: '#676E75', fontSize: '18px' }}>arrow_back</span>
                    <span className="material-icons send" style={{ color: '#6467D4', fontSize: '20px' }}>send</span>


                    </div>
                </div>
    ));

    setAllPost(userPosts);
  }, [posts]);

  return (
    <div className="post-body">
      {allPost}
    </div>
  );
};

export default Post;