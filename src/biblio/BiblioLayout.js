import {Link, Outlet, useNavigate} from 'react-router-dom'

export default function BiblioLayout()
{
    let nav = useNavigate();
    return(
        <div className="biblio-layout">
            <nav>
                <Link to=".">Home</Link> 
                <Link to="authors">Authors</Link>
                <Link to='add-authors'>ajouter auteur</Link>
                <button onClick={() => nav('search-authors')}>Recherche d'auteurs</button>
            </nav>

            <div>
                <Outlet />
            </div>

        </div>
    )
}