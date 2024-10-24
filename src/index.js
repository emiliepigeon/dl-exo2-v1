// J'importe React et ReactDOM pour créer mon application
// React, c'est la bibliothèque principale que j'utilise pour construire mon interface
// ReactDOM, c'est ce qui me permet d'afficher mon app dans le navigateur
import React from 'react';
import ReactDOM from 'react-dom/client';

// J'importe mes styles personnalisés que j'ai créés dans styles.css
// Ça me permet d'avoir un joli design pour mon application
import './styles.css';

// J'importe mon composant principal App
// C'est là-dedans que je vais mettre tout le contenu de mon application
import App from './App';

// Je crée la racine de mon application React
// Honnêtement, je ne comprends pas tout à fait comment ça marche
// Mais je sais que c'est important pour que mon app fonctionne
const root = ReactDOM.createRoot(document.getElementById('root'));

// Je rends mon application
// J'utilise StrictMode parce qu'on m'a dit que c'était une bonne pratique
// Apparemment, ça m'aide à repérer des erreurs potentielles
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Je suis contente d'avoir réussi à configurer ce fichier !
// Même si je ne comprends pas tout, ça a l'air de fonctionner
