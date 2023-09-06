import React, { Component } from "react";

export default class Child extends Component {
  render() {
    let { price, stocked, name } = this.props.myProd;
    return (
      <tr>
        <td className={`p-1 ${!stocked && "text-danger"}`}>{name}</td>
        <td className="p-1">{price}</td>
      </tr>
    );
  }
}
