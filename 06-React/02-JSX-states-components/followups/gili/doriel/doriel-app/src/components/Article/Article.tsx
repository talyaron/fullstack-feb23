import "./Article.css";
import { useState } from 'react';

function Article() {
  const text = "Title of the Article";
  
  //task 1
  function changeBackgroundEnter(e:any) {
    e.target.style.background = 'purple';
  }
  function changeBackgroundLeave(ev:any) {
    ev.target.style.background = 'white';
  }

  // task 3 
  const [counter, setCounter] = useState()

  return (
    <div className="article"  onMouseEnter={changeBackgroundEnter} onMouseLeave={changeBackgroundLeave}>
      <img src="https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1611723380/1611723379.jpg"></img>
      <div className="subBox">
        <h2>{text}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}

export default Article;
