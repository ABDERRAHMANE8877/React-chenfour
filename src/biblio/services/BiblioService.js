import authors from '../data/authors'

export function getAllAuthors() {
    return new Promise((resolve) => {
        resolve(authors);
    })
}