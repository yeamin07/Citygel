import React from "react";
import ProductCart from "./ProductCart";
import Loading from "components/Loading/Loading";

const Product = ({ allProduct, loading }) => {
  if (loading) {
    return <Loading />;
  }
  console.log(allProduct);
  return (
    <>
      {allProduct.map((item) => (
        <ProductCart {...{ item }} />
      ))}
    </>
  );
};

export default Product;
