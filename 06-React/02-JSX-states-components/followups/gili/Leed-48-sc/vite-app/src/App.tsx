import React from 'react';
import Article from './components/Article/Article';
import './App.scss';

function App() {
  return (
    <div className='articles'>
      <Article
        title='Title 1'
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sed numquam. Esse cum repudiandae deleniti odio sequi similique neque cupiditate excepturi debitis animi quod, asperiores quos distinctio exercitationem sapiente porro!'
        imgSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPtvahlYpON5Zly_TtzIsWbqaTphGwmQ_Yw&usqp=CAU'
      />
      <Article
        title='Title 2'
        content='Another article content...'
        imgSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPtvahlYpON5Zly_TtzIsWbqaTphGwmQ_Yw&usqp=CAU'
      />
      <Article
        title='Title 3'
        content='Yet another article content...'
        imgSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPtvahlYpON5Zly_TtzIsWbqaTphGwmQ_Yw&usqp=CAU'
      />
    </div>
  );
}

export default App;
