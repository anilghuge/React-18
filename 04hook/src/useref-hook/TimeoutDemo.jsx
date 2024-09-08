import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useRef } from "react";
export function TimeoutDemo() {
  const [product, setProduct] = useState({});
  let productId = useRef(1);
  let timeInterval = useRef(null);
  const [status, setStatus] = useState("Manual");
  useEffect(() => {
    LoadProduct(1);
  }, []);

  function LoadProduct(id) {
    axios.get(`http://fakestoreapi.com/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }

  function NextClick() {
    productId.current = productId.current + 1;
    LoadProduct(productId.current);
  }

  function PreviousClick() {
    productId.current = productId.current - 1;
    LoadProduct(productId.current);
  }

  function LoadProductAuto() {
    productId.current = productId.current + 1;
    LoadProduct(productId.current);
  }

  function PlayClick() {
    timeInterval.current = setInterval(LoadProductAuto, 5000);
    setStatus("Slide Show - Started");
  }

  function PauseClick() {
    clearInterval(timeInterval.current);
    setStatus("Slide Show - Paused");
  }

  return (
    <div className="conatiner-fluid d-flex justify-content-center">
      <div className="card p-2 mt-4 w-50">
        <div className="card-header text-center">
          <div>{product.title}</div>
          <div>
            <b>{status}</b>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-1">
              <button
                className="bi bi-chevron-left btn"
                onClick={PreviousClick}
              ></button>
            </div>
            <div className="col-10">
              <img width="100%" height="300" alt="img" src={product.image} />
            </div>
            <div className="col-1">
              <button
                className="bi bi-chevron-right btn"
                onClick={NextClick}
              ></button>
            </div>
          </div>
        </div>
        <div className="card-footer text-center">
          <button
            onClick={PlayClick}
            className="btn btn-danger me-2 bi bi-play"
          ></button>
          <button
            onClick={PauseClick}
            className="btn btn-warning bi bi-pause"
          ></button>
        </div>
      </div>
    </div>
  );
}
