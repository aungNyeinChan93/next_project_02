import React, { Suspense } from "react";
import { User } from "./ClientUser";
import ServerUserLists from "./ServerUserLists";
import Loader from "../share/Loader";
import Counter from "./Counter";
import Images from "../share/Images";

const ServerUser = async () => {
  await new Promise((r) => setTimeout(r, 100));
  const response = await fetch("https://fakestoreapi.com/users");
  const users: User[] | undefined = await response.json();

  return (
    <React.Fragment>
      <main className="container mx-auto px-10 my-4">
        <Suspense fallback={<Loader />}>
          <ServerUserLists users={users ?? undefined} props={<Images />}>
            <Images />
            <Counter />
          </ServerUserLists>
        </Suspense>
      </main>
    </React.Fragment>
  );
};

export default ServerUser;
