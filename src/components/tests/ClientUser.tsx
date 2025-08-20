"use client";

import React, { useEffect, useState } from "react";
import Loader from "../share/Loader";

export type User = {
  id: number;
  email: string;
  username: string;
  password?: string;
  name?: {
    firstname: string;
    lastname: string;
  };
  address?: {
    geolocation: {
      lat: string;
      long: string;
    };
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
  phone?: string;
  __v?: number;
};

const ClientUser = () => {
  const [users, setUser] = useState<Array<User> | undefined>([]);
  const [selectUser, setSelectUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/users`);
        const users: User[] | undefined = await response.json();
        setUser(users);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error?.message);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading) return <Loader />;

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
      </main>
    </React.Fragment>
  );
};

export default ClientUser;
