import React, { useState } from 'react';

function Article() {
  const categories = ["Tech", "Politics", "Health"];
  const [categoryIndex, setCategoryIndex] = useState(0);

  const changeCategory = () => {
    const newIndex = (categoryIndex + 1) % categories.length;
    setCategoryIndex(newIndex);
  };

  return (
    <div className="category">
      <button onClick={changeCategory}>{categories[categoryIndex]}</button>
    </div>
  );
}

export default Article;
