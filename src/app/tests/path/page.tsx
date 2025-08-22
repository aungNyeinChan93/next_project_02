/* eslint-disable @typescript-eslint/no-require-imports */
import React from "react";
import * as data from "@/tests/node_js/path-module";

const PathPage = async () => {
  const res = await data.readFile();

  const { customeMap } = data;

  const nums = [1, 2, 3, 4, 5];

  console.log(customeMap(nums, (n) => n + 1));

  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <pre>{JSON.stringify(data.default, null, 2)}</pre>
        <pre>{JSON.stringify(data.cc, null, 2)}</pre>
        <pre>{JSON.stringify(data.default.__basename, null, 2)}</pre>
        <pre>{JSON.stringify(data.default.__resolve, null, 2)}</pre>
        <pre>{JSON.stringify(res, null, 2)}</pre>

        <pre>{JSON.stringify(data.default.ext)}</pre>
      </main>
    </React.Fragment>
  );
};

export default PathPage;
