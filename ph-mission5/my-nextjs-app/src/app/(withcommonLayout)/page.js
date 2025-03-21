import ProductCard from "@/components/ProductCard";
import { fetchRevalidate } from "@/utils/fetchProduct";
import Link from "next/link";

const HomePage = async () => {
  const products = await fetchRevalidate("http://localhost:5000/products/", 30);

  return (
    <div className="container mx-auto px-4 py-5">
      <h1 className="text-3xl font-bold  text-center">Feature Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-4 mt-6">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Link
          href={`/products`}
          className="bg-yellow-500 hover:text-white text-black py-2 px-4 rounded shadow transition-all border hover:bg-slate-800">
          View All
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
