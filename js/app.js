/**
 * @file Fonctionnalités du TP1 - Catalogue en RPI 01
 * @author Maxime Riverin <2435415@csfoy.ca>
 * @version 1.0.0
 */

/* À FAIRE 
- Cacher Preferences
- Ajuster Collection
- Transition ?
- Véritable filtrage ?
*/

document.getElementById('filtres-gen').addEventListener('click', interagirPreferences);

function interagirPreferences() {
    const refMenuPreferences = document.getElementById('menuPreferences');

    if (refMenuPreferences.classList.contains('display-none')) {
        refMenuPreferences.classList.remove('display-none');
    }
    else {
        refMenuPreferences.classList.add('display-none');
    }
}