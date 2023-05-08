import React from "react";
import { Banner, Feature, Popular } from "../../Components/Home";
import { useTitle } from "../../hooks";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner />
      <Feature />
      <Popular />
    </div>
  );
};

export default Home;
