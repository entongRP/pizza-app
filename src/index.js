import React from 'react';
import ReactDOM from 'react-dom/client';

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
    return <h1>Andy's Pizza Co.</h1>;
}

function Pizza () {
    return (
      <div>
      <img src="/pizzas/funghi.jpg" alt="funghi pizza"/>
      <h2>Funghi Pizza</h2>
      <d2>Mushroom & cream</d2>
      <h3>10</h3>
      </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
