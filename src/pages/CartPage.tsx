import React from "react";
import { useCart } from "../context/CartContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CartPage: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const calculateSubtotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const calculateTotalAfterDiscount = () => {
    const subtotal = calculateSubtotal();
    const shipping = 100.0;
    const tax = subtotal * 0.0832;
    const discount=subtotal * 0.1
    return (subtotal + shipping + tax) - discount;
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6 font-mono">Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="md:flex items-center justify-between py-4 border-b border-gray-200"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover"
                  />
                  <div className="flex flex-col gap-2">
                    <h2 className="text-lg font-semibold font-mono text-xl">
                      {item.name}
                    </h2>
                    <p className="text-sm text-gray-500 font-mono text-bg">
                      {item.description}
                    </p>
                    <p className="text-gray-900 font-medium font-mono font-bold text-xl">
                      ₹{item.price}
                    </p>
                  </div>
                </div>
                <div className="flex items-end justify-end space-x-2">
                  <Select
                    value={item.quantity.toString()}
                    onValueChange={(value) =>
                      updateQuantity(item.id, parseInt(value))
                    }
                  >
                    <SelectTrigger className="w-[80px] outline-none">
                      <SelectValue placeholder="Qty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="6">6</SelectItem>
                    </SelectContent>
                  </Select>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-500"
                  >
                    <span className="text-3xl">&times;</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 font-mono text-2xl ">
              Your cart is empty.
            </p>
          )}
        </div>
        <div className="lg:w-1/3 lg:pl-6">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h2 className="text-lg font-medium">Order summary</h2>
            <div className="mt-4">
              <div className="flex justify-between">
                <span className="px-3 py-2">Subtotal</span>
                <span className="px-3 py-2 rounded-xl">
                  {" "}
                  ₹{calculateSubtotal().toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="px-3 py-2">Shipping estimate</span>
                <span className="px-3 py-2 rounded-xl ">₹100</span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="px-3 py-2">Tax estimate</span>
                <span className="px-3 py-2 rounded-xl ">
                  {" "}
                  ₹{(calculateSubtotal() * 0.0832).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="px-3 py-2">
                  Total Discount <span className="text-sm">(10% off)</span>
                </span>
                <span className="px-3 py-2 rounded-xl">
                {" "}
                ₹{(Number(calculateSubtotal().toFixed(2)) * 0.1).toFixed(2)}
                </span>
              </div>
              <hr className="border w-full mt-2"></hr>
              <div className="flex justify-between mt-2 text-lg font-medium">
                <span className="px-3 py-2">Order total cost</span>
                <span className="px-3 py-2 rounded-xl">
                  {" "}
                  ₹{calculateTotalAfterDiscount().toFixed(2)}
                </span>
              </div>
              <Button className="mt-6 w-full text-white py-2 rounded-lg ">
                Checkout
              </Button>
            </div>
            <div className="flex items-center justify-center w-full mt-4">
              <Link
                to="/"
                className="text-blue-600 font-mono text-lg font-semibold"
              >
                Continue shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
