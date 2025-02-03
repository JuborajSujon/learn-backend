"use client";

import UserItem from "./UserItem";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Bell,
  Inbox,
  LogIn,
  LucideCookie,
  Receipt,
  Settings,
  User,
} from "lucide-react";

export default function Sidebar() {
  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/",
          icon: <User />,
          text: "Profile",
        },
        {
          link: "/",
          icon: <Inbox />,
          text: "Inbox",
        },
        {
          link: "/",
          icon: <Receipt />,
          text: "Billing",
        },
        {
          link: "/",
          icon: <LogIn />,
          text: "Log",
        },
      ],
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          icon: <Settings />,
          text: "General Settings",
        },
        {
          link: "/",
          icon: <LucideCookie />,
          text: "Privacy",
        },
        {
          link: "/",
          icon: <Bell />,
          text: "Notifications",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command>
          <CommandList>
            {menuList?.map((menu: any, key: number) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu?.items?.map((option: any, key: number) => (
                  <CommandItem
                    className="cursor-pointer"
                    key={key}
                    onClick={option.onClick}>
                    {option?.icon}
                    {option.text}
                  </CommandItem>
                ))}
                <CommandSeparator />
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <div>Settings / Notifications</div>
    </div>
  );
}
