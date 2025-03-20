import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="shadow-lg rounded-lg p-4">
      <img
        src={product.image}
        alt={product.productName}
        className="w-full h-40 object-cover rounded-md"
      />
      <div className="mt-4">
        <h2 className="text-lg font-semibold">{product.productName}</h2>
        <p className="text-sm ">{product.category}</p>
        <p className="text-sm font-medium">Brand: {product.brand}</p>
        <p className="text-xl font-bold mt-2">${product.price.toFixed(2)}</p>
        <div className="flex items-center justify-between mt-4">
          <Link
            href={`/products/${product.id}`}
            className="bg-black text-white py-2 px-4 rounded shadow transition-all border hover:bg-slate-800">
            See Details
          </Link>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
