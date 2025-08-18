import React from "react";
import Image from "next/image";

interface Props {
  image: {
    id: string | number;
    avatar: string;
    createdAt: string;
  };
}

const ImageCard = async ({ image }: Props) => {
  return (
    <React.Fragment>
      {image && (
        <>
          <div className="flex flex-col bg-neutral-300 w-90 sm:w-56 min-h-80 animate-pulse rounded-xl p-4 gap-4">
            <div className="bg-neutral-400/50 w-full h-48 animate-pulse rounded-md ">
              <Image
                src={image?.avatar}
                key={image.id}
                alt={image.id.toLocaleString()}
                width={200}
                height={48}
                className="rounded-md object-cover w-full h-48"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
              <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
              <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
              <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default ImageCard;
