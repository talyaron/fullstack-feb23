import { useState } from "react";

const useDocumentTitle = (initial: any) => {
  const [title, setTitle] = useState(initial);

  const returnTitle = () => {
    return setTitle(title + " ");
  };

  return { title, returnTitle };
};

export default useDocumentTitle;
