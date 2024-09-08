import { useState } from "react";

export function ClassBindingSorting() {
  const [sortClass, setSortClass] = useState(
    "bi bi-sort-alpha-down btn btn-danger"
  );
  function handleSortClick(e) {
    // var className = "bi bi-sort-alpha-down btn btn-danger";
    // className =
    //   className === "bi bi-sort-alpha-down btn btn-danger"
    //     ? "bi bi-sort-alpha-up btn btn-danger"
    //     : "bi bi-sort-alpha-down btn btn-danger";

    // setSortClass(className);
    setSortClass(
      sortClass === "bi bi-sort-alpha-down btn btn-danger"
        ? "bi bi-sort-alpha-up btn btn-danger"
        : "bi bi-sort-alpha-down btn btn-danger"
    );
  }
  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <h2>Sorting</h2>
        <button onClick={handleSortClick} className={sortClass}></button>
      </div>
    </>
  );
}
