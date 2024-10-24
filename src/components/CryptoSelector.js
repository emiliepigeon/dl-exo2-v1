// J'importe React parce que c'est la base de tout !
// C'est comme si je prenais ma boîte à outils avant de commencer à bricoler
import React from 'react';

// Je crée mon super composant CryptoSelector
// C'est comme si je fabriquais un menu déroulant magique pour choisir des cryptos !
const CryptoSelector = ({ selectedCrypto, onSelectCrypto }) => {
    // Je fais une liste de toutes les cryptos que je veux dans mon menu
    // C'est comme si je faisais la liste des ingrédients pour une recette de cuisine
    const cryptos = [
        { id: 'bitcoin', name: 'Bitcoin' },
        { id: 'ethereum', name: 'Ethereum' },
        { id: 'ripple', name: 'XRP' },
        { id: 'cardano', name: 'Cardano' },
        { id: 'dogecoin', name: 'Dogecoin' }
    ];

    // Maintenant, je vais créer mon menu déroulant
    // C'est comme si je construisais une petite machine à choisir des cryptos
    return (
        <div className="crypto-selector">
            {/* Je mets une étiquette pour dire à quoi sert mon menu */}
            <label htmlFor="crypto-select">Choisissez une crypto-monnaie :</label>

            {/* Et voici mon super menu déroulant ! */}
            <select
                id="crypto-select"
                value={selectedCrypto}
                onChange={(e) => onSelectCrypto(e.target.value)}
            >
                {/* Je crée une option pour chaque crypto de ma liste */}
                {/* C'est comme si je mettais chaque ingrédient dans un petit tiroir */}
                {cryptos.map((crypto) => (
                    <option key={crypto.id} value={crypto.id}>
                        {crypto.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

// J'exporte mon composant pour pouvoir l'utiliser ailleurs
// C'est comme si je mettais mon invention dans une boîte pour l'envoyer à mes amis
export default CryptoSelector;

// Youpi ! J'ai réussi à créer mon premier composant React !
// C'est trop cool de pouvoir choisir différentes cryptos comme ça !
