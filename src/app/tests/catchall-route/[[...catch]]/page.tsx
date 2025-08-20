import React from "react";

interface Props {
  params: Promise<{
    catch: Array<string>;
  }>;
}
const CatchAllPage = async ({ params }: Props) => {
  // if ((await params).catch.length < 1) {
  //   return null;
  // }

  const {
    catch: [one, two, ...three],
  } = await params;

  console.log({ one, two, three });

  return (
    <React.Fragment>
      <main className="w-full h-screen flex justify-center items-center">
        <pre>{JSON.stringify(one)}</pre>
        <pre>{JSON.stringify(two)}</pre>
        <pre>{JSON.stringify(three)}</pre>
      </main>
    </React.Fragment>
  );
};

export default CatchAllPage;
