import React from "react";

const LogComponent = async () => {
  function dd() {
    console.log("dd");
  }
  dd();
  return (
    <React.Fragment>
      <main></main>
    </React.Fragment>
  );
};

export default LogComponent;
