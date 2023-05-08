import React from "react";
import { Container } from "../shared";
import { featureOptions } from "../../constant";

const Feature = () => {
  return (
    <Container>
      <div className="bg-[#ECEAE3] p-6 rounded-sm mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {featureOptions.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center">
              <div className="flex items-center justify-center">
                <img
                  src={feature.image}
                  alt={feature.name}
                  className="h-10 w-10 rounded-full"
                />
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-lg font-semibold">{feature.name}</h3>
                <p className="text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Feature;
