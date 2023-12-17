import { useEffect, useState } from 'react';

const useDocumentTitle = (): string => {
  const [documentTitle, setDocumentTitle] = useState<string>('');

  useEffect(() => {
    const title = document.title;
    setDocumentTitle(title);

    return () => {
      document.title = title; 
    };
  }, []); 

  return documentTitle;
};

export default useDocumentTitle;
