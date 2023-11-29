// components/auth/Login.js

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/authActions";
import Input from "../common/Input";
import Button from "../common/Button";
import dummyData from "../../data/dummyData.json";

const Login = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleLogin = () => {
    // Validate username (you can add more validation logic as needed)
    if (username.trim() === "") {
      console.error("Username cannot be empty");
      return;
    }

    // Perform login
    const user = dummyData.users.find((user) => user.username === username);

    if (user) {
      dispatch(login(user));
      history("/chat");
    } else {
      // Handle invalid username or show an error message
      console.error("Invalid username");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default Login;
