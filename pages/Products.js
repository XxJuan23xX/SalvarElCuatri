// src/pages/Products.js
import React, { useEffect } from 'react';
import '../App.css';
import './Products.css';

function Products() {
  useEffect(() => {
    document.body.classList.add('products');
    return () => {
      document.body.classList.remove('products');
    };
  }, []);

  const dogProducts = [
    { id: 1, name: 'Small dog', price: '$10', stock: 5, image: process.env.PUBLIC_URL + '/alimentoperro1.jpg' },
    { id: 2, name: 'Pro Adult', price: '$15', stock: 8, image: process.env.PUBLIC_URL + '/alimentoperro2.jpg' },
    { id: 3, name: 'Adult Complete Nutrition', price: '$12', stock: 10, image: process.env.PUBLIC_URL + '/alimentoperro3.jpg' },
    { id: 4, name: 'Pedigree En Lata Adulto', price: '$9', stock: 7, image: process.env.PUBLIC_URL + '/alimentoperro4.jpg' },
    { id: 5, name: 'Adult 5', price: '$14', stock: 2, image: process.env.PUBLIC_URL + '/alimentoperro5.jpg' },
    { id: 6, name: 'Puppy 5', price: '$11', stock: 6, image: process.env.PUBLIC_URL + '/alimentoperro6.jpg' }
  ];

  const catProducts = [
    { id: 1, name: 'Whiskas Kitten', price: '$8', stock: 10, image: process.env.PUBLIC_URL + '/alimentogato1.jpg' },
    { id: 2, name: 'Whiskas 1+', price: '$12', stock: 4, image: process.env.PUBLIC_URL + '/alimentogato2.jpg' },
    { id: 3, name: 'Whiskas In Gravy 400gr', price: '$11', stock: 3, image: process.env.PUBLIC_URL + '/alimentogato3.jpg' },
    { id: 4, name: 'Whiskas In Gravy 85gr', price: '$9', stock: 7, image: process.env.PUBLIC_URL + '/alimentogato4.jpg' },
    { id: 5, name: 'Whiskas 1+ En Caja', price: '$13', stock: 6, image: process.env.PUBLIC_URL + '/alimentogato5.jpg' },
    { id: 6, name: 'Whiskas 1+ In Gravy Umak', price: '$10', stock: 5, image: process.env.PUBLIC_URL + '/alimentogato6.jpg' }
  ];

  return (
    <div className="catalog-container">
      <div className="category">
        <h2>Alimentos para Perros</h2>
        <div className="product-grid">
          {dogProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <p className="stock">Existencias: {product.stock}</p>
              <button>Comprar</button>
            </div>
          ))}
        </div>
      </div>

      <div className="category">
        <h2>Alimentos para Gatos</h2>
        <div className="product-grid">
          {catProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <p className="stock">Existencias: {product.stock}</p>
              <button>Comprar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;


