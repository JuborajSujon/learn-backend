import React from "react";
import { CommandDemo } from "./Command";
import { Button } from "./ui/button";
import { Bell } from "lucide-react";

export default function Header() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 border-b">
      <CommandDemo />
      <div className="flex items-center justify-end">
        <Button variant="outline" size="icon">
          <Bell />
        </Button>
      </div>
    </div>
  );
}
