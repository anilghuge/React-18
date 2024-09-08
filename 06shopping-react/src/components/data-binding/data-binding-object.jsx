export function DataBindingObject() {
  var product = {
    Name: "Samsung TV",
    Price: 4500.33,
    Stock: true,
    Cities: ["Dehli", "Hyd"],
    Rating: { Rate: 3.5, Count: 5000 },
  };

  var topic = new Map();
  topic.set("React", "It is a javascript libray");
  topic.set("Angular", "It is a Javascript Framework");
  return (
    <>
      <h2>{topic.get("Angular")}</h2>
      <h2>Proudct Details</h2>
      <dl>
        <dt>Name</dt>
        <dd>{product.Name}</dd>
        <dt>Price</dt>
        <dd>{product.Price}</dd>
        <dt>Stock</dt>
        <dd>{product.Stock === true ? "Availble" : "Not Available"}</dd>
        <dt>Shipped To</dt>
        <dd>
          <ol>
            {product.Cities.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ol>
        </dd>
        <dt>Rating:</dt>
        <dd>
          {product.Rating.Rate}
          <span className="bi bi-star-fill text-success">
            [{product.Rating.Count}]
          </span>
        </dd>
      </dl>
    </>
  );
}
