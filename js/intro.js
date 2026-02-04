const root = document.getElementById('root');
const data = 'Donnée à afficher'
// Soljtion N° 1 :
/* root.innerHTML = `
    <h1 class="header">
        chargement dynamique du contenu Nativement : 
        ${data}
    </h1>
` */
// Soljtion N° 2 :

let header = document.createElement('h1')
header.textContent = `chargement dynamique du contenu Nativement Solution 2: 
        ${data}`
header.className = 'header'
root.appendChild(header)