import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(() => {
        const savedToken = localStorage.getItem('token');
        return savedToken ? JSON.parse(savedToken) : null;
    });
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', JSON.stringify(token));
        } else {
            localStorage.removeItem('token');
        }
    }, [token]);

    const logout = () => {
        setToken(null);
        localStorage.removeItem('token');
    };
    return (
        <AuthContext.Provider value={{ token, setToken, logout, update, setUpdate }}>
            {children}
        </AuthContext.Provider>
    );
};