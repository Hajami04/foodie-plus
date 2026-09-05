import { useState } from "react";
import "./App.css";
import RestaurantCard from "./components/RestaurantCard";

function App() {
  const restaurants = [
    {
      id: 1,
      name: "Burger King",
      rating: 4.5,
      deliveryTime: "20 mins",
      image: "https://picsum.photos/300/180?random=1",
    },
    {
      id: 2,
      name: "KFC",
      rating: 4.3,
      deliveryTime: "25 mins",
      image: "https://picsum.photos/300/180?random=2",
    },
    {
      id: 3,
      name: "Mc D",
      rating: 4.8,
      deliveryTime: "30 mins",
      image: "https://picsum.photos/300/180?random=3",
    },
  ];

  const [searchText, setSearchText] = useState("");
  const [showTopRated, setShowTopRated] = useState(false);

  const filteredRestaurants = restaurants.filter((restaurant) => {
    if (
      !restaurant.name
        .toLowerCase()
        .includes(searchText.toLowerCase())
    ) {
      return false;
    }

    if (!showTopRated) return true;

    return restaurant.rating >= 4.5;
  });

  return (
    <div className="app">
      <div className="header">
        <h1>Foodie+</h1>

        <input
          className="search-input"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search restaurants"
        />

        {searchText.length > 0 && (
          <button
            className="clear-btn"
            onClick={() => setSearchText("")}
          >
            ×
          </button>
        )}

        <button
          className="top-rated-btn"
          onClick={() => setShowTopRated((prev) => !prev)}
        >
          {showTopRated ? "Show All" : "Top Rated"}
        </button>
      </div>

      {filteredRestaurants.length === 0 && (
        <h2 className="empty-state">🔍 No restaurants found</h2>
      )}

      <div className="restaurant-grid">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            name={restaurant.name}
            rating={restaurant.rating}
            deliveryTime={restaurant.deliveryTime}
            image={restaurant.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;