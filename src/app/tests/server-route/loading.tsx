import Loader from "@/components/share/Loader";
import React from "react";

const ServerRouteLoader = async () => {
  return (
    <React.Fragment>
      <main>
        <Loader />
      </main>
    </React.Fragment>
  );
};

export default ServerRouteLoader;
