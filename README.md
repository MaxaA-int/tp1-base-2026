# TP1 - (2026)

COMPLÉTER ET ADAPTER CE README

Ceci est ma solution pour le TP1. Ce défi m'a permis de concevoir un ou plusieurs composants d'interface moderne, performant et pleinement accessible, sans dépendre de frameworks ou de préprocesseurs.

## Sommaire

- [TP1 - (2026)](#tp1---2026)
  - [Sommaire](#sommaire)
  - [Présentation](#présentation)
    - [Le défi : des composants accessibles](#le-défi--des-composants-accessibles)
    - [Liens](#liens)
  - [Mon Processus](#mon-processus)
    - [Technologies utilisées](#technologies-utilisées)
    - [Ce que j'ai appris](#ce-que-jai-appris)
    - [Développement continu](#développement-continu)
  - [Auteur](#auteur)

## Présentation

### Le défi : des composants accessibles

Les utilisateurs doivent être capables de :

- Consulter le site sur n'importe quel écran (ordinateur, tablette, smartphone) avec une mise en page fluide.
- Voir les états de survol (hover) et de focus clavier pour tous les éléments interactifs de la page.
- Ouvrir et fermer le menu mobile à l'aide d'un bouton qui bascule textuellement ("Menu" / "Fermer") et graphiquement (Hamburger / Croix).
- Naviguer de manière accessible : le menu mobile doit respecter les normes WCAG (fermeture avec la touche `Échap`, gestion des attributs `aria-expanded` et `aria-hidden`).

### Liens

- URL de la solution : [Lien vers mon dépôt GitHub](https://github.com/MaxaA-int/tp1-base-2026)
- URL du site en direct : [Lien vers GitHub Pages](https://maxaa-int.github.io/tp1-base-2026/)

## Mon Processus

### Technologies utilisées

- **HTML5** – Balisage sémantique (`<nav>`, `<header>`, `<main>`).
- **CSS3 Moderne (Architecture 2026)** – Utilisation des couches de cascade natives (`@layer`) pour isoler les styles, et du _Nesting_ (imbrication) natif pour la lisibilité.
- **Méthodologie BEM** – Nomenclature stricte des classes pour éviter les conflits de spécificité.
- **JavaScript Vanille** – Script épuré (syntaxe `let` et fonctions classiques pour débutant) axé sur l'accessibilité ARIA.

### Ce que j'ai appris

Ce travail pratique m'a permis de faire une révision globale du html, css et javascript. Entre autre, j'ai beaucoup appris sur la sémantique HTML. En effet, vu que ce projet comporte énormément de HTML, j'ai pu connaître certaines contraintes.

De plus, avec l'utilisation de l'IA afin de corriger les erreurs de sémantique, cela m'a permis de comprendre des erreurs "idiotes" d'HTML classique. Par exemple, la balise `button` n'a pas besoin de `h4` ou de `label`. L'utilisation de `type="checkbox"` si c'est un `input` qui se ferme et s'ouvre. Pas oublier non plus les attributs `alt` sur les images afin de facilité la lecture des lecteurs d'écran.

Ce sont des erreurs que j'ai déjà fait dans le passé, alors je prend la correction comme un rappel.

### Développement continu

Pour mes prochains projets, je souhaite approfondir : L'utilisation de PHP dans les projets (par pitié)

## Auteur

Maxime Riverin
