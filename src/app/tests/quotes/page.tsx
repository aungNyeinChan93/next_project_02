import Loader from "@/components/share/Loader";
import QuoteAccordation from "@/components/tests/QuoteAccordation";
import React, { Suspense } from "react";

export type Quote = {
  id: number | string;
  author: string;
  quote: string;
};

export const getQuotes = async (): Promise<Quote[]> => {
  const response = await fetch(`https://dummyjson.com/quotes?limit=20`);
  const { quotes }: { quotes: Quote[] } = await response.json();
  return quotes;
};

const Quotes = async () => {
  const quotes: Quote[] = await getQuotes();
  return (
    <React.Fragment>
      <main className="">
        <h3 className="px-4 my-3 pt-3 text-2xl underline underline-offset-[10px] text-slate-950/90 font-semibold tracking-widest">
          Quotes
        </h3>
        <Suspense fallback={<Loader />}>
          <QuoteAccordation quotes={quotes} />
        </Suspense>
      </main>
    </React.Fragment>
  );
};

export default Quotes;
