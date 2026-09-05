
import { useState } from "react";
import RestaurantCard from "./components/RestaurantCard";

function App() {

const restaurants = [
    {
    id: 1,
    name: "Burger King",
    rating: 4.5,
    deliveryTime: "20 mins",
    },
    {
    id: 2,
    name: "KFC",
    rating: 4.3,
    deliveryTime: "25 mins",
    },
    {
    id: 3,
    name: "Mc D",
    rating: 4.8,
    deliveryTime: "30 mins",
    },
];
const [searchText, setSearchText] = useState ("");
const [showTopRated, setShowTopRated] = useState(false);

return (
    <div>
    <h1>Foodie+</h1>

    
    <input
    type="text"
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
    placeholder="Search restaurants"
    />
    <button onClick={() => setShowTopRated(!showTopRated)}>
    Top Rated
</button>
{restaurants
  .filter((restaurant) => {
    if (
      !restaurant.name
        .toLowerCase()
        .includes(searchText.toLowerCase())
    )
      return false;

    if (!showTopRated) return true;

    return restaurant.rating >= 4.5;
  })
  .map((restaurant) => (
    <RestaurantCard
      key={restaurant.id}
      name={restaurant.name}
      rating={restaurant.rating}
      deliveryTime={restaurant.deliveryTime}
    />
  ))}
    </div>
    
);
}

export default App;