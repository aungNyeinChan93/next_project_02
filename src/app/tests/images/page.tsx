import Images from "@/components/share/Images";
import Loader from "@/components/share/Loader";
import React, { Suspense } from "react";

const ImagesPage = async () => {
  await new Promise((r) => setTimeout(r, 2000));
  return (
    <React.Fragment>
      <main className="w-full min-h-screen container mx-auto bg-slate-300/80">
        <section className="flex flex-col gap-2">
          <h3 className=" text-3xl p-4 text-center text-green-900/80 font-semibold underline underline-offset-8 decoration-green-900/70 capitalize">
            Images
          </h3>
          <Suspense fallback={<Loader />}>
            <Images />
          </Suspense>
        </section>
      </main>
    </React.Fragment>
  );
};

export default ImagesPage;
