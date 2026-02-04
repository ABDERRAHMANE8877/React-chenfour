import authors from '../data/authors'

export function getAllAuthors()
{
    return new Promise((resolve , reject) => resolve(authors));
}