import React from 'react';

function Card(props) {
  const { nombre, colorFavorito } = props.data;

  return (
    <div className="card">
      <h2>Información del Usuario</h2>
      <p>Nombre: {nombre}</p>
      <p>Color Favorito: {colorFavorito}</p>
    </div>
  );
}

export default Card;
