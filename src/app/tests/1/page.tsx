/* eslint-disable @typescript-eslint/no-require-imports */
import React from "react";
import { flash } from "@/tests/super-hero";
import { fileURLToPath } from "url";
import path from "path";
import data from "./data.json";

const { add } = require("@/tests/test_one.ts");
const substract = require("@/tests/test_one.ts").substract;
const superman = require("./data");

const TestOnePage = async () => {
  console.log(add(2, 2));
  console.log(substract(2, 2));

  console.log("dirname", path.dirname(fileURLToPath(import.meta.url)));

  return (
    <React.Fragment>
      <main>
        {flash?.name}

        <pre>{JSON.stringify(import.meta.url)}</pre>
        <pre>{JSON.stringify(process.env.MOCK_KEY)}</pre>
        <pre>{superman.power}</pre>
        <pre>{data?.name}</pre>
      </main>
    </React.Fragment>
  );
};

export default TestOnePage;
