import axios from "axios";
import { useEffect, useState } from "react";
import { FakeStoreProduct } from "../contracts/FakeStoreProduct";

export function Shopping(): JSX.Element {
  const [categories, setCategories] = useState<string[]>([]);
  const [products, setProducts] = useState<FakeStoreProduct[]>([]);

  function LoadCategories(): void {
    axios.get("http://fakestoreapi.com/products/categories").then((res) => {
      setCategories(res.data);
    });
  }

  function LoadProducts(): void {
    axios.get("http://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }

  useEffect(() => {
    LoadCategories();
    LoadProducts();
  }, []);

  return (
    <div className="container-fluid">
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
      <div>
        {products.map((product) => (
          <img
            className="m-2"
            src={product.image}
            width="100"
            height="100"
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
}
