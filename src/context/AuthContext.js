import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [id, setId] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [cursos, setCursos] = useState([]);

    const login = () => {
    setUserToken('N#r%$57');
    setIsLoading(false);
    }

    const extractUid= (identifier) => {
        setId(identifier);
    }

    const extractCourses = (arrayOfCourses) =>{
        setCursos(arrayOfCourses);
        console.log(cursos.Nombre, "Authcontext");
    }

    const makeUser = (correo) =>{
    setUserEmail(correo);
    }

    const logout = () => {
    setUserToken(null);
    setIsLoading(false);
    }
    return(
        <AuthContext.Provider value={{login, logout, isLoading, userToken, id, userEmail, makeUser, extractUid, extractCourses, cursos}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;