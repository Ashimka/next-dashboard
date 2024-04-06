import React from "react";
import UserItems from "./UserItems";
import {
  BadgeRussianRuble,
  ShoppingBasket,
  Users,
  Contact,
  Cookie,
  MessageSquare,
} from "lucide-react";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

const menuList = [
  {
    group: "General",
    items: [
      {
        link: "/",
        icon: <BadgeRussianRuble />,
        text: "Orders",
      },
      {
        link: "/",
        icon: <ShoppingBasket />,
        text: "Products",
      },
      {
        link: "/",
        icon: <Users />,
        text: "Users",
      },
    ],
  },
  {
    group: "Settings",
    items: [
      {
        link: "/",
        icon: <Contact />,
        text: "Employees",
      },
      {
        link: "/",
        icon: <Cookie />,
        text: "Privacy",
      },
      {
        link: "/",
        icon: <MessageSquare />,
        text: "Logs",
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className=" flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <div>
        <UserItems />
      </div>
      <div className="grow ">
        <Command style={{ overflow: "visible" }}>
          <CommandList style={{ overflow: "visible" }}>
            {menuList.map((menu: any, key: number) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option: any, optionKey: number) => (
                  <CommandItem
                    key={optionKey}
                    className="flex gap-2 cursor-pointer"
                  >
                    {option.icon}
                    {option.text}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <div>Settings</div>
    </div>
  );
};

export default Sidebar;
