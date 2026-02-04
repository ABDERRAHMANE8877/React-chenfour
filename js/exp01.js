const root = ReactDOM.createRoot(document.getElementById('root'))
let data = React.version
//JSX : JavaScript XML
root.render( 
    <h1 className="header">
        chargement dynamique du contenu avec React version {data}
    </h1>
)

