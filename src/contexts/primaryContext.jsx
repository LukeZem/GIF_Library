import { createContext, useContext, useState } from "react";

export const primaryContext = createContext();

export const PrimaryProvider = (props) => {
    //main global state here
    const storedUserName = localStorage.getItem('userName');
    const [userName, setUserName] = useState(storedUserName || ""); //applies whichever is true
    const [isLoggedIn, setIsLoggedIn] = useState(!!storedUserName); //casting to bool then checking
    const [input, setInput] = useState("");
    const [offset, setOffset] = useState(0);

    return (<primaryContext.Provider value={
        {
            userName,
            setUserName,
            input,
            setInput,
            offset,
            setOffset,
            isLoggedIn,
            setIsLoggedIn
            //more broad context here
        }
    }>
        {props.children}
    </primaryContext.Provider>)

}






// () => {
//     const storedName = localStorage.getItem('userName');
//     return  storedName ? JSON.parse(storedName) : null;
// }