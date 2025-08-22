import React from "react";
import { EventEmitter } from "events";
import path from "path";
import fs from "fs";

const EventPage = () => {
  const emitter = new EventEmitter();
  //   const copy = Object.create(emitter);

  emitter.on("greet", (name: string): void => console.log(name));
  emitter.on("alert", (name: string): void => alert(name));
  emitter.on("read", () => {
    const file = path.resolve("src/tests/testFile.txt");
    try {
      const res = fs.readFileSync(file, "utf-8");
      console.log({ file, res });
    } catch (err) {
      if (err instanceof Error) {
        console.error("Error reading file:", err.message);
      }
    }
  });

  emitter.emit("read");

  return (
    <React.Fragment>
      <main>{/* <EventClient emitter={copy} /> */}</main>
    </React.Fragment>
  );
};

export default EventPage;
