// mock.js
import Mock from "mockjs";
import users from "./users";

Mock.setup({
  timeout: "300-600",
});
console.log("------Mock---");

export default Mock.mock("/api/getUsers", "get", users.getUsers);
