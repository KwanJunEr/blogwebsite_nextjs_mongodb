{/*React Context provides a way to pass data through the component
    tree without having to pass props down manually at every level */}
{/*Context is primarly used when some data needs to be accessible by many components
    at differnt nesting levels*/}

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children})=>{
    const [theme, setTheme] = useState("light");

    return <ThemeContext.Provider>
        {children}
    </ThemeContext.Provider>
}