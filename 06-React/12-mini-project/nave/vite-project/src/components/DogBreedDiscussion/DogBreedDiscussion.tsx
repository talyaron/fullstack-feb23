import React from 'react';
import { useParams } from 'react-router-dom';

const DogBreedDiscussion: React.FC = () => {
  const { breed } = useParams<{ breed: string }>();

  // אם יש צורך, כאן תוכל להשיב על בקשות הקשורות לדף דיון בגזע המסוים.

  return (
    <div>
      <h2>{breed} Discussion</h2>
      {/* כאן תוכל להוסיף כל תוכן נדרש לדף הדיון */}
    </div>
  );
};

export default DogBreedDiscussion;
