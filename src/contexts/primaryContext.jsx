import { createContext, useContext, useState } from "react";

export const primaryContext = createContext();

export const PrimaryProvider = (props) => {
    //main global state here
    const [userName, setUserName] = useState("")
    const [input, setInput] = useState("")
    const [err, setErr] = useState(false);
    const [offset, setOffset] = useState(0);

    return (<primaryContext.Provider value={
        {
            userName,
            setUserName,
            input,
            setInput,
            err,
            setErr,
            offset,
            setOffset
            //more broad context here
        }
    }>
        {props.children}
    </primaryContext.Provider>)

}