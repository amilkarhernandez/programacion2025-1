import React from "react";

export const PruebaComponent = ({ title, users }) => {
  return (
    <>
      <h1>{title}</h1>
      <table id="customers">
        <thead>
          <tr>
            <th>Names</th>
            <th>LastNames</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((element) => {
            return (
              <tr key={element.id}>
                <td>{element.name}</td>
                <td>{element.lastName}</td>
                <td>{element.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
