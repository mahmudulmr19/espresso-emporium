import React from "react";
import Container from "./Container";
import logo from "../../assets/icons/logo.png";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#372727] text-white">
      <Container className="flex items-center justify-center gap-5 py-2 cursor-pointer select-none">
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt="Espresso Emporium"
          className="h-16"
        />
        <h2 className="font-bold text-xl">Espresso Emporium</h2>
      </Container>
    </div>
  );
};

export default Header;
