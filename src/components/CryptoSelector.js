// J'importe React, c'est toujours nécessaire quand je crée un composant
import React from 'react';

// Je crée mon composant CryptoSelector
// Il prend deux props : selectedCrypto et onSelectCrypto
const CryptoSelector = ({ selectedCrypto, onSelectCrypto }) => {
    // Je définis une liste de cryptos disponibles
    // Pour l'instant, je les mets en dur, mais plus tard je pourrais les récupérer d'une API
    const cryptos = ['bitcoin', 'ethereum', 'ripple', 'litecoin', 'cardano'];

    // Je retourne mon composant
    return (
        <div className="crypto-selector">
            {/* Je mets un label pour expliquer à quoi sert le select */}
            <label htmlFor="crypto-select">Choisissez une crypto :</label>
            {/* Je crée un select pour choisir la crypto */}
            <select
                id="crypto-select"
                value={selectedCrypto}
                onChange={(e) => onSelectCrypto(e.target.value)}
            >
                {/* Je crée une option pour chaque crypto dans ma liste */}
                {cryptos.map((crypto) => (
                    <option key={crypto} value={crypto}>
                        {/* Je mets la première lettre en majuscule pour que ce soit plus joli */}
                        {crypto.charAt(0).toUpperCase() + crypto.slice(1)}
                    </option>
                ))}
            </select>
        </div>
    );
};

// J'exporte mon composant pour pouvoir l'utiliser dans App.js
export default CryptoSelector;

// Je suis contente d'avoir réussi à faire ce sélecteur !
// C'est cool de voir comment je peux interagir avec mon application
