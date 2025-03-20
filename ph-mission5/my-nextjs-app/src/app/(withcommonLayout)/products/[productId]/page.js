import React from "react";

const DynamicProductPage = async ({ params, searchParams }) => {
  const { productId } = await params;

  console.log(await searchParams);

  return (
    <div className="container mx-auto px-4 py-5">
      <h1 className="text-3xl font-bold underline">
        Dynamic Product Page {productId}
      </h1>
    </div>
  );
};

export default DynamicProductPage;
