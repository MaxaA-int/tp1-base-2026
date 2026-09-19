/**
 * @file Fonctionnalités du TP1 - Catalogue en RPI 01
 * @author Maxime Riverin <2435415@csfoy.ca>
 * @version 1.0.0
 */

/* À FAIRE 
- Transition ?
- Véritable filtrage ?
- Validate html
*/

document.getElementById('filtres-gen').addEventListener('click', interagirPreferences);
const arrInputsCacher = document.querySelectorAll('.preferences__cacher input');
arrInputsCacher.forEach(input => {
    input.addEventListener('click', interagirCategorie);
});

function interagirPreferences() {
    const refMenuPreferences = document.getElementById('menuPreferences');
    const refCollection = document.getElementById('collection-chaussures');

    // true si le menu est actuellement caché → on l'affiche
    const doitAfficher = refMenuPreferences.classList.contains('display-none');

    refMenuPreferences.classList.toggle('display-none', !doitAfficher);
    refCollection.classList.toggle('collection-col-partiel', doitAfficher);
    refCollection.classList.toggle('collection-col-entiere', !doitAfficher);
}

function interagirCategorie(e) {
    // 1. Remonter jusqu'à l'ancêtre commun le plus proche
    const refSection = e.target.closest('.preferences__section-item');

    // 2. Redescendre pour cibler précisément le <ul>
    const refListeCategorie = refSection.querySelector('.preferences__liste');

    refListeCategorie.classList.toggle('display-none');
}