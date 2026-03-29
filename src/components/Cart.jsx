import React from "react";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    setCarts([]);
    toast.success("Payment Successful!");
  };

  const handleRemove = (id) => {
    const filtered = carts.filter((item) => item.id !== id);
    setCarts(filtered);
    toast.success("Item Removed!");
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-6xl mx-auto flex flex-col gap-5">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-wide">
        🛒 Your Cart
      </h1>

      {carts.length === 0 ? (
        <p className="text-center text-lg sm:text-xl py-20 text-zinc-500">
          Your cart is empty
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {carts.map((item) => (
              <div
                key={item.id}
                className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-zinc-200 p-3 sm:p-4 flex flex-col justify-between hover:shadow-xl hover:scale-105 transform transition-all duration-300"
              >
                <div className="flex justify-center mb-3">
                  <img
                    className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-lg"
                    src={item.image}
                    alt={item.title}
                  />
                </div>

                <h2 className="text-base sm:text-lg font-semibold text-zinc-900 text-center line-clamp-2">
                  {item.title}
                </h2>

                <div className="mt-3 flex justify-between items-center">
                  <span className="text-base sm:text-lg font-bold text-zinc-900">
                    ${item.price}/month
                  </span>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="p-2 sm:p-2.5 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-md transition-all duration-300 flex items-center justify-center"
                  >
                    <FaTrash className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center bg-zinc-900 text-white p-4 sm:p-5 rounded-xl mt-5 shadow-lg">
            <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide">
              Total
            </span>
            <span className="text-lg sm:text-xl md:text-2xl font-extrabold">
              ${totalPrice}
            </span>
          </div>

          <button
            onClick={handlePayment}
            className="mt-4 w-full sm:w-auto self-center px-5 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold text-lg sm:text-xl rounded-xl shadow-lg transition-all duration-300"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
