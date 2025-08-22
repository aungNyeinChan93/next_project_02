import React from "react";

const BufferPage = async () => {
  const buffer = new Buffer("chan");
  console.log({ buffer });

  console.log(buffer.toJSON());

  const c = "chan".charCodeAt(0);

  if (c === buffer.toJSON()?.data[0]) {
    console.log("true");
  }

  return (
    <React.Fragment>
      <main></main>
    </React.Fragment>
  );
};

export default BufferPage;
