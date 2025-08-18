import Loader from "@/components/share/Loader";
import React from "react";

const ImageLoader = async () => {
  return (
    <React.Fragment>
      <main className="w-full h-screen flex justify-center items-center">
        <Loader />
      </main>
    </React.Fragment>
  );
};

export default ImageLoader;
