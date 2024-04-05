import { createContext } from 'react';
import { User } from '../App';

export const UserContext = createContext<User | undefined>(undefined);
