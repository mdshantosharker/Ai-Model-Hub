import React, { useState } from "react";
import { toast } from "react-toastify";

const ModelCard = ({ model, carts, setCarts }) => {
  const [isSubscribe, setIsSubscribe] = useState(false);

  const handleSubScription = (model) => {
    setIsSubscribe(true);
    const alreadyAdded = carts.find((item) => item.id === model.id);
    if (alreadyAdded) {
      toast.error("Item already added!!");
      return;
    }
    setCarts([...carts, model]);
    toast.success("Item added to cart!");
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-lg border border-zinc-200 overflow-hidden 
                    transition-transform transform hover:scale-110 duration-200
                    flex flex-col w-full max-w-sm mx-auto"
    >
      <div className="flex justify-center items-center bg-zinc-100 h-48 sm:h-56 md:h-64">
        <img
          className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-contain"
          src={model.image}
          alt={model.title}
        />
      </div>

      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-1 sm:space-y-2">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-900 truncate">
            {model.title}
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 line-clamp-3">
            {model.description}
          </p>
        </div>

        <div className="mt-3 sm:mt-4 flex flex-col gap-2">
          <div className="text-base sm:text-lg md:text-xl font-bold text-zinc-900">
            ${model.price}/month
          </div>
          <button
            onClick={() => handleSubScription(model)}
            className={`w-full py-2 sm:py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
              isSubscribe
                ? "bg-green-500 hover:bg-green-600"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            {isSubscribe ? "Subscribed" : "Subscribe Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
