import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function Details() {
  const [product, setProduct] = useState({
    id: 0,
    title: "",
    price: 0,
    image: "",
    category: "",
    description: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  let param = useParams();

  useEffect(() => {
    axios
      .get(`http://fakestoreapi.com/products/${param.id}`)
      .then((res) => setProduct(res.data));
  }, [param.id]);
  return (
    <div>
      <h3>Details</h3>
      <img src={product.image} width="200" height="200" />
      <dl>
        <dt>Title</dt>
        <dd>{product.title}</dd>
        <dt>Price</dt>
        <dd>{product.price}</dd>
      </dl>
      {/* <p>
        <Link to={`/product/${product.category}`}>Back to Products</Link>
      </p> */}
    </div>
  );
}
