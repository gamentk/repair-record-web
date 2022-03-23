import React, { createContext, useState, useEffect } from 'react';
import { IUser } from '../typings/IUser';

interface IProps {
    children: React.ReactNode
}

export interface IUserContext {
    user: IUser | undefined;
    assignUser: (user: IUser | undefined) => void;
}

export const UserContext = createContext<IUserContext>({ user: undefined, assignUser: () => { } });

const UserProvider = ({ children }: IProps) => {
    const [user, setUser] = useState<IUser>();

    useEffect(() => {
        const userJson = localStorage.getItem('user');

        if (userJson) {
            const user: IUser = JSON.parse(userJson);
            setUser(user);
        }
    }, []);

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    const store: IUserContext = {
        user,
        assignUser: (user) => {
            setUser(user);
        }
    };

    return (
        <UserContext.Provider value={store}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;