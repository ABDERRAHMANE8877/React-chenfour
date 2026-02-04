export default function Header(props) {
    return (
        <>
            <h1 className="header">
                <img src="/icons/favicon.ico" alt="React icon"/>
                {props.title}
            </h1>
            <h2>React version : {props.version}</h2>
        </>
        
    )

}