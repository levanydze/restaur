import React from "react";
import styled from "styled-components";
import img from "../../images/khinkali.jpeg";
import { useContext } from "react";
import CardContext from "./menu--categories/CardContext";

const Card = ({ cardKey, name, category, price, description, image }) => {
  const { addToCart } = useContext(CardContext);

  return (
    <CARD>
      <IMGBOX>
        <img src={image ? image : img} alt="123" />
      </IMGBOX>
      <TEXTBOX>
        {/* <h2>{name ? name : "Georgian Dumpling"}</h2> */}
        <p>{description ? "THIS IS FETCHED DATA by spoonacular" : ""}</p>
        <span>{!description ? "THIS IS LOCAL DATA" : ""} </span>

        <PRICEDIV>
          <PRICE>
            <p>{price ? price : 10} $</p>
          </PRICE>
          <ADD onClick={() => addToCart(name, price, image, cardKey)}>
            <p>Add</p>
          </ADD>
        </PRICEDIV>
      </TEXTBOX>
    </CARD>
  );
};

export default Card;

const CARD = styled.div`
  margin: 2rem;
  width: 250px;
  height: 300px;
  border-radius: 1rem;
  border: 1px solid var(--dark);
  display: flex;
  flex-direction: column;
  background-color: var(--darker);
`;
const IMGBOX = styled.div`
  height: 60%;
  width: 100%;
  background-color: #0e0647;
  overflow: hidden;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
const TEXTBOX = styled.div`
  height: 40%;
  width: 100%;
  position: relative;
  span {
    color: green;
    font-size: 20px;
  }
  p {
    font-size: 20px;
    margin: 10px;
    margin-bottom: 5px;
    color: red;
  }
  h2 {
    color: var(--light);
    font-size: 18px;
    margin: 5px 0px 0px 5px;
  }
`;

const PRICEDIV = styled.div`
  transform: translate(-50%, -50%);
  border-radius: 10px;
  width: 70%;
  height: 44px;
  position: absolute;
  z-index: 1;
  bottom: -22px;
  left: 50%;
  transform: translate(-50%);
  font-size: calc(12px + 0.3vw);
  overflow: hidden;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.593);
`;

const PRICE = styled.div`
  width: 50%;

  background-color: #09361c;
  display: flex;
  align-items: center;
  p {
    margin: 0 auto;
    font-size: 18px;
    color: var(--light);
  }
`;

const ADD = styled.div`
  cursor: pointer;
  width: 50%;
  background-color: #0c6d26;
  display: flex;
  align-items: center;
  p {
    margin: 0 auto;
    color: var(--light);
    font-size: 25px;
  }
`;
