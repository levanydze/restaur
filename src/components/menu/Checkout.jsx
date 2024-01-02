import React from "react";
import { styled } from "styled-components";
import { useContext } from "react";
import CardContext from "./menu--categories/CardContext";

const Checkout = () => {
  const { items } = useContext(CardContext);
  const totalToPay = items.reduce(
    (total, item) => total + Number(item.price),
    0
  );
  return (
    <DIVWRAPPER>
      <DIVCART>
        {items.map((item) => (
          <DIVRETURN>
            <DIVIMG>
              <img src={item.image} alt="" />
            </DIVIMG>
            <DIVTEXT>
              <h2>{item.name}</h2>
              <h3>{item.price} $</h3>
            </DIVTEXT>
          </DIVRETURN>
        ))}
      </DIVCART>
      <DIVCHECKOUT>
        <h4> Total: {items.length} Items in cart</h4>
        <h3>
          <h3> Total Amount: {totalToPay} $</h3>
        </h3>
      </DIVCHECKOUT>
    </DIVWRAPPER>
  );
};

export default Checkout;

const DIVWRAPPER = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  background-color: var(--dark);
`;
const DIVCART = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  padding: 10px;
`;
const DIVRETURN = styled.div`
  border: 1px solid var(--dark);
  background-color: var(--medium);
  border-radius: 1rem;
  display: flex;
  padding: 10px;
  margin: 10px;
  width: 90%;
`;

const DIVIMG = styled.div`
  display: flex;
  margin-left: 2rem;
  width: 30%;
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }
`;
const DIVTEXT = styled.div`
  border: 1px solid var(--dark);
  margin-left: 4rem;
  color: var(--light);
  width: 70%;
  border-radius: 2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
`;
const DIVCHECKOUT = styled.div`
  position: fixed;
  right: 0;
  margin-top: 1rem;
  background-color: var(--light);
  width: 30%;
  margin-right: 1rem;
  border-radius: 1rem;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h4 {
    margin-top: 1rem;
  }
  h3 {
    border-top: 1px solid var(--dark);
    line-height: 5rem;
  }
`;
