import { FC } from "react";
import { Paper, Typography, Box, Avatar } from "@mui/material";

interface UserCardProps {
  user: User;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <Paper
      elevation={6}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        gap: 3,
        width: "20vw",
      }}
    >
      <Avatar>{user.name.substring(0, 2).toUpperCase()}</Avatar>
      <Typography variant="h5">{user.name}</Typography>
      <Box>
        <Typography>Username: {user.username}</Typography>
        <Typography>Email: {user.email}</Typography>
        <Typography>Website: {user.website}</Typography>
      </Box>
    </Paper>
  );
};

export default UserCard;
