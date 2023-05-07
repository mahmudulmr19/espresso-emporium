import React from "react";
import banner from "/src/assets/more/3.png";
import { Container } from "../shared";
const Banner = () => {
  return (
    <Container className="flex flex-col justify-center items-center py-12">
      <div>
        <img
          src={banner}
          alt="Coffee Time banner"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="mt-4 mx-auto text-center absolute">
        <h2 className="text-3xl font-bold text-white">
          Would you like a Cup of Delicious Coffee?
        </h2>
        <p className="text-base text-gray-300 mt-2 max-w-lg mx-auto">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button className="bg-white text-[#331A15] px-4 py-2 rounded font-medium mt-4 hover:bg-white/90 transition duration-300">
          Learn More
        </button>
      </div>
    </Container>
  );
};

export default Banner;
