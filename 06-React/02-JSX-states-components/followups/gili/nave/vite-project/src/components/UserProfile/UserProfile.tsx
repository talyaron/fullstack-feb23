import React, { useState, useEffect } from 'react';

const UserProfile = () => {
  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');
  const [birthYear, setBirthYear] = useState(localStorage.getItem('birthYear') || '');
  const [profilePicture, setProfilePicture] = useState(localStorage.getItem('profilePicture') || '');
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const updateUserName = () => {
    const newName = prompt('Enter your name:');
    if (newName) {
      setUserName(newName);
      localStorage.setItem('userName', newName);
    }
  };

  const updateBirthYear = () => {
    const newBirthYear = prompt('Enter your birth year:');
    if (newBirthYear && !isNaN(parseInt(newBirthYear))) {
      setBirthYear(newBirthYear);
      localStorage.setItem('birthYear', newBirthYear);
    }
  };

  const calculateAge = () => {
    return currentYear - parseInt(birthYear, 10);
  };

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const updateProfilePicture = () => {
    const input = document.createElement('input');
    input.type = 'file';

    input.addEventListener('change', (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setProfilePicture(reader.result as string);
          localStorage.setItem('profilePicture', reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    });

    input.click();
  };

  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <label>שם: {userName}</label>
        <button onClick={updateUserName}>עדכן שם משתמש</button>
      </div>
      <div>
        <label>שנת לידה: {birthYear}</label>
        <button onClick={updateBirthYear}>עדכן שנת לידה</button>
      </div>
      <div>
        <label>גיל: {calculateAge()}</label>
      </div>
      <div>
        <label>תמונת פרופיל:</label>
        <img
          src={profilePicture || 'https://via.placeholder.com/150'}
          alt="Profile"
          onClick={updateProfilePicture}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};

export default UserProfile;
