import React, { MouseEvent, useState } from "react";
import "./title.css";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export const Title = () => {
  const { title, returnTitle } = useDocumentTitle("Initial Title");
  const [isTitleVisible, setIsTitleVisible] = useState(true);

  const showTitle = (event: MouseEvent) => {
    event.preventDefault();
    returnTitle();
    setIsTitleVisible(true);
  };

  const hideTitle = () => {
    returnTitle();
    setIsTitleVisible(false);
  };

  return (
    <section className="title">
      <div className="container">
        {isTitleVisible && <h1>{title}</h1>}
        <button id="showBtn" onClick={showTitle}>
          Show title
        </button>
        <button id="hideBtn" onClick={hideTitle}>
          Hide title
        </button>
      </div>
    </section>
  );
};
