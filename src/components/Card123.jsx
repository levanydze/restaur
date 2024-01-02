import React from "react";
import styled from "styled-components";

const Card = ({ name, price }) => {
  return (
    <div>
      <CARDWRAP>
        <IMGBOX>T</IMGBOX>
        <INFOBOX>
          <h2>{name}</h2>
        </INFOBOX>
        <PRICEBOX>
          <h2>{price} $</h2>
          <button>+</button>
        </PRICEBOX>
      </CARDWRAP>
    </div>
  );
};

export default Card;

const CARDWRAP = styled.div`
  width: 200px;
  height: 300px;
  border: 1px solid var(--medium);
  border-radius: 1rem;
  margin: 2rem;
  background-color: var(--light);
`;

const IMGBOX = styled.div`
  height: 60%;
  margin: 10px;
  border-radius: 1rem;
  font-size: 150px;
`;

const INFOBOX = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
`;

const PRICEBOX = styled.div`
  height: 20%;
  display: flex;
  justify-content: space-evenly;
  button {
    background: none;
    width: 3rem;
    height: 2.2rem;
    background-color: #1ed21e;
    font-size: 30px;
    align-items: center;
  }
`;
