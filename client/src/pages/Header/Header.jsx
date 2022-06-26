import React from "react";
import { Link } from "react-router-dom";

export default function Header({ users, onChange }) {
  const activeUsersCount = (users) => {
    let counter = 0;
    users.forEach((user) => {
      if (user.isActive === true) {
        counter++;
      }
    });
    return counter;
  };

  return (
    <div>
      <h1>User Management</h1>
      <h2>{activeUsersCount(users)} Active users</h2>
      <Link to={"/customers"}>
        <h3>Show Users</h3>
      </Link>
    </div>
  );
}
