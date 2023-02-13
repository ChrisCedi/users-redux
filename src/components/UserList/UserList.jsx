import React, { useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import { UserCard } from "../UserCard";
import { getUsers } from "../../redux/slices/users";
import { useDispatch, useSelector } from "react-redux";

export const UserList = () => {
  const { list } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Container>
      <Grid container spacing={4}>
        {list?.data?.map((user, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
