import React from "react";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export const Screem = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center p-2"
      style={{ backgroundImage: "url('src/assets/backgrouund.svg')" }}
    >
      <div className="flex flex-col gap-30">
        <div className="flex flex-col items-center gap-30">
          <img src={logo} alt="logo" className="w-50 rounded-lg text-white" />
          <h2 className="font-bold text-white text-3xl">BankApp</h2>
        </div>
        <div className="h-auto flex flex-col justify-between items-center gap-18">
          <div className="flex flex-col gap-8">
            <button
              className="bg-gradient-to-r from-purple-700 to-purple-400 h-16 w-80 rounded-3xl text-white font-bold text-lg cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Log in
            </button>
            <button className="bg-white h-16 w-80 rounded-3xl text-purple-700 font-bold text-lg cursor-pointer shadow-md">
              Register
            </button>
          </div>
          <p className="text-purple-700">Need help?</p>
        </div>
      </div>
    </div>
  );
};
