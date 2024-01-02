import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import FooodMenu from "./menu--categories/FooodMenu";
import Vegetarian from "./menu--categories/Vegetarian";
import Drink from "./menu--categories/Drink";

const MenuList = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const listHandlerBtn = (categoryIndex) => {
    setActiveCategory((prevActive) =>
      prevActive === categoryIndex ? null : categoryIndex
    );
  };

  return (
    <MENULIST>
      <h3>M E N U</h3>
      <EACHCATEGORY>
        <CATNAME>
          Main Food
          <button onClick={() => listHandlerBtn(0)}>
            {activeCategory === 0 ? "-" : "+"}
          </button>
        </CATNAME>
        <CARDLIST className={activeCategory === 0 ? "active" : ""}>
          <FooodMenu></FooodMenu>
        </CARDLIST>
      </EACHCATEGORY>
      <EACHCATEGORY>
        <CATNAME>
          Vegetarian
          <button onClick={() => listHandlerBtn(1)}>
            {activeCategory === 1 ? "-" : "+"}
          </button>
        </CATNAME>
        <CARDLIST className={activeCategory === 1 ? "active" : ""}>
          <Vegetarian></Vegetarian>
        </CARDLIST>
      </EACHCATEGORY>
      <EACHCATEGORY>
        <CATNAME>
          Drink
          <button onClick={() => listHandlerBtn(2)}>
            {activeCategory === 2 ? "-" : "+"}
          </button>
        </CATNAME>
        <CARDLIST className={activeCategory === 2 ? "active" : ""}>
          <Drink></Drink>
        </CARDLIST>
      </EACHCATEGORY>
    </MENULIST>
  );
};

export default MenuList;

const MENULIST = styled.div`
  background-color: var(--dark);
  color: var(--light);
  h3 {
    font-family: "BenchNine", sans-serif;
    font-size: 40px;
    border-top: 2px solid var(--medium);
    border-bottom: 2px solid var(--medium);
  }
`;

const EACHCATEGORY = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CATNAME = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 2px solid var(--medium);
  justify-content: space-around;
  padding: 0.5rem 0rem;
  position: relative;
  button {
    position: absolute;
    right: 20px;
    width: 2rem;
    background: none;
    border: none;
    color: var(--light);
    font-size: 20px;
    cursor: pointer;
    transition: transform 0.3s ease;
    transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
  }
`;

const CARDLIST = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: none;
  opacity: 0;

  &.active {
    overflow: visible;
    display: flex;
    opacity: 1;
  }
`;
