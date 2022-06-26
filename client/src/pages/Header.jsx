import React from "react";

export default function Header({ users }) {
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
    </div>
  );
}
