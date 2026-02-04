const root = ReactDOM.createRoot(document.getElementById('root'))
//JSX : JavaScript XML
function Header() { // Functional Component
    let data = React.version
    return(
        <h1 className="header">
            chargement dynamique du contenu avec React version {data}
        </h1>
    )
} 
root.render(<Header />)
