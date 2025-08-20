"use client";

import { useRouter } from "next/navigation";
import React from "react";

const PrefetchButton = () => {
  const router = useRouter();
  return (
    <React.Fragment>
      <section>
        <button
          className="bg-green-500 px-4 py-2 rounded-2xl mx-1 my-3"
          type="button"
          onMouseEnter={() => router.prefetch("/tests")}
          onClick={() => router.push("/tests")}
        >
          Preftch Button
        </button>

        <button
          className="bg-red-500 px-4 py-2 rounded-2xl mx-1 my-3"
          type="button"
          onClick={() => router.push("/tests")}
        >
          Non-Prefetch Button
        </button>
      </section>
    </React.Fragment>
  );
};

export default PrefetchButton;
