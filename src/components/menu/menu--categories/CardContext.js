import { createContext, useState } from "react";
const CardContext = createContext();

export function CardProvider({ children }) {
  const [items, setItems] = useState([]);
  const addToCart = (name, price, image) => {
    setItems((prevState) => [...prevState, { name, price, image }]);
  };
  return (
    <CardContext.Provider value={{ items, addToCart }}>
      {children}
    </CardContext.Provider>
  );
}
export default CardContext;
