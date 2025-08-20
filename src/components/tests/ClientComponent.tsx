"use client";

import { addDoc, readDoc } from "@/actions/server-actions";
import React, { useEffect, useState } from "react";

const ClientComponent = () => {
  const [text, setText] = useState<string>("");
  const [file, setFile] = useState("");

  useEffect(() => {
    async function getFile() {
      const data = await readDoc();
      setFile(data);
    }
    getFile();
  }, []);

  return (
    <React.Fragment>
      <main className="w-full min-h-screen bg-red-100 flex justify-center items-center">
        <div className="">
          <p className="p-3 bg-amber-200 text-black rounded my-3">{file}</p>
          <input
            className="p-3 border-2 border-red-500 rounded-2xl mx-1"
            type="text"
            name="text"
            id=""
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-indigo-500 rounded"
            type="button"
            onClick={() => addDoc(text)}
          >
            Add
          </button>
        </div>
      </main>
    </React.Fragment>
  );
};

export default ClientComponent;
