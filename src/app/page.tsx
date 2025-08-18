import Counter from "@/components/tests/Counter";
import React from "react";

const HomePage = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen p-4">
        <Counter />
      </main>
    </React.Fragment>
  );
};

export default HomePage;
