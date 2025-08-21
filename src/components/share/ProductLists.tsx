import React from "react";
import ProductCard from "./ProductCard";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const getProducts = async (): Promise<Array<Product> | undefined> => {
  const response = await fetch(`https://fakestoreapi.com/products?limit=12`);
  const products: Product[] | undefined = await response.json();
  return products;
};

const ProductList = async () => {
  const products: Array<Product> | undefined = await getProducts();

  return (
    <React.Fragment>
      <main className=" flex justify-center w-full ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
          {products &&
            Array.isArray(products) &&
            products?.map((p: Product) => {
              return <ProductCard key={p.id} product={p} />;
            })}
        </div>
      </main>
    </React.Fragment>
  );
};

export default ProductList;
