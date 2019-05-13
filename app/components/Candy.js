import React from 'react';

const Candy = ({ id, name, description, quanity, imageUrl }) => {
  return (
    <div className="candy">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Quantity: {quanity}</p>
      <img src={imageUrl} alt={`image of ${name}`} />
    </div>
  );
};

export default Candy;
