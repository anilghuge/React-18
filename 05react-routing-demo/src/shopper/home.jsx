import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://fakestoreapi.com/products/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <div>
      <h3>Categories Home</h3>
      <Link to={"login"}>Login</Link>
      <ol>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`product/${category}`}>{category.toUpperCase()}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
