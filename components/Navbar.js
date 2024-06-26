// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Asegúrate de que el archivo CSS se importe correctamente

function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/products">Productos</Link></li>
          <li><Link to="/about">Sobre Nosotros</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

