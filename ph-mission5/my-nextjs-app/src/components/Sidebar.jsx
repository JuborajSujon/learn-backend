import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-start px-4 gap-5 w-64 bg-slate-100 dark:bg-gray-800 h-screen py-6 overflow-hidden">
      <h2 className="text-2xl font-bold">My Sidebar</h2>

      <div className="flex flex-col gap-5">
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/settings">Settings</Link>
      </div>
    </div>
  );
};

export default Sidebar;
