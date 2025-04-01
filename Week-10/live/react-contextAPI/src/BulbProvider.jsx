import { createContext, useState } from "react";

export const BulbContext = createContext();

export const BulbProvider = ({ children }) => {
    const [ bulb, setBulb ] = useState(true);
        return (
            <>
                <BulbContext.Provider value={{
                    bulb,
                    setBulb
                }}>
                { children }
                </BulbContext.Provider>
            </>
        )
}