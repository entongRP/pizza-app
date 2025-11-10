import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

function Header() {
  return (
    <header className="header">
      <h1>Andy's Pizza Co.</h1>
    </header>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Menu() {
  const pizzas = [
    {
      name: "Focaccia Pizza",
      ingredients: "Bread with Italian olive oil and rosemary",
      price: 6,
      photo: "/pizzas/focaccia.jpg",
    },
    {
      name: "Margherita Pizza",
      ingredients: "Tomato and Mozzarella",
      price: 10,
      photo: "/pizzas/margherita.jpg",
    },
    {
      name: "Spinaci Pizza",
      ingredients: "Tomato, Mozzarella, Spinach, and Ricotta Cheese",
      price: 12,
      photo: "/pizzas/spinaci.jpg",
    },
    {
      name: "Funghi Pizza",
      ingredients: "Tomato, Mozzarella, Mushrooms, and Onion",
      price: 12,
      photo: "/pizzas/funghi.jpg",
    },
    {
      name: "Salamino Pizza",
      ingredients: "Tomato, Mozzarella, and Pepperoni",
      price: 15,
      photo: "/pizzas/salamino.jpg",
    },
    {
      name: "Prosciutto Pizza",
      ingredients: "Tomato, Mozzarella, Ham, Arugula, and Burrata Cheese",
      price: 18,
      photo: "/pizzas/prosciutto.jpg",
    },
  ];

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="pizzas">
        {pizzas.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </div>
    </div>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <div className="pizza">
      <img src={pizzaObj.photo} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>${pizzaObj.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 10 && currentHour <= 22;

  return (
    <footer className="footer">
      {isOpen ? "We're currently open" : "Sorry, we're closed"}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
