import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const OrderPage: React.FC = () => {
  const { orders } = useCart();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6 font-mono">Your Orders</h1>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div
            key={order.id}
            className="mb-8 p-4 border border-gray-200 rounded-lg"
          >
            <h2 className="text-xl font-bold font-serif">
              Order ID: {order.id}
            </h2>
            <p className="text-gray-500 font-mono">
              Date: {new Date(order.date).toLocaleString()}
            </p>
            <div className="mt-4">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-2 border-b border-gray-200"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover"
                    />
                    <div className="flex flex-col gap-1">
                      <h2 className="text-lg font-semibold font-serif">
                        {item.name}
                      </h2>
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>
                      <div className="flex flex-row gap-4">
                        <p className="text-gray-900 font-medium font-mono">
                          ₹{item.price} x {item.quantity}
                        </p>
                        <p className="text-gray-900 font-medium font-mono line-through">
                          ₹{item.mrp}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-lg font-semibold font-mono">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-right mt-4">
              <h3 className="text-lg font-bold font-mono">
                Total Amount: ₹{order.totalAmount.toFixed(2)}
              </h3>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 font-mono text-2xl">
          You have no orders yet.
        </p>
      )}
      <div className="mt-6">
        <Link to="/" className="text-blue-700 font-serif text-lg font-medium">
          Continue shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderPage;
