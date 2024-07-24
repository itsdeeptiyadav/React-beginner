import React from "react";
import Product from "./Product";

export default function Productlist(props) {
  return props.productList.map((product, i) => {
    return (
      <Product
        product={product}
        key={i}
        incrementQuantity={props.incrementQuantity}
        decrementQuantity={props.decrementQuantity}
        index={i}
      />
    );
  });
}
