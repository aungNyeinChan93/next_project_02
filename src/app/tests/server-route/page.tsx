import ServerUser from "@/components/tests/ServerUser";
import TestForm from "@/components/tests/TestForm";
import React from "react";

const ServerRoute = async () => {
  return (
    <React.Fragment>
      <main>
        <TestForm />
        <ServerUser />
      </main>
    </React.Fragment>
  );
};

export default ServerRoute;
