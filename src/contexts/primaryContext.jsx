import { createContext, useContext, useState } from "react";

export const primaryContext = createContext();

export const PrimaryProvider = (props) => {
    //main global state here
    const [userName, setUserName] = useState("")

    return (<primaryContext.Provider value={
        {
            userName,
            setUserName
            //more broad context here
        }
    }>
        {props.children}
    </primaryContext.Provider>)

}