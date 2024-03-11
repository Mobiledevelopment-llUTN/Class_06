import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [id, setId] = useState('');

    const login = (identifier) => {
    setUserToken('N#r%$57');
    setIsLoading(false);
    setId(identifier);
    }

    const logout = () => {
    setUserToken(null);
    setIsLoading(false);
    }
    return(
        <AuthContext.Provider value={{login, logout, isLoading, userToken, id}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;