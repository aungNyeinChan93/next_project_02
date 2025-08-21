import React from "react";
import { Product } from "./ProductLists";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <React.Fragment>
      <Link href={`/tests/products/${product.id}`}>
        <div className="relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-indigo-800 text-gray-50 p-5 rounded-lg">
          <div className="">
            <div className="group-hover:scale-110 w-50 mx-auto h-60  duration-500">
              <Image
                src={product.image}
                alt={product.category}
                width={150}
                height={150}
                className=" object-center mx-auto"
              />
            </div>
            <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
              <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
              <span className="text-base font-bold">
                {product.title.substring(0, 18) + ". . ."}
              </span>
              <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                {product.description.slice(0, 50)}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
};

export default ProductCard;
