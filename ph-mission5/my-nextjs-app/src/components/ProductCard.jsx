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
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
