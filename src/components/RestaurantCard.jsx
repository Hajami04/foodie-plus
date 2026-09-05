import "./RestaurantCard.css";



function RestaurantCard({ name, rating, deliveryTime }) {
return (
    <div
    className="restaurant-card"
    >
    <h2>{name}</h2>
    <p>⭐ {rating}</p>
    <p>🛵 {deliveryTime}</p>
    </div>
);
}

export default RestaurantCard;