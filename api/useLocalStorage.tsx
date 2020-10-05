import React from "react";

// Usage: const [cart, setCartValue] = useLocalStorageState();
const useLocalStorage = () => {
  const [cart, setCartValue] = React.useState(
    localStorage.getItem("NOBLE_CUTS_SHOPPING_CART") || ""
  );

  React.useEffect(() => {
    localStorage.setItem("NOBLE_CUTS_SHOPPING_CART", cart);
  }, [cart]);

  return [cart, setCartValue];
};

export default useLocalStorage;