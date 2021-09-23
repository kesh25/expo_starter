import client from "./client";

const login = (email, password) => client.post("/users/login", { email, password });

const checkUser = () => client.get("/users/checkuser");

export default {
  login,
  checkUser
};
