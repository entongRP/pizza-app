import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

function App() { 
    return (
    <div>
        {/* <h1>Andy's Pizza Co.</h1> */}
        <Header />
        <Pizza />
    </div>
    );
}

function Header() { 
    return <h1 className='header'>Andy's Pizza Co.</h1>;
}

function Pizza() {
  return (
    <div className="pizza-menu">
      <div className="pizza-card">
        <img src="/pizzas/funghi.jpg" alt="funghi pizza" className="pizza-img" />
        <h2>Funghi Pizza</h2>
        <p>Cheese, mushroom, onions, tomatoes</p>
        <h3>$11</h3>
      </div>

      <div className="pizza-card">
        <img src="/pizzas/focaccia.jpg" alt="focaccia pizza" className="pizza-img" />
        <h2>Focaccia Pizza</h2>
        <p>Cheese, meat, herbs, tomato sauce</p>
        <h3>$15</h3>
      </div>

      <div className="pizza-card">
        <img src="/pizzas/margherita.jpg" alt="Margherita pizza" className="pizza-img" />
        <h2>Margherita Pizza</h2>
        <p>Cheese, herbs, tomato sauce</p>
        <h3>$10</h3>
      </div>

      <div className="pizza-card">
        <img src="/pizzas/prosciutto.jpg" alt="prosciutto pizza" className="pizza-img" />
        <h2>Prosciutto Pizza</h2>
        <p>Cheese, herbs, tomatoes</p>
        <h3>$11</h3>
      </div>

      <div className="pizza-card">
        <img src="/pizzas/salamino.jpg" alt="salamino pizza" className="pizza-img" />
        <h2>Salamino Pizza</h2>
        <p>Cheese, meat</p>
        <h3>$12</h3>
      </div>

      <div className="pizza-card">
        <img src="/pizzas/spinaci.jpg" alt="spinaci pizza" className="pizza-img" />
        <h2>Spinaci Pizza</h2>
        <p>Cheese, spinach</p>
        <h3>$12</h3>
      </div>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
