import React, { useState } from "react";
import { PruebaComponent } from "../components/PruebaComponent";
import { AddUsers } from "../components/AddUsers";

const users = [
  {
    id: 1,
    name: "Jose",
    lastName: "Hernandez",
    age: 30,
  },
  {
    id: 2,
    name: "Daniel",
    lastName: "Guzman",
    age: 28,
  },
  {
    id: 3,
    name: "Viviney",
    lastName: "Fernandez",
    age: 20,
  },
];

export const DashboardPage = () => {
  const [datos, setDatos] = useState(users);

  const elementLast = datos[datos.length - 1];
  console.log(elementLast);

  return (
    <>
      <PruebaComponent title={"Datos de los Usuarios"} users={datos} />
      <AddUsers datos={datos} setDatos={setDatos} />
    </>
  );
};
