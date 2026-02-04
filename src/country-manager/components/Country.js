export default function Country({ flags, name, translations, continents })
{
    if (name.common.toLowerCase() === "israel") {
        return null;
    }

    const style = {
        textAlign : 'right'
    }

    return(
        <div className="country">
            <img src={flags.png} alt={flags.alt} />        
            <div><p>{name.common}</p></div>
            <div style={style}><p>{translations.ara.common}</p></div>
            <div><p>{continents[0]}</p></div>
        </div>
    )
}