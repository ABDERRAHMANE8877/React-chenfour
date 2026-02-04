import AuthorCard from "./components/AuthorCard";
import AuthorsList from "./components/AuthorsList";
import Header from "./components/Header";
import { AuthorContext, AuthorProvider } from "./context/AuthorContext";

export default function App()
{
    return(
        <AuthorProvider>
            <Header />
            <table style={{width: '80%'}}>
                <tr>
                    <td><AuthorsList /></td>
                    <td><AuthorCard /></td>
                </tr>
            </table>
        </AuthorProvider>
    )
}