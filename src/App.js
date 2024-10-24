// J'importe React et le hook useState pour gérer l'état de mon application
import React, { useState } from 'react';

// J'importe mes composants personnalisés que j'ai créés
import CryptoChart from './components/CryptoChart';
import CryptoSelector from './components/CryptoSelector';
import TimeframeSelector from './components/TimeframeSelector';

// Je crée mon composant principal App
function App() {
  // J'utilise useState pour gérer la crypto sélectionnée
  // Au début, c'est 'bitcoin' par défaut
  const [selectedCrypto, setSelectedCrypto] = useState('bitcoin');

  // J'utilise useState pour gérer l'intervalle sélectionné
  // Au début, c'est 'd1' (1 jour) par défaut
  const [selectedInterval, setSelectedInterval] = useState('d1');

  // Je retourne mon composant
  return (
    <div className="container">
      <h1>Ma Super App Crypto</h1>
      
      {/* J'ajoute mon CryptoSelector */}
      <CryptoSelector 
        selectedCrypto={selectedCrypto} 
        onSelectCrypto={setSelectedCrypto} 
      />
      
      {/* J'ajoute mon TimeframeSelector */}
      <TimeframeSelector 
        selectedInterval={selectedInterval} 
        onSelectInterval={setSelectedInterval} 
      />
      
      {/* J'ajoute mon CryptoChart */}
      {/* Maintenant, il s'affiche toujours, pas besoin de condition */}
      <CryptoChart 
        cryptoId={selectedCrypto} 
        interval={selectedInterval}
      />
    </div>
  );
}

// J'exporte mon composant App pour pouvoir l'utiliser ailleurs
export default App;

// Super ! J'ai réussi à faire en sorte que le graphique s'affiche immédiatement
// C'est vraiment cool de voir comment tout s'assemble !
