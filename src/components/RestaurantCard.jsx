function RestaurantCard({ name, rating, deliveryTime }) {
return (
    <div
    style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "16px",
        margin: "12px",
        width: "220px",
    }}
    >
    <h2>{name}</h2>
    <p>⭐ {rating}</p>
    <p>🛵 {deliveryTime}</p>
    </div>
);
}

export default RestaurantCard;