import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App(){
  return (<div className='container'>
    <Header />
    <Menu />
    
  
  <Footer />
    </div>)
}

function Pizza(){
  return <div>
    

  <h3>Pizza Spinaci</h3>
  <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
  <p>Tomato, mozarella, mushrooms, and onion</p>
  </div>;
}

function Header(){
  const style = {
   
  };
  return (<div  className='header'>
    <h1 style={style}>Welcome to Pizza Application</h1>;
    </div>);
}

function Menu(){
  return <main className='menu'>
  
    <h2>Our Menu</h2>;
    <Pizza />
  <Pizza />
  <Pizza />
    </main>

}
function Footer(){

  return <footer className='footer'>{new Date().toLocaleTimeString()}. We are currently open
  </footer>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

