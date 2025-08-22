"use client";

import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EventClient = ({ emitter }: { emitter: any }) => {
  return (
    <React.Fragment>
      <main>
        <button
          type="button"
          onClick={() => emitter.emit("greet", "aung nyein chan")}
          className="btn-primary my-2"
        >
          Emit Event
        </button>
        <button
          type="button"
          onClick={() => emitter.emit("alert", "aung nyein chan")}
          className="btn-primary my-2 ms-2"
        >
          Alert Event
        </button>
        <button
          type="button"
          onClick={() => emitter.emit("read")}
          className="btn-primary my-2 ms-2"
        >
          Read Event
        </button>
      </main>
    </React.Fragment>
  );
};

export default EventClient;
