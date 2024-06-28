import logo from "./logo.svg";
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
  const styleHeader = {
    color: "orange",
    fontSize: "48px",
    textTransform: "uppercase",
  };
  return (
    <header className="header footer">
      <h1 style={styleHeader}>Exotic Estern Foodie!</h1>
    </header>
  );
}

//Parent and child "props"
function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
        <p>{}</p>
      </div>
    </li>
  );
}

//React.Fragment:  <React.Fragment></React.Fragment>
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Chinese cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu, Please come back later!</p>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  if (isOpen) alert("We're currently Open!");
  else alert("Sorry we're Closed");
  console.log(hour);

  if (!isOpen) return <p>CLOSED</p>;
  return (
    // combine the JS with the html.
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to meet you between {openHour}:00 to {closeHour}:00
        </p>
      )}
    </footer>
  );
  //new Date().toLocaleTimeString()
  //return React.createElement("footer", null, "We're currently open!");
}

//using {} to destructing the props
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're currently open from {openHour}:00 to {closeHour}:00. Come visit us
        or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
export default App;
