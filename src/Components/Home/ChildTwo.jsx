import React, { Component } from "react";

export default class Child2 extends Component {
  render() {
    let { price, stocked, name } = this.props.myProd;

    return (
      <tr className={`${!stocked && "d-none"}`}>
        <td className="p-1">{name}</td>
        <td className="p-1">{price}</td>
      </tr>
    );
  }
}

// {/*  */}
