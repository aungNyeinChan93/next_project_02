"use client";

import React, { ReactNode, useState } from "react";
import { type User } from "./ClientUser";

const ServerUserLists = ({
  users,
  children,
  props,
}: {
  users: User[] | undefined;
  children?: ReactNode;
  props?: ReactNode;
}) => {
  const [selectUser, setSelectUser] = useState<User | null>(null);

  return (
    <React.Fragment>
      <main>
        {users &&
          !selectUser &&
          Array.isArray(users) &&
          users?.map((user) => (
            <div
              className="p-4 bg-slate-400 rounded-2xl my-4 "
              key={user.id}
              onClick={() => setSelectUser(user)}
            >
              {user?.username}
            </div>
          ))}

        {selectUser && (
          <>
            <div className="flex w-full h-screen justify-center items-center">
              <div className=" w-[500px] mx-auto min-h-[400px]  z-50 bg-slate-600/50 rounded-2xl p-5 relative">
                <button
                  type="button"
                  onClick={() => setSelectUser(null)}
                  className=" absolute top-3 right-3 text-red-600 bg-green-200 px-3 py-1 rounded-full"
                >
                  X
                </button>
                <pre>{JSON.stringify(selectUser, null, 2)}</pre>
              </div>
            </div>
          </>
        )}
        <section>{children}</section>
        <section>{props}</section>
      </main>
    </React.Fragment>
  );
};

export default ServerUserLists;
