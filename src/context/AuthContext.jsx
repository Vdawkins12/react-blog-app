import React, {createContext, useState, useContext} from "react";

//creating the context box
const AuthContext = createContext();
//Store the data
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    //login function
    const login = (username) => {
        setUser({ name: username });

    };
    //logout function
    const logout = () => {
        setUser(null);
    };
    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => {
    return useContext(AuthContext);
};
