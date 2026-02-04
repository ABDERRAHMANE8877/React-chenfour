import { useContext } from "react"
import { AuthorContext } from "../context/AuthorContext"

export default function Header()
{
    const {user, selectedAuthor} = useContext(AuthorContext)   
    return(
        <div>
            <h1>Gestion des auteurs, par {user} {selectedAuthor && ' - ' + selectedAuthor.name}</h1>{/* pour gerer le probleme de null (en premier selectedAuthor est null)*/}
        </div>
    )
}