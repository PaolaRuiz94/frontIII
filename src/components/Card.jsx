import React from "react";

const Card = ({ nombre, animal}) => {
  return (
    <div>
      <h3>nombre: {nombre} </h3>
      <h3>animal: {animal} </h3>

    </div>
  );
};

export default Card;
