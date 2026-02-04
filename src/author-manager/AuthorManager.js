import './css/AuthorManager.css';
import AuthorsList from './components/AuthorsList';
import SearchAuthors from './components/SearchAuthors';

export default function AuthorsManager({authors}) { 
    return(
        <div className="authors-manager">
            {/* <AuthorsList /> */}
            <SearchAuthors />
        </div>
    )
}