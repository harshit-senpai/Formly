"use client";

import { signOut } from "next-auth/react";

const DashboardPage = () => {
  const onClick = () => {
    signOut();
  };
  return (
    <div>
      Dashboard
      <button onClick={onClick}>logOut</button>
    </div>
  );
};

export default DashboardPage;
