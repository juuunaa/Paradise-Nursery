import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import { Link } from "react-router-dom";

const plantsData = {
  Indoor: [
    { id: 1, name: "Monstera", price: 20, img: "plant1.jpg" },
    { id: 2, name: "Snake Plant", price: 15, img: "plant2.jpg" },
    { id: 3, name: "Peace Lily", price: 18, img: "plant3.jpg" },
    { id: 4, name: "ZZ Plant", price: 22, img: "plant4.jpg" },
    { id: 5, name: "Pothos", price: 12, img: "plant5.jpg" },
    { id: 6, name: "Philodendron", price: 19, img: "plant6.jpg" }
  ],
  Outdoor: [
    { id: 7, name: "Palm", price: 30, img: "plant7.jpg" },
    { id: 8, name: "Bamboo", price: 25, img: "plant8.jpg" },
    { id: 9, name: "Aloe Vera", price: 10, img: "plant9.jpg" },
    { id: 10, name: "Cactus", price: 8, img: "plant10.jpg" },
    { id: 11, name: "Agave", price: 28, img: "plant11.jpg" },
    { id: 12, name: "Yucca", price: 26, img: "plant12.jpg" }
  ],
  Flowering: [
    { id: 13, name: "Rose", price: 20, img: "plant13.jpg" },
    { id: 14, name: "Orchid", price: 35, img: "plant14.jpg" },
    { id: 15, name: "Tulip", price: 18, img: "plant15.jpg" },
    { id: 16, name: "Lily", price: 22, img: "plant16.jpg" },
    { id: 17, name: "Daisy", price: 14, img: "plant17.jpg" },
    { id: 18, name: "Sunflower", price: 16, img: "plant18.jpg" }
  ]
};

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const isAdded = id => cartItems.some(item => item.id === id);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      {/* ✅ NAVBAR */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/plants">Plants</Link> |{" "}
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>

      <h2>Our Plants</h2>

      {Object.keys(plantsData).map(category => (
        <div key={category}>
          <h3>{category}</h3>

          {plantsData[category].map(plant => (
            <div key={plant.id} className="plant-card">
              <img src={plant.img} alt={plant.name} />
              <h4>{plant.name}</h4>
              <p>${plant.price}</p>

              <button
                disabled={isAdded(plant.id)}
                onClick={() => dispatch(addItem(plant))}
              >
                {isAdded(plant.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
