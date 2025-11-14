import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Header() {
  return (
    <h1
      style={{ color: "orange", fontSize: "48px", textTransform: "uppercase" }}
    >
      Andy's Pizza Co.
    </h1>
  );
}

function App() {
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 9 && currentHour <= 22;

  return (
    <div className="container">
      <Header />
      {/* Tagline only if shop is open */}
      {isOpen && (
        <h3 className="menu-subtitle" style={{ fontSize: 15 }}>
          Authentic italian cuisine, all from our stone oven
        </h3>
      )}
      <Menu />
      <Footer isOpen={isOpen} />
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

  // **State for favourites**
  const [favourites, setFavourites] = useState([]);

  // **State for search input**
  const [searchQuery, setSearchQuery] = useState("");

  // Toggle favourite pizza
  const toggleFavourite = (name) => {
    if (favourites.includes(name)) {
      setFavourites(favourites.filter((item) => item !== name));
    } else {
      setFavourites([...favourites, name]);
    }
  };

  // Filter pizzas based on search query
  const filteredPizzas = pizzas.filter((pizza) =>
    pizza.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search pizzas..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <div className="pizzas">
        {filteredPizzas.map((pizza) => (
          <Pizza
            pizzaObj={pizza}
            key={pizza.name}
            isFavourite={favourites.includes(pizza.name)}
            toggleFavourite={toggleFavourite}
          />
        ))}
      </div>
    </div>
  );
}

function Pizza({ pizzaObj, isFavourite, toggleFavourite }) {
  return (
    <div className={`pizza ${isFavourite ? "favourite" : ""}`}>
      <img src={pizzaObj.photo} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>${pizzaObj.price}</span>
        <button
          className="favourite-btn"
          onClick={() => toggleFavourite(pizzaObj.name)}
        >
          {isFavourite ? "❤️ Favourite" : "♡ Add Favourite"}
        </button>
      </div>
    </div>
  );
}

function Footer({ isOpen }) {
  return (
    <footer className="footer">
      {isOpen ? (
        <div style={{ textAlign: "center", fontWeight: "bold" }}>
          <p>We're currently open</p>
          <button className="btn" style={{ marginTop: "2rem" }}>
            Order
          </button>
        </div>
      ) : (
        <p style={{ textAlign: "center", fontWeight: "bold" }}>
          Sorry, we're closed
        </p>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
