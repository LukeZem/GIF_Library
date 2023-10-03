import { createContext, useContext, useState } from "react";

export const primaryContext = createContext();

export const PrimaryProvider = (props) => {
    //main global state here
    const [userName, setUserName] = useState("")
    const [input, setInput] = useState("")
    const [err, setErr] = useState(false);

    return (<primaryContext.Provider value={
        {
            userName,
            setUserName,
            input,
            setInput,
            err,
            setErr
            //more broad context here
        }
    }>
        {props.children}
    </primaryContext.Provider>)

}