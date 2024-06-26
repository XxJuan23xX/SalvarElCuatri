// src/pages/About.js
import React, { useEffect } from 'react';
import './About.css';

function About() {
  useEffect(() => {
    document.body.classList.add('about-body');
    return () => {
      document.body.classList.remove('about-body');
    };
  }, []);

  return (
    <div className="about-container">
      <main className="about-main">
        <h1>DESARROLLADO POR:</h1>
        <div className="team-container">
          <div className="team-card">
            <img src="/Guapoo.jpeg" alt="Juan Manuel Kau Sima" />
            <div className="description">
              <h3>Juan Manuel Kau Sima</h3>
              <p>Guapo, inteligente, futuro UX Designer, aprendiendo react y angular, filósofo, le mueve a SQL Server, le medio entiende al inglés, lee libros por hobby.</p>
            </div>
          </div>
          <div className="team-card">
            <img src="/Miguel.jpeg" alt="Miguel Angel Rosado Montuy" />
            <div className="description">
              <h3>Miguel Angel Rosado Montuy</h3>
              <p>Le sabe a vue.js, conocimientos en Docker (Fedora), cuando se ilumina es imparable, frase célebre: No digas eso gordo.</p>
            </div>
          </div>
        </div>
        <p className="quote"><i>"Lo único que no logras, es aquello que no intentas"</i></p>
      </main>
    </div>
  );
}

export default About;

