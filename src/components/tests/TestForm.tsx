"use client";

import { redirect } from "next/navigation";
import React, { useActionState } from "react";

// formAction
export const testAction = async (prevState: any, formData: FormData) => {
  await new Promise((r) => setTimeout(r, 1000));
  const username = formData.get("username");
  const form = Object.fromEntries(formData.entries());
  console.log({ prevState, form: Object.fromEntries(formData.entries()) });
  if (form.username === "chan") return redirect("/tests");
  if (!username) {
    return { error: "name filed is required!" };
  }
  return { username };
};

// interface DefaultState {
//   error: string | undefined;
//   success: string | undefined;
// }

// const defaultState: DefaultState = {
//   error: "",
//   success: "default value",
// };

const TestForm = () => {
  const [state, formAction, pending] = useActionState(testAction, {});

  if (pending) return <>Loading . . .</>;
  return (
    <React.Fragment>
      <main>
        {JSON.stringify(state, null)}
        <form action={formAction}>
          <input type="text" name="username" placeholder="enter name" />
          <span className="text-red-600 text-sm ">
            {state.error ? state?.error : null}
          </span>
          <button type="submit">Submit</button>
        </form>
      </main>
    </React.Fragment>
  );
};

export default TestForm;
