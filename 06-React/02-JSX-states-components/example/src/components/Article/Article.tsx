import React from "react";
import "./article.scss"

const Article = () => {

  const x = "hello!!!"
  return (
    <article className="article">
      {x ? <h1> {x}</h1> : <p>There is no x</p>}
  
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ratione
        minus minima enim nemo in ut reprehenderit, aut distinctio ducimus rem
        consequatur et quaerat labore. Eum eveniet quidem debitis suscipit!
      </p>
    </article>
  );
};

export default Article;
