import React from "react";
import { Aclonica, Poppins } from "next/font/google";
import Image from "next/image";

const aclonica = Aclonica({
  weight: ["400"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const UserPage = async () => {
  return (
    <React.Fragment>
      <main className="w-full h-screen bg-slate-100/50">
        <div className="flex justify-center items-center p-10">
          <div className="flex flex-col gap-3 ">
            <h3
              className={`${aclonica.className} text-2xl font-bold p-2 text-indigo-400 hover:text-3xl transition-all duration-600`}
            >
              User Page
            </h3>
            <h2 className="test">Test</h2>
            <p className={`text-sm text-gray-500/80 ${poppins.className}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              dolore corporis sapiente magnam qui tempora! Ipsa odio ex nostrum
              pariatur facere. Corrupti tempore, possimus quasi deserunt
              nesciunt laboriosam aspernatur facere?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              quis exercitationem illo magnam animi quidem odio, quisquam
              corrupti quia esse neque consequatur iusto at, ipsam cumque omnis
              deserunt deleniti minus?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i, idx) => (
                <Image
                  key={idx}
                  src={"/images/car-11.jpg"}
                  alt="car"
                  objectFit="cover"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-md hover:scale-105 transition-all duration-900 border-l-red-500  hover:border-4 "
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default UserPage;
