import React, { use } from "react";

const Models = ({ modelPromise }) => {
  const models = use(modelPromise);
  console.log(models);
  return (
    <div className="py-20 max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="font-bold text-5xl">Choose Your AI Model</h2>
        <p>One subscription gives you access to all frontier AI models</p>
      </div>

      <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-10">
        {models.map((model) => (
          <div className="shadow-lg rounded-lg border overflow-hidden border-zinc-200">
            <div className="flex justify-center items-center h-56 bg-zinc-300">
              <img
                className="w-40 h-40 object-contain"
                src={model.image}
                alt=""
              />
            </div>

            <div className="p-4 space-y-3">
              <h2 className="text-2xl font-bold">{model.title}</h2>
              <p>{model.description}</p>
              <div className="text-2xl font-bold">${model.price}/month</div>

              <button className="btn w-full bg-red-500 text-white rounded-lg mt-5">
                Subscribe Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Models;
