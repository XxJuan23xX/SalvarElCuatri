// src/pages/Home.js
import React, { useEffect } from 'react';
import './Home.css';

function Home() {
  useEffect(() => {
    document.body.classList.add('home');
    return () => {
      document.body.classList.remove('home');
    };
  }, []);

  return (
    <main>
      <div className="welcome-text">
        <h1>Bienvenidos a PetStore</h1>
        <p>Explora nuestros productos y encuentra lo mejor para tu mascota.</p>
      </div>
    </main>
  );
}

export default Home;


