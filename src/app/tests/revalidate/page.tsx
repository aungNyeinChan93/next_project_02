import QuoteCard from "@/components/share/QuoteCard";
import React from "react";

const getRandomQuote = async () => {
  const response = await fetch(`https://dummyjson.com/quotes/random`, {
    next: { revalidate: 30 },
    cache: "default",
  });
  const quote = await response.json();
  return quote;
};

const RevalidatePage = async () => {
  const quote = await getRandomQuote();
  console.log(quote);

  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center">
        <QuoteCard quote={quote} />
      </main>
    </React.Fragment>
  );
};

export default RevalidatePage;
