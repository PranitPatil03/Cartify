import toast from "react-hot-toast";
import { product } from "../types/types";
import { products } from "../utils/data";
import { useCart } from "../context/CartContext";
import { Button } from "./ui/button";

export const ProductCard = ({ product }: { product: product }) => {
  const { addToCart, cartItems } = useCart();

  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      addToCart(product);
      toast.success(`${product.name} added to cart!`);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover mb-4 rounded"
      />
      <h3 className="text-lg font-semibold text-gray-800 ">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-4 mt-1 font-serif">
        {product.description}
      </p>
      <div className="flex flex-row gap-5">
        <p className="text-gray-600 mb-4 text-xl font-serif font-semibold">
          ₹{product.price}
        </p>
        <p className="text-gray-600 mb-4 text-lg line-through font-serif">
          ₹{product.mrp}
        </p>
      </div>
      <Button
        className={`w-full py-2 rounded transition-colors font-serif ${
          isInCart ? "bg-gray-200 text-gray-600 cursor-not-allowed" : ""
        }`}
        onClick={handleAddToCart}
        disabled={isInCart}
      >
        {isInCart ? "Added to cart" : "Add to cart"}
      </Button>
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
