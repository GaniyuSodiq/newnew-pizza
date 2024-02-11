import "./App.css";

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

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>FAST REACT PIZZA CO.</h1>
    </div>
  );
}

function Menu() {
  return (
    <>
      <div className="menu">
        <h2>menu</h2>

        {pizzaData.length === 0 ? (
          <p>We're out of stock, please check back</p>
        ) : (
          <>
            <p>
              Authentic Italian cuisine. 6 creative cuisines to choose from. All
              from our store ove, all organic, all hygienic.
            </p>

            <ul className="pizzas">
              {pizzaData.map((pizza) => (
                <li className="pizza">
                  <img src={pizza.photoName} alt={pizza.name} />
                  <div>
                    <h3>{pizza.name}</h3>
                    <p>{pizza.ingredients}</p>
                    <span className="sold-out">{pizza.price}</span>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
}

function Footer() {
  const openHour = 12;
  const closeHour = 22;
  const hour = new Date().getHours();
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <div>
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We re closed, please come between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </div>
  );
}

function Order({ closeHour }) {
  return (
    <div>
      <p>We are open till {closeHour}:00. Come visit us or order online</p>
      <button className="btn">Order</button>
    </div>
  );
}

export default App;
