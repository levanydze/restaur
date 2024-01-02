import React, { useState, useEffect } from "react";
import Card from "../Card";
import { styled } from "styled-components";
import img from "../../../images/khinkali.jpeg";

function FooodMenu() {
  const [foodMenu, setFoodMenu] = useState([]);

  useEffect(() => {
    getFoodMenu();
  }, []);

  const getFoodMenu = async () => {
    try {
      const apiKey = process.env.REACT_APP_API_KEY1; // Use the correct environment variable name for your API key
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=2` // Fetch 6 random recipes
      );
      const data = await response.json();
      setFoodMenu(data.recipes);
    } catch (error) {
      console.error("Error fetching food menu:", error);
    }
  };

  return (
    <FMDIV>
      <Card image={img} price={"10"} name={"xinkali"}></Card>
      <Card image={img} price={"10"} name={"xinkali"}></Card>
      {foodMenu.map((food) => (
        <Card
          key={food.id}
          name={food.title}
          description={food.instructions}
          image={food.image}
          price={food.pricePerServing}
        />
      ))}
      <Card image={img} price={"10"} name={"xinkali"}></Card>
      <Card image={img} price={"15"} name={"moxinklo"}></Card>
      <Card image={img} price={"16"} name={"waxingklo"}></Card>
      <Card image={img} price={"10"} name={"xinkali"}></Card>
      <Card image={img} price={"17"} name={"wamoxinklo"}></Card>
      <Card image={img} price={"18"} name={"gadaxinklo"}></Card>
      <Card image={img} price={"19"} name={"gadmoxinklo"}></Card>
      <Card image={img} price={"10"} name={"mixinklo"}></Card>
      <Card image={img} price={"19"} name={"daravi kide sxvani"}></Card>
    </FMDIV>
  );
}

export default FooodMenu;

const FMDIV = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 2px solid var(--medium);
  justify-content: space-around;
  background-color: var(--medium);
  min-height: 100px;
`;
