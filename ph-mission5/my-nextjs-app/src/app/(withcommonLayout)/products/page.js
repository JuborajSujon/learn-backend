import ProductCard from "@/components/ProductCard";
import React from "react";

const ProductsPage = async () => {
  const res = await fetch("http://localhost:5000/products/", {
    cache: "force-cache",
  });
  const products = await res.json();

  return (
    <div className="container mx-auto px-4 py-5">
      <h1 className="text-3xl font-bold underline">Products Page</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-4 mt-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
