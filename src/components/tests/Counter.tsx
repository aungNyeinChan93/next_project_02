"use client";

import useCounterStore from "@/zustand/counterStore";
import React from "react";

const Counter = () => {
  const { count, increment, setNumber } = useCounterStore((store) => store);

  return (
    <React.Fragment>
      <main className="p-4 w-full h-20 bg-red-50">
        <section>{count}</section>
        <button type="button" onClick={() => increment()}>
          +
        </button>
        <button type="button" onClick={() => setNumber(100)}>
          set 100
        </button>
      </main>
    </React.Fragment>
  );
};

export default Counter;
