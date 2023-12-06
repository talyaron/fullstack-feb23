import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getUserByID } from "../api/usersApi";

const UserPage = () => {
  const { id } = useParams();
  const location = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [userInfo, setUserInfo] = useState<any>();

  useEffect(() => {
    console.log(id);
    console.log(location);
  }, [id, location]);

  useEffect(() => {
    handleGetUserInfo(id);
  }, [id]);

  const handleGetUserInfo = async () => {
    try {
      if (id) {
        const data = await getUserByID(Number(id));
        setUserInfo(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (userInfo && userInfo.id) {
    return (
      <div>
        <img
          src={userInfo.image}
          alt={`user ${userInfo.firstName} profile image`}
        />
        <p>{userInfo.firstName}</p>
        <p>{userInfo.lastName}</p>
      </div>
    );
  } else {
    return <div>no user found</div>;
  }
};

export default UserPage;
