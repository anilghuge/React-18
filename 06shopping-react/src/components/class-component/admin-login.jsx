import React from "react";
export class AdminLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    fetch("http://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((categories) => {
        this.setState({
          categories: categories,
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <h2>Select Category</h2>
          <select>
            {this.state.categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>
      </React.Fragment>
    );
  }
}
