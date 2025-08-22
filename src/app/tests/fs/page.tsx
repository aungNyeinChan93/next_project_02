/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import fs from "node:fs";
import path from "node:path";
import { revalidatePath } from "next/cache";

export const getQuotes = async () => {
  const file = path.resolve("src/app/tests/fs/data.json");
  const quotes = await fs.promises.readFile(file, "utf-8");
  return quotes;
};

const addQuote = async () => {
  "use server";
  const file = path.resolve("src/app/tests/fs/data.json");
  const quotes = await fs.promises.readFile(file, "utf-8");
  const newQuote = {
    id: Math.random(),
    author: "chan",
    quote: "more code alway code",
  };
  const finalQuotes = [...JSON.parse(quotes), newQuote];
  await fs.promises.writeFile(file, JSON.stringify(finalQuotes));
  revalidatePath("/tests/fs");
};

const FileSystemPage = async () => {
  const quotes = await getQuotes();
  return (
    <React.Fragment>
      <main>
        <form action={addQuote}>
          <button className="btn-primary mt-4" type="submit">
            {" "}
            Add Quote
          </button>
        </form>
        <pre className="p-2 text-base text-green-600">
          {JSON.parse(quotes)?.map((q: any) => (
            <div className="p-2" key={q.id}>
              {q.quote}
            </div>
          ))}
        </pre>
      </main>
    </React.Fragment>
  );
};

export default FileSystemPage;
