import { useState , useEffect, useContext} from "react"
import { getAllAuthors } from "../services/authorService";
import { AuthorContext } from "../context/AuthorContext";

export default function AuthorsList() { 
    
    let [authors , setAuthors] = useState([])

    const {usr, setSelectedAuthor} = useContext(AuthorContext)

    let list = authors.map(author => 
        <li key={author.id} style={{cursor : 'pointer'}}
            onClick={() => setSelectedAuthor(author)}
        >
            {author.name} - {author.technologie}    
        </li>
    )

    useEffect(() => {
        getAllAuthors().then(authors => setAuthors(authors));
    }, []);

    return(
        <div>
            <ol>
                {list}
            </ol>
            <div style={{borderTop : '1px solid black',color : 'red', textAlign : 'right',fontSize : 12}}>
                Application realise par {usr}    
            </div>            
        </div>
    )
}