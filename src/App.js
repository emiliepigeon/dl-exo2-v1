// J'importe les modules nécessaires pour créer mon application
import React from 'react'; // Importation de React pour utiliser ses fonctionnalités
import CryptoChart from './components/CryptoChart'; // Importation de mon composant CryptoChart pour afficher le graphique
import CryptoSelector from './components/CryptoSelector'; // Importation de mon composant CryptoSelector pour choisir la crypto-monnaie
import TimeframeSelector from './components/TimeframeSelector'; // Importation de mon composant TimeframeSelector pour choisir l'intervalle de temps

// Je crée mon composant principal App
function App() {
  // J'utilise useState pour gérer la crypto sélectionnée
  // Au départ, je choisis 'bitcoin' comme crypto-monnaie par défaut
  const [selectedCrypto, setSelectedCrypto] = React.useState('bitcoin');

  // J'utilise useState pour gérer l'intervalle sélectionné
  // Au départ, je choisis 'd1' (1 jour) comme intervalle par défaut
  const [selectedInterval, setSelectedInterval] = React.useState('d1');

  // Je retourne le contenu de mon composant
  return (
    <div className="container"> {/* Conteneur principal de l'application */}
      <h1>My first crypto app</h1> {/* Titre de l'application */}

      {/* J'ajoute mon CryptoSelector */}
      <CryptoSelector 
        selectedCrypto={selectedCrypto} // Passe la crypto sélectionnée au sélecteur
        onSelectCrypto={setSelectedCrypto} // Fonction pour mettre à jour la crypto sélectionnée
      />

      {/* J'ajoute mon TimeframeSelector */}
      <TimeframeSelector 
        selectedInterval={selectedInterval} // Passe l'intervalle sélectionné au sélecteur
        onSelectInterval={setSelectedInterval} // Fonction pour mettre à jour l'intervalle sélectionné
      />

      {/* J'ajoute mon CryptoChart */}
      <CryptoChart 
        cryptoId={selectedCrypto} // Envoie l'ID de la crypto-monnaie sélectionnée au graphique
        interval={selectedInterval} // Envoie l'intervalle sélectionné au graphique
      />

      {/* Informations supplémentaires sous le graphique */}
      <div className="additional-info"> {/* Conteneur pour les informations supplémentaires */}
        <span className="info-field">Crypto populaire: Bitcoin</span> {/* Affiche la crypto-monnaie populaire */}
        <span className="info-field">Crypto intéressante: Ethereum</span> {/* Affiche la crypto-monnaie intéressante */}
        <span className="info-field">Marché avec prix élevé: Binance - $ 60,000</span> {/* Affiche le marché avec le prix le plus élevé */}
      </div>
    </div>
  );
}

// J'exporte mon composant App pour pouvoir l'utiliser ailleurs dans l'application
export default App;

// Super ! J'ai réussi à faire en sorte que le graphique s'affiche immédiatement.
// C'est vraiment cool de voir comment tout s'assemble !
