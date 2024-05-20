"use client";
import React from "react";

import { useGetAllUsersQuery } from "@/features/users/usersApi";

const UsersPage = () => {
  const { isSuccess, data: users } = useGetAllUsersQuery();

  return (
    <>
      {isSuccess && (
        <div>
          {users.map((item: any) => (
            <li key={item.id}>{`${item.email} ROLE: ${item.roles}`}</li>
          ))}
        </div>
      )}
    </>
  );
};

export default UsersPage;
