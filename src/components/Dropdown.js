import React from "react";

const Dropdown = () => {
  return (
    <div class="dropdown">
      <button class="dropbtn">Account Type</button>
      <div class="dropdown-content">
        <a href="#">Current</a>
        <a href="#">Multiply</a>
        <a href="#">Savings</a>
      </div>
    </div>
  );
};

export default Dropdown;
