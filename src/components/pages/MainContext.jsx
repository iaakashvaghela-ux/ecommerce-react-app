import React, { createContext, useEffect, useState } from 'react'


export let MyGlobalContext = createContext()


export default function MainContext({ children }) {
  const [cart, setCart] = useState([])

  let obj = { cart, setCart }

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <MyGlobalContext.Provider value={obj}>
      {children}
    </MyGlobalContext.Provider>
  )
}
