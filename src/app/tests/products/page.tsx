import Loader from "@/components/share/Loader";
import ProductList from "@/components/share/ProductLists";
import React, { Suspense } from "react";

const ProductsPage = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen container mx-auto bg-green-50">
        <div className="flex flex-col ">
          <h3 className="text-center text-2xl p-4 mt-4 underline underline-offset-4 text-indigo-800 hover:text-3xl transition-all duration-500">
            Products
          </h3>
          <Suspense fallback={<Loader />}>
            <ProductList />
          </Suspense>
        </div>
      </main>
    </React.Fragment>
  );
};

export default ProductsPage;
