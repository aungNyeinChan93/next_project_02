"use client";

import ClientUser from "@/components/tests/ClientUser";
import { usePathname } from "next/navigation";
import React from "react";

const ClientRoutePage = () => {
  const pathname = usePathname();
  console.log({ pathname });

  return (
    <React.Fragment>
      <main>
        {pathname}
        <section className="container mx-auto px-10">
          <ClientUser />
        </section>
      </main>
    </React.Fragment>
  );
};

export default ClientRoutePage;
