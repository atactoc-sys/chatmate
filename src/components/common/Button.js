// components/common/Button.js

import React from "react";
import "./Button.css";

const Button = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);

export default Button;
