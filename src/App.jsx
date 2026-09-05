
import { useState } from "react";
import RestaurantCard from "./components/RestaurantCard";

function App() {
const [showTopRated, setShowTopRated] = useState(false);
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

return (
    <div>
    <h1>Foodie+</h1>

    {restaurants.map((restaurant) => (
        <RestaurantCard
        key={restaurant.id}
        name={restaurant.name}
        rating={restaurant.rating}
        deliveryTime={restaurant.deliveryTime}
        />
    ))}
    <button onClick={() => setShowTopRated(!showTopRated)}>
    Top Rated
</button>
    </div>
    
);
}

export default App;