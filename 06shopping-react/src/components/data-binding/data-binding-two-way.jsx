import { useState } from "react";

export function TwoWayDataBinding() {
  const [product, setProuduct] = useState({
    Name: "TV",
    Price: 0,
    City: "select city",
    Stock: true,
  });

  const [updatedProduct, setUpdatedProduct] = useState({
    Name: "",
    Price: 0,
    City: "",
    Stock: false,
  });

  // function handleClick() {
  //   setUpdatedProduct(product);
  // }
  return (
    <>
      <div className="container-fluid">
        <h2>Product Details</h2>
        <section className="row">
          <nav className="col-3">
            <dl className="">
              <dt>Name</dt>
              <dd>
                <input
                  type="text"
                  className="form-control"
                  value={product.Name}
                  onChange={(e) =>
                    setProuduct({ ...product, Name: e.target.value })
                  }
                />
              </dd>
              <dt>Price</dt>
              <dd>
                <input
                  type="number"
                  className="form-control"
                  value={product.Price}
                  onChange={(e) =>
                    setProuduct({ ...product, Price: e.target.value })
                  }
                />
              </dd>
              <dt>City</dt>
              <dd>
                <select
                  value={product.City}
                  className="form-select"
                  onChange={(e) =>
                    setProuduct({ ...product, City: e.target.value })
                  }
                >
                  <option>select city</option>
                  <option>Delhi</option>
                  <option>Hyd</option>
                </select>
              </dd>
              <dt>Stock</dt>
              <dd className="form-switch">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={product.Stock}
                  onChange={(e) =>
                    setProuduct({ ...product, Stock: e.target.checked })
                  }
                />
                <label className="form-check-label">Available</label>
              </dd>
            </dl>
            <button
              className="btn btn-primary w-100"
              onClick={(e) => {
                setUpdatedProduct(product);
              }}
            >
              Update
            </button>
          </nav>
          <main className="col-9 text-dark">
            <dl>
              <dt>Name</dt>
              <dd>{updatedProduct.Name}</dd>
              <dt>Price</dt>
              <dd>{updatedProduct.Price}</dd>
              <dt>Shipped To</dt>
              <dd>{updatedProduct.City}</dd>
              <dt>Stock</dt>
              <dd>
                {updatedProduct.Stock === true ? "Available" : "Out of Stack"}
              </dd>
            </dl>
          </main>
        </section>
      </div>
    </>
  );
}
