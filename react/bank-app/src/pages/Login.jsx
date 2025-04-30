import React, { useState } from "react";
import logo from "../assets/logobank.png";
import axios from "axios";
import Swal from "sweetalert2";

export const Login = () => {
  // STATES
  const [identificacion, setIdentification] = useState("");
  const [password, setPassword] = useState("");

  const serviceLogin = () => {
    const data = {
      identification: identificacion,
      password: password,
    };

    axios
      .post(
        "https://dataaccess.nucleoslabs.com.co/api/v1/authentication/login",
        //"http://localhost:3000/api/v1/authentication/login",
        data
      )
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        Swal.fire("Información", "Ocurrio un error Inesperado", "error");
        console.log(error);
      });
  };

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center p-2"
      style={{ backgroundImage: "url('src/assets/backgrouund.svg')" }}
    >
      <div className="flex flex-col gap-30">
        <div className="flex flex-col items-center gap-30">
          <img src={logo} alt="logo" className="w-72 rounded-lg text-white" />
          <h2 className="font-bold text-white text-3xl">Login</h2>
        </div>
        <div className="h-auto flex flex-col justify-between items-center gap-18">
          <div className="flex flex-col gap-8">
            <input
              type="text"
              placeholder="Identificacion"
              className="w-60 h-10 bg-gray-300 rounded-3xl pl-3 text-black"
              value={identificacion}
              onChange={(e) => setIdentification(e.target.value)}
            />
            <input
              type="password"
              placeholder="Clave"
              className="w-60 h-10 bg-gray-300 rounded-3xl pl-3 text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="h-10 bg-purple-950 rounded-3xl text-white"
              onClick={serviceLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
