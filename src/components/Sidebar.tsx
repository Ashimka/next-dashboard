import React from "react";
import UserItems from "./UserItems";

const Sidebar = () => {
  return (
    <div className=" flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <UserItems />
      <div>Menu</div>
    </div>
  );
};

export default Sidebar;
