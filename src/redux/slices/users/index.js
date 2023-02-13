import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { UsersApi } from "../../../api/UsersApi";
import { usersMap } from "./helpers";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
  },
  reducers: {
    setUserList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setUserList } = userSlice.actions;

export default userSlice.reducer;

export const getUsers = () => async (dispatch) => {
  const response = await UsersApi.get("users?page=2");
  dispatch(setUserList(usersMap(response.data)));
};
