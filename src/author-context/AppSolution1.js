import AuthorsList from "./components/AuthorsList";
import Header from "./components/Header";
import { AuthorContext } from "./context/AuthorContext";

export default function App()
{
    let initialValue = {
        user: "ESISA"
    }
    return(
        <AuthorContext.Provider value={initialValue}>
            <Header />
            <AuthorsList />
        </AuthorContext.Provider>
    )
}