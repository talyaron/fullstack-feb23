import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const TitleComponent: React.FC = () => {
  const documentTitle = useDocumentTitle();

  return (
    <div>
      <h1>Document Title:</h1>
      <p>{documentTitle}</p>
    </div>
  );
};

export default TitleComponent;
