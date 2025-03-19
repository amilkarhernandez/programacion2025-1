import React, { useEffect, useState } from "react";

export const Hooks = () => {
  //USESTATE
  const [name, setName] = useState("");

  const executeButton = () => {
    console.log("NAME:", name);
  };

  useEffect(() => {
    console.log("CARGA DE APLICACION");
  }, []);

  useEffect(() => {
    if (name != "") {
      console.log("CAMBIO DE VARIABLE", name);
    }
  }, [name]);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <input
        type="text"
        placeholder="Ingrese Nombres"
        className="bg-gray-200 mr-2 rounded-lg pl-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={executeButton}
        className="bg-black text-white w-32 rounded-lg"
      >
        Send
      </button>
    </div>
  );
};
