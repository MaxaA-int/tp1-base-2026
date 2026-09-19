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

function interagirPreferences() {
    const refMenuPreferences = document.getElementById('menuPreferences');

    /* Afficher Preferences */
    if (refMenuPreferences.classList.contains('display-none')) {
        refMenuPreferences.classList.remove('display-none');
        document.getElementById('collection-chaussures').classList.remove('collection-col-entiere');
        document.getElementById('collection-chaussures').classList.add('collection-col-partiel');
    }
    /* Cacher Preferences */
    else {
        refMenuPreferences.classList.add('display-none');
        document.getElementById('collection-chaussures').classList.add('collection-col-entiere');
        document.getElementById('collection-chaussures').classList.remove('collection-col-partiel');
    }
}