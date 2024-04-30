"use client";

import { useGetAllUsersQuery } from "@/features/users/usersApi";
import React from "react";

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
