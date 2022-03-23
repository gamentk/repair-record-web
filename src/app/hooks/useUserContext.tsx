import { useContext } from 'react';
import { IUserContext, UserContext } from '../contexts/UserContext';

const useUserContext = (): IUserContext => {
    return useContext(UserContext)
}

export default useUserContext;