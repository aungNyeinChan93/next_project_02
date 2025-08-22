// import ClientComponent from "@/components/tests/ClientComponent";
import React from "react";
import path from "path";
import { __dirname } from "@/utils/helper";
import { SuperHero, flash } from "@/tests/super-hero";

const TestPage = async () => {
  const superman = new SuperHero("superman");
  const batman = new SuperHero("batman");
  console.log(superman.name);
  superman.name = "aung";
  console.log(superman.name);
  console.log(batman.name);
  console.log({ flash });

  flash.name = "chan";
  superman.run();
  return (
    <React.Fragment>
      <main>
        {/* <ClientComponent /> */}
        <p>Current directory: {path.join(__dirname, "/aung")}</p>
      </main>
    </React.Fragment>
  );
};

export default TestPage;
