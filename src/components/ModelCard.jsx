import React, { useState } from "react";

const ModelCard = ({ model, carts, setCarts }) => {
  const [isSubscribe, setIsSubscribe] = useState(false);
  const handleSubScription = (model) => {
    setIsSubscribe(true);
    setCarts([...carts,model])
  };
  return (
    <div className="shadow-lg rounded-lg border overflow-hidden border-zinc-200">
      <div className="flex justify-center items-center h-56 bg-zinc-300">
        <img className="w-40 h-40 object-contain" src={model.image} alt="" />
      </div>

      <div className="p-4 space-y-3">
        <h2 className="text-2xl font-bold">{model.title}</h2>
        <p>{model.description}</p>
        <div className="text-2xl font-bold">${model.price}/month</div>

        <button
          onClick={() => handleSubScription(model)}
          className="btn w-full bg-red-500 text-white rounded-lg mt-5"
        >
          {isSubscribe ? "Subscribe" : "Subscribe Now"}
        </button>
      </div>
    </div>
  );
};

export default ModelCard;
