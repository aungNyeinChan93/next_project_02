import PrefetchButton from "@/components/tests/PrefetchButton";
import React from "react";

const Prefetching = async () => {
  return (
    <React.Fragment>
      <main className="container mx-auto">
        <section className="text-2xl p-2 text-green-600 my-2 font-semibold text-center bg-slate-600/80 w-full min-h-screen ">
          <h4> Prefetching Page</h4>
          <PrefetchButton />
        </section>
      </main>
    </React.Fragment>
  );
};

export default Prefetching;
