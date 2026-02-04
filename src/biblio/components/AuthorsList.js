import { useState , useEffect} from "react"
import { getAllAuthors } from "../services/BiblioService";
import AuthorCard from "./AuthorCard";

export default function AuthorsList() { 
    
    let [authors , setAuthors] = useState([])
    let list = authors.map(author => <AuthorCard key={author.id} {...author} />)//...author : spread operator permet de passer toutes les propriétés de l'objet author . 

    useEffect(() => {
        getAllAuthors().then(authors => setAuthors(authors));
    }, []);

    return(
        <div className="authors-list">
            {list}
        </div>
    )
}