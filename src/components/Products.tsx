import { product } from "@/types/types";
import { products } from "@/utils/data";

export const ProductCard = ({ product }: { product: product }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover mb-4 rounded"
      />
      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
      <p className="text-gray-600 mb-2">₹{product.price}</p>
      <p className="text-sm text-gray-500 mb-4">{product.description}</p>
      <button className="w-full bg-gray-100 text-gray-800 py-2 rounded hover:bg-gray-200 transition-colors">
        {product.isCart ? "Added to cart" : "Add to cart"}
      </button>
    </div>
  );
};

export const ProductGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-12 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
