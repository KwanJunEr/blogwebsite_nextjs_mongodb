"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light"; // Default to "light" if no value is found
  }
  return "light"; // Fallback for SSR
};

// ThemeContextProvider component
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Default value for SSR

  useEffect(() => {
    // Update theme after hydration
    const savedTheme = getFromLocalStorage();
    setTheme(savedTheme);
  }, []);

  const toggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    // Save theme changes to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};



{/*React Context provides a way to pass data through the component
    tree without having to pass props down manually at every level */}
{/*Context is primarly used when some data needs to be accessible by many components
    at differnt nesting levels*/}