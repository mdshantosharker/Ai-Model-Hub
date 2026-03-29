import React from "react";

const Cart = ({ carts }) => {
  console.log(carts);
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Your Cart</h1>

      <div className="space-y-5 mt-5">
        {carts.map((item) => (
          <div
            key={item.id}
            className="flex p-3 items-center justify-between  border rounded-lg"
          >
            <div className="flex items-center gap-2">
              <div>
                <img
                  className="h-20 w-20 object-contain"
                  src={item.image}
                  alt=""
                />
              </div>

              <div>
                <h2 className="text-xl font-bold">{item.title}</h2>
              </div>
            </div>
            <div className="text-3xl font-bold">${item.price}/month</div>
          </div>
        ))}
      </div>

      <div className="flex justify-between bg-black text-white p-5 mt-5 rounded-lg text-2xl font-bold">
        <div>Total</div>
        <div>0</div>
      </div>
    </div>
  );
};

export default Cart;
