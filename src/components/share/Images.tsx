import React from "react";
import { MOCK_KEY } from "@/utils/config";
import Image from "next/image";
import ImageCard from "./ImageCard";

// types
export type Image = {
  createdAt: string;
  avatar: string;
  id: string | number;
};

// actions
export const getImages = async (): Promise<Array<Image> | undefined> => {
  const response = await fetch(
    `https://${MOCK_KEY}.mockapi.io/api/next_01/images`
  );
  if (!response.ok) throw new Error("Images fetching fail");
  const images: Image[] | undefined = await response.json();
  return images;
};

const Images = async () => {
  const images: Array<Image> | undefined = await getImages();
  // console.log(images);a

  return (
    <React.Fragment>
      <main className=" flex justify-center mx-auto bg-green-900/60 p-5 my-2 rounded-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images &&
            Array.isArray(images) &&
            images?.map((image) => <ImageCard key={image.id} image={image} />)}
        </div>
      </main>
    </React.Fragment>
  );
};

export default Images;
