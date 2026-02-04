const url = 'https://restcountries.com/v3.1/all?fields=name,flags,continents,translations'

export async function getAllCountries() {
    const response = await fetch(url);
    let countries = await response.json()
    return countries;
}

