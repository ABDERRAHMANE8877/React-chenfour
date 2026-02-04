import { BrowserRouter,Routes ,Route} from "react-router-dom"
import AuthorsList from "./components/AuthorsList"
import SearchAuthors from "./components/SearchAuthors"
import Home from "./components/Home"
import BiblioLayout from "./BiblioLayout"
import AddAuthor from "./components/AddAuthor"
import './css/biblio.css'
export default function Biblio()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/biblio' element={<BiblioLayout />}>
                    <Route index element={<Home />} />                
                    <Route path="authors" element={<AuthorsList />} /> 
                    <Route path="search-authors" element={<SearchAuthors />} /> 
                    <Route path="add-authors" element={<AddAuthor />} /> 
                </Route>
            </Routes>
        </BrowserRouter>
    )
}