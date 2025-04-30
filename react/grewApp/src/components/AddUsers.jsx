import React, { useState } from "react";

export const AddUsers = ({ datos, setDatos }) => {
  const [name, setName] = useState("");
  const [lastname, setlastname] = useState("");
  const [age, setAge] = useState("");

  const addDatos = () => {
    //Validate Id
    const elementLast = datos[datos.length - 1];
    const id = elementLast.id + 1;

    const data = {
      id: id,
      name: name,
      lastName: lastname,
      age: age,
    };
    console.log("DATA", data);
    setDatos((prev) => [...prev, data]);
  };

  return (
    <>
      <h1>Añadir Usuario</h1>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="LastName"
        onChange={(e) => setlastname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={addDatos}>Save</button>
    </>
  );
};
