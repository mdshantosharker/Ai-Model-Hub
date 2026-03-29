import React, { use } from "react";
import ModelCard from "./ModelCard";

const Models = ({ modelPromise, carts, setCarts }) => {
  const models = use(modelPromise);
  // console.log(models);

  return (
    <div className="py-20 max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="font-bold text-5xl">Choose Your AI Model</h2>
        <p>One subscription gives you access to all frontier AI models</p>
      </div>

      <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-10">
        {models.map((model,index) => (
          <ModelCard carts={carts} key={index} setCarts={setCarts} model={model} />
        ))}
      </div>
    </div>
  );
};

export default Models;
