import { createContext, useContext, useState } from "react";


const loginContext = createContext();
export function useLoginContext () {
    return useContext(loginContext)
};


export const LoginProvider = ({children}) => {

    const [user, setUser] = useState(false);

    const login = async(res) => {
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const posts = await data.json();
            setUser(res);
        } catch (error) {
            return error
        }
    };

    return(
        <loginContext.Provider value={ {user, login}}>
            {children}
        </loginContext.Provider>
    )

};