import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./UserCardStyles";

export const UserCard = ({ user }) => {
  const classes = useStyles();

  const { firstName, lastName, email, id, avatar } = user;

  console.log(email);

  return (
    <Box className={classes.container}>
      <Box>
        <img src={avatar} alt="img" />
      </Box>
      <Typography>{firstName}</Typography>
      <Typography>{lastName}</Typography>
      <Typography>{email}</Typography>
    </Box>
  );
};
