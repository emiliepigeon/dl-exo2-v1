// J'importe les modules nécessaires pour créer mon graphique
import React, { useEffect, useState } from 'react'; // Importation de React et des hooks useEffect et useState
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, ReferenceLine, Tooltip, Area } from 'recharts'; // Importation des composants de Recharts pour créer le graphique
import { fetchCryptoData } from '../utils/api'; // Importation de ma fonction pour récupérer les données de l'API

// Je crée mon composant CryptoChart
const CryptoChart = ({ cryptoId, interval }) => {
    const [data, setData] = useState([]); // État pour stocker les données du graphique
    const [openingValue, setOpeningValue] = useState(null); // Valeur d'ouverture de la crypto
    const [closingValue, setClosingValue] = useState(null); // Valeur de clôture de la crypto
    const [percentageChange, setPercentageChange] = useState(null); // Pourcentage de changement entre l'ouverture et la clôture

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchCryptoData(cryptoId, interval);
            setData(result); // Je mets à jour l'état avec les nouvelles données

            if (result.length > 0) {
                const firstValue = parseFloat(result[0].priceUsd);
                const lastValue = parseFloat(result[result.length - 1].priceUsd);
                setOpeningValue(firstValue);
                setClosingValue(lastValue);

                const change = ((lastValue - firstValue) / firstValue) * 100;
                setPercentageChange(change);
            }
        };
        fetchData(); // J'appelle ma fonction fetchData pour récupérer les données
    }, [cryptoId, interval]); // Le hook s'exécute quand cryptoId ou interval changent

    const formatPrice = (price) => {
        // Formatage du prix en dollars avec trois décimales
        return `$ ${parseFloat(price).toFixed(3)}`; // Ajout d'un espace après le symbole $
    };

    if (data.length === 0) {
        return <div>Chargement en cours... Veuillez patienter.</div>; // Message de chargement si pas de données
    }

    const minPrice = Math.min(...data.map(d => parseFloat(d.priceUsd))); // Valeur minimale des prix dans mes données
    const maxPrice = Math.max(...data.map(d => parseFloat(d.priceUsd))); // Valeur maximale des prix dans mes données

    const yAxisTicks = [
        minPrice,
        minPrice + (maxPrice - minPrice) / 3,
        minPrice + 2 * (maxPrice - minPrice) / 3,
        maxPrice,
    ];

    return (
        <div className="chart-container">
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    {/* Définition du dégradé qui remplira l'aire sous la courbe */}
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="1" x2="1" y2="0"> {/* Dégradé à -45 degrés */}
                            <stop offset="0%" stopColor="#353d62" /> {/* Couleur de début du dégradé */}
                            <stop offset="100%" stopColor="#24556c" /> {/* Couleur de fin du dégradé */}
                        </linearGradient>
                    </defs>

                    {/* Axe X qui affiche les dates */}
                    <XAxis dataKey="date" tick={false} axisLine={false} />

                    {/* Axe Y qui affiche les prix */}
                    <YAxis domain={[minPrice, maxPrice]} ticks={yAxisTicks} tickFormatter={(value) => `$ ${Math.round(value)}`} axisLine={false} tickLine={false} tick={{ fill: 'white', fontSize: 12 }} />

                    {/* Lignes de référence sur l'axe Y */}
                    {yAxisTicks.map(tick => (
                        <ReferenceLine key={tick} y={tick} stroke="#5c6591" strokeWidth={1} />
                    ))}

                    <Area
                        type="monotone"
                        dataKey="priceUsd"
                        stroke="#a2decd"
                        fillOpacity={1}
                        fill="url(#colorUv)" // Assurez-vous que cela est correct
                    />

                    {/* Ligne principale du graphique */}
                    <Line type="monotone" dataKey="priceUsd" stroke="#a2decd" dot={false} strokeWidth={2} activeDot={{ r: 6, fill: "white", stroke: "#a2decd", strokeWidth: 3 }} />

                    {/* Tooltip qui apparaît lors du survol */}
                    <Tooltip content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                            return (
                                <div className="custom-tooltip">
                                    {formatPrice(payload[0].value)} {/* Affiche le prix au survol */}
                                </div>
                            );
                        }
                        return null;
                    }} />
                </LineChart>
            </ResponsiveContainer>

            {/* Affichage des valeurs d'ouverture et de clôture ainsi que le pourcentage de changement */}
            <div className="closing-value">
                {openingValue && closingValue && (
                    <>
                        <span className="opening-value">
                            {/* Valeur d'ouverture avec transparence de 50% */}
                            <span style={{ color: 'rgba(255, 255, 255, 0.35)' }}> {/* Couleur du texte avec transparence de 50% */}
                                Valeur d'ouverture:
                            </span>
                            <span style={{ color: 'var(--text-color)' }}> {/* Couleur blanche à 100% pour le symbole $ et le nombre */}
                                {formatPrice(openingValue)} {/* Affiche la valeur d'ouverture */}
                            </span>
                        </span> {/* Affiche la valeur d'ouverture */}

                        <span className="closing-value">
                            {/* Valeur de clôture avec espace avant le $ */}
                            <span style={{ color: 'rgba(162, 222, 205, 0.35)' }}> {/* Couleur du texte avec transparence de 35% */}
                                Valeur de clôture:
                            </span>
                            <span style={{ color: 'var(--accent-color)' }}> {/* Couleur #a2decd à 100% pour le symbole $ et le nombre */}
                                &nbsp;{formatPrice(closingValue)} {/* Ajoute un espace avant le symbole $ */}
                            </span>
                        </span> {/* Affiche la valeur de clôture */}


                        <span className={`change-indicator ${percentageChange >= 0 ? 'positive' : 'negative'}`}>
                            {percentageChange >= 0 ? '▲' : '▼'} {/* Flèche indiquant hausse ou baisse */}
                            {Math.abs(percentageChange).toFixed(2)}% {/* Pourcentage affiché avec deux décimales */}
                        </span>
                    </>
                )}
            </div>
        </div>
    );
};

// J'exporte mon composant pour qu'il puisse être utilisé ailleurs dans l'application
export default CryptoChart;

// J'ai réussi à faire ce graphique avec plein d'infos intéressantes !
// J'espère que ça va bien fonctionner !
