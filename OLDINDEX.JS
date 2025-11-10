import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

function Header() {
    return <h1
    style = {{color:"orange", fontSize: "48px", textTransform: 'uppercase'}}
    >Andy's Pizza Co.</h1>;
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
                {/* <Pizza/> */}
            </div>
        </div>
    );
}

function  Pizza() {
    return (
      <div className="pizza">
        <img src="/pizzas/focaccia.jpg" alt="focaccia pizza" />
        <h2>Focaccia Pizza</h2>
        <p className='pizza p'>Bread with italian olive oil and rosemary</p>
        <h3 className='pizza h3'>$6</h3>

        <img src="/pizzas/margherita.jpg" alt="margherita pizza" />
        <h2>Margherita Pizza</h2>
        <p className='pizza p'>Tomato and Mozrarella</p>
        <h3 className='pizza h3'>$10</h3>

        <img src="/pizzas/spinaci.jpg" alt="spinaci pizza" />
        <h2>Spinaci Pizza</h2>
        <p className='pizza p'>Tomato, Mozrarella, Spinach, and Ricotta Cheese</p>
        <h3 className='pizza h3'>$12</h3>

        <img src="/pizzas/funghi.jpg" alt="funghi pizza" />
        <h2>Funghi Pizza</h2>
        <p className='pizza p'>Tomato, Mozrarella, Mushrooms, and Onion</p>
        <h3 className='pizza h3'>$12</h3>

        <img src="/pizzas/salamino.jpg" alt="salamino pizza" />
        <h2>Salamino Pizza</h2>
        <p className='pizza p'>Tomato, Mozrarella, and Pepperoni</p>
        <h3 className='pizza h3'>$15</h3>

        <img src="/pizzas/prosciutto.jpg" alt="prosciutto pizza" />
        <h2>Prosciutto Pizza</h2>
        <p className='pizza p'>Tomato, Mozrarella, Ham, Aragula, and Buratta Cheese</p>
        <h3 className='pizza h3'>$18</h3>
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