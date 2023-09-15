import {mesDatas} from "./datas";

const wrapper = document.querySelector('#albumsAvecVues')
const loader = document.createElement('p')
let albumsAvecVues = []

loader.innerText = 'Chargement en cours...'
wrapper.append(loader)


/**
 * Sélectionne les albums avec les meilleures vues
 */
function top3() {
    // À compléter

}

/**
 * Affiche les albums avec plus de 9000 vues
 */
function bestOf() {
    // À compléter

}

/**
 * Affiche tous les albums
 */
function tous() {
    // À compléter

}

/**
 * Retourne un tableau d'albums avec une nouvelle propriété vue et une valeur aléatoire
 * @param desAlbums
 * @return {[*]}
 */
function ajouterVues(desAlbums) {
    // À compléter

}


try {
    const albums = [...mesDatas]
    console.log(albums)
    // À compléter


} catch (err) {
    loader.innerText = "Impossible de contacter la ressource distante"
    loader.style.color = 'red'
}

