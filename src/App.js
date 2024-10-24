// J'importe React et le hook useState
// React, c'est toujours nécessaire quand je crée des composants
// useState, c'est ce qui me permet de gérer l'état de mon application
import React, { useState } from 'react';

// J'importe mes composants personnalisés que j'ai créés
// Chaque composant a son propre rôle dans mon application
import CryptoChart from './components/CryptoChart';
import CryptoSelector from './components/CryptoSelector';
import TimeframeSelector from './components/TimeframeSelector';

// Je crée mon composant principal App
// C'est comme le chef d'orchestre de mon application
function App() {
  // J'utilise useState pour gérer la crypto sélectionnée
  // Au début, c'est 'bitcoin' par défaut
  // setSelectedCrypto est une fonction que je peux utiliser pour changer la valeur
  const [selectedCrypto, setSelectedCrypto] = useState('bitcoin');

  // Pareil pour l'intervalle de temps
  // Je commence avec 'd1' qui signifie "1 jour"
  const [selectedInterval, setSelectedInterval] = useState('d1');

  // Je retourne mon composant
  // C'est ce qui va être affiché à l'écran
  return (
    <div className="container">
      <h1>Ma Super App Crypto</h1>
      
      {/* J'ajoute mon CryptoSelector */}
      {/* Je lui passe la crypto sélectionnée et la fonction pour la changer */}
      <CryptoSelector 
        selectedCrypto={selectedCrypto} 
        onSelectCrypto={setSelectedCrypto} 
      />
      
      {/* Pareil pour le TimeframeSelector */}
      <TimeframeSelector 
        selectedInterval={selectedInterval} 
        onSelectInterval={setSelectedInterval} 
      />
      
      {/* Enfin, j'ajoute mon CryptoChart */}
      {/* Je lui passe la crypto et l'intervalle sélectionnés */}
      <CryptoChart 
        cryptoId={selectedCrypto} 
        interval={selectedInterval} 
      />
    </div>
  );
}

// J'exporte mon composant App pour pouvoir l'utiliser dans index.js
export default App;

// Je suis fière d'avoir réussi à organiser tout ça !
// C'est cool de voir comment tous mes composants travaillent ensemble
// Je suis prête à continuer à ajouter des fonctionnalités !