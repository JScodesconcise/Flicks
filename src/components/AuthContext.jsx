import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'false');
    useEffect(() => {
        const verifyToken = async () => {
            if (token) {
                try{
                    const response = await axios.get('http://localhost:3000/protected', {header: {Authorization: `Bearer ${token}`}});
                    setIsLoggedIn(true);
                }
                catch{
                    logout();
                }
            }
        };
        verifyToken();
    }, [token]);


    const login = (newToken) => {localStorage.setItem('token', newToken);
        setToken(newToken);
        setIsLoggedIn(true);
    }

    const logout = () => {
        setToken(null);
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, token, setToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);