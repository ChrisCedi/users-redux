import axios from "axios";

export const UsersApi = axios.create({
  baseURL: "https://reqres.in/api/",
});
