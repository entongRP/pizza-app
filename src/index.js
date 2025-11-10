import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

function Header() {
    return <h1
    style = {{color:"orange", fontSize: "48px", textTransform: 'uppercase'}}
    >Andy's Pizza App</h1>;
}

function App () {
    return (
        <div className='container'>
            <Header/>
            <Menu />
            <Footer />
        </div>
    );
}

function Menu() {
    return (
        <div className='menu'>
            <h2>Our Menu</h2>
            <div className='pizzas'>
                <Pizza/>
                <Pizza/>
            </div>
        </div>
    );
}

function  Pizza() {
    return (
      <div className="pizza">
        <img src="/pizzas/funghi.jpg" alt="funghi pizza" />
        <h2>Funghi Pizza</h2>
        <p className='pizza p'>Cheese, mushroom, onions, tomatoes</p>
        <h3 className='pizza h3'>$11</h3>
      </div>
      
    );
}

function Footer() {
    const currentHour = new Date().getHours();
    const isOpen = currentHour >= 10 && currentHour <= 22;
  return (
    <footer className='footer'>
        {isOpen ? "We're currently open" : "Sorry we're closed"}
    </footer>
  );
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);