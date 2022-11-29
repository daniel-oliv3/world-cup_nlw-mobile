import { createContext, ReactNode } from "react";


interface UserProps {
    name: string;
    avatarUrl: string;
}

export interface AuthContextDataProps {
    user: UserProps;
    signIn: () => Promise<void>;
}

interface AuthProviderProps {
    children: ReactNode;
}


export const AuthContext = createContext({} as AuthContextDataProps);


export function AuthContextProvider({ children }: AuthProviderProps){

    async function signIn(){
        console.log("sapup3 na area");
    }

    return (
        <AuthContext.Provider value={{
            signIn,
            user: {
                name: 'Daniel Oliveira',
                avatarUrl: 'https://github.com/daniel-oliv3.png'
            }
        }}>
            {children}
        </AuthContext.Provider>
    );
}














 