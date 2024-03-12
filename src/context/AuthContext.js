import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [id, setId] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const login = () => {
    setUserToken('N#r%$57');
    setIsLoading(false);
    }

    const extractUid= (identifier) => {
        setId(identifier);
    }

    const makeUser = (correo) =>{
    setUserEmail(correo);
    console.log(userEmail);
    }

    const logout = () => {
    setUserToken(null);
    setIsLoading(false);
    }
    return(
        <AuthContext.Provider value={{login, logout, isLoading, userToken, id, userEmail, makeUser, extractUid}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;