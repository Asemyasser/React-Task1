import React, { Component } from "react";
import Child from "./Child";
import ChildTwo from "./ChildTwo";

export default class Home extends Component {
  state = {
    products: [
      { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
      { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
      { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
      { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
      { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
      { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
    ],
    checked: false,
  };

  search = (searchInput) => {
    let products = [];

    for (let i = 0; i < this.state.products.length; i++) {
      if (this.state.products[i].name.includes(searchInput) === true) {
        products.push(this.state.products[i]);
      }
    }
    if (searchInput === "") {
      products = this.state.products;
    }
    console.log(products);
    this.setState({ products });
  };

  isChecked = () => {
    this.state.checked
      ? this.setState({ checked: false })
      : this.setState({ checked: true });
  };

  render() {
    return (
      <>
        <form>
          <input
            onInput={this.search.bind(this)}
            type="search"
            placeholder="Search..."
          />
          <div className="d-block mt-1 mb-1">
            <input
              onClick={this.isChecked}
              className="me-1"
              type="checkbox"
              id="check"
            />
            <label htmlFor="check"> Only show products in stock</label>
          </div>

          <table>
            <thead>
              <tr>
                <th className="p-2">Name</th>
                <th className="p-2">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className=" text-center" colSpan={2}>
                  Fruits
                </th>
              </tr>
              {this.state.products.map((prod) => {
                if (prod.category === "Fruits") {
                  return this.state.checked ? (
                    <ChildTwo myProd={prod} />
                  ) : (
                    <Child myProd={prod} />
                  );
                }
              })}
              <tr>
                <th className=" text-center" colSpan={2}>
                  Vegetables
                </th>
              </tr>
              {this.state.products.map((prod) => {
                if (prod.category === "Vegetables") {
                  return this.state.checked ? (
                    <ChildTwo myProd={prod} />
                  ) : (
                    <Child myProd={prod} />
                  );
                }
              })}
            </tbody>
          </table>
        </form>
      </>
    );
  }
}
