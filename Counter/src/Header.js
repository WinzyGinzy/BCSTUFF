import React from "react";

const Header = () => {
  let date = `${new Date()}`;
  return (
    <header>
      <div>
        <h2>Counter Task</h2>
        <p>{date}</p>
      </div>
    </header>
  );
};

export default Header;
