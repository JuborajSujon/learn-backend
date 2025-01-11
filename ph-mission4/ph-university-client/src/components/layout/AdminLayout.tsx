import React from "react";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div>
      <h1>This is Navbar</h1>
      <Outlet />
    </div>
  );
}
