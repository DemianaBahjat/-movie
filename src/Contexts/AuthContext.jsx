import { createContext, useState } from "react";


export const authContext = createContext()
export default function AuthContextProvider({children}){

    const [isLoggedin, setIsLoggedIn]= useState(true)
   
    return<>
            <authContext.Provider value={{isLoggedin, setIsLoggedIn}}>
                 {children}
           </authContext.Provider>
    </>
    
}