import React from "react";
import { styled } from "styled-components";
import Card from "./Card123";
const Product = () => {
  return (
    <div className="product-page">
      <PROWRAP>
        {items.map((item) => (
          <Card name={item.name} price={item.price} key={item.id}></Card>
        ))}
      </PROWRAP>
    </div>
  );
};

export default Product;

const items = [];

const PROWRAP = styled.div`
  padding-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  button {
    border-radius: 5px;
  }
  h1 {
    color: white;
    width: 100%;
  }
`;
