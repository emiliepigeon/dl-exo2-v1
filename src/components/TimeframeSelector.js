// J'importe React, comme d'habitude
import React from 'react';

// Je crée mon composant TimeframeSelector
// Il prend deux props : selectedInterval et onSelectInterval
const TimeframeSelector = ({ selectedInterval, onSelectInterval }) => {
    // Je définis une liste d'intervalles disponibles
    // Chaque intervalle a un label (ce que l'utilisateur voit) et une valeur (ce que l'API comprend)
    const intervals = [
        { label: '1 Jour', value: 'd1' },
        { label: '1 Semaine', value: 'w1' },
        { label: '1 Mois', value: 'm1' },
        { label: '3 Mois', value: 'm3' },
        { label: '1 An', value: 'y1' },
    ];

    // Je retourne mon composant
    return (
        <div className="timeframe-buttons">
            {/* Je crée un bouton pour chaque intervalle */}
            {intervals.map((interval) => (
                <button
                    key={interval.value}
                    // J'ajoute la classe 'selected' si cet intervalle est sélectionné
                    className={`timeframe-button ${selectedInterval === interval.value ? 'selected' : ''}`}
                    // Quand on clique sur le bouton, ça change l'intervalle sélectionné
                    onClick={() => onSelectInterval(interval.value)}
                >
                    {interval.label}
                </button>
            ))}
        </div>
    );
};

// J'exporte mon composant pour pouvoir l'utiliser dans App.js
export default TimeframeSelector;

// Je suis fière d'avoir réussi à faire ces boutons !
// C'est cool de voir comment je peux changer la période affichée
