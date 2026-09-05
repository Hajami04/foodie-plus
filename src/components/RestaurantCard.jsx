import "./RestaurantCard.css";



function RestaurantCard({ name, rating, deliveryTime, image }) {
return (
    <div
    className="restaurant-card"
    >
    <img src={image} alt={name} className="restaurant-image" />
    <h2>{name}</h2>
    <p>⭐ {rating}</p>
    <p>🛵 {deliveryTime}</p>
    </div>
);
}

export default RestaurantCard;