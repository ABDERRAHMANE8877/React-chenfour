import { createContext, useState } from "react";

export const AuthorContext = createContext()

export function AuthorProvider({children})
{
    let [selectedAuthor , setSelectedAuthor] = useState(null)

    let initialValue = {
        user: "ESISA",
        selectedAuthor ,
        setSelectedAuthor
    }

    return(
        <AuthorContext.Provider value={initialValue} >
            {children}
        </AuthorContext.Provider>
    )
}