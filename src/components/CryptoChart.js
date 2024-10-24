// J'importe tout ce dont j'ai besoin pour mon super graphique !
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, ReferenceLine, Tooltip, Area } from 'recharts';
import { fetchCryptoData } from '../utils/api';

// Je crée mon composant CryptoChart
// Ce composant va afficher le graphique des prix d'une crypto-monnaie
const CryptoChart = ({ cryptoId, interval }) => {
    // J'utilise useState pour stocker mes données de prix
    const [data, setData] = useState([]);
    // J'utilise useState pour stocker la valeur d'ouverture
    const [openingValue, setOpeningValue] = useState(null);
    // J'utilise useState pour stocker la valeur de clôture
    const [closingValue, setClosingValue] = useState(null);
    // J'utilise useState pour stocker le pourcentage de changement
    const [percentageChange, setPercentageChange] = useState(null);

    // useEffect est un hook qui s'exécute après le rendu du composant
    // Je l'utilise pour récupérer les données de l'API quand le composant se charge ou quand cryptoId ou interval changent
    useEffect(() => {
        const fetchData = async () => {
            // Je fais appel à ma fonction fetchCryptoData pour obtenir les données de l'API
            const result = await fetchCryptoData(cryptoId, interval);
            setData(result); // Je mets à jour l'état avec les nouvelles données

            // Je vérifie si j'ai des données avant de calculer les valeurs d'ouverture et de clôture
            if (result.length > 0) {
                const firstValue = parseFloat(result[0].priceUsd); // La première valeur est la valeur d'ouverture
                const lastValue = parseFloat(result[result.length - 1].priceUsd); // La dernière valeur est la valeur de clôture
                setOpeningValue(firstValue); // Je mets à jour l'état avec la valeur d'ouverture
                setClosingValue(lastValue); // Je mets à jour l'état avec la valeur de clôture

                // Je calcule le pourcentage de changement entre l'ouverture et la clôture
                const change = ((lastValue - firstValue) / firstValue) * 100;
                setPercentageChange(change); // Je mets à jour l'état avec le pourcentage de changement
            }
        };
        fetchData(); // J'appelle ma fonction fetchData pour récupérer les données
    }, [cryptoId, interval]); // Je déclenche ce hook quand cryptoId ou interval changent

    // Cette fonction formate les prix en dollars avec trois décimales
    const formatPrice = (price) => {
        return `$${parseFloat(price).toFixed(3)}`; // Formatage du prix en dollars
    };

    // Je vérifie si j'ai des données avant de faire quoi que ce soit dans le graphique
    if (data.length === 0) {
        return <div>Chargement en cours... J'espère que ça va marcher !</div>; // Message de chargement si pas de données
    }

    // Je calcule les valeurs min et max pour mon axe Y afin d'ajuster le graphique correctement
    const minPrice = Math.min(...data.map(d => parseFloat(d.priceUsd))); // Valeur minimale des prix
    const maxPrice = Math.max(...data.map(d => parseFloat(d.priceUsd))); // Valeur maximale des prix

    // Je crée mes 4 paliers pour l'axe Y afin d'afficher correctement les valeurs sur le graphique
    const yAxisTicks = [
        minPrice,
        minPrice + (maxPrice - minPrice) / 3,
        minPrice + 2 * (maxPrice - minPrice) / 3,
        maxPrice
    ];

    // C'est ici que je retourne mon composant avec le graphique et ses éléments associés
    return (
        <div className="chart-container">
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    data={data} // Les données à afficher dans le graphique
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }} // Marges autour du graphique pour un meilleur espacement
                >
                    {/* Dégradé qui remplit la courbe */}
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#3e4460" /> {/* Couleur du début du dégradé */}
                            <stop offset="100%" stopColor="#465a74" /> {/* Couleur de fin du dégradé */}
                        </linearGradient>
                    </defs>

                    {/* Axe X qui affiche les dates */}
                    <XAxis dataKey="date" tick={false} axisLine={false} />

                    {/* Axe Y qui affiche les prix */}
                    <YAxis
                        domain={[minPrice, maxPrice]}
                        ticks={yAxisTicks}
                        tickFormatter={(value) => `$ ${Math.round(value)}`}
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: 'white', fontSize: 12 }}
                    />

                    {/* Lignes de référence sur l'axe Y */}
                    {yAxisTicks.map(tick => (
                        <ReferenceLine key={tick} y={tick} stroke="#5c6591" strokeWidth={1} />
                    ))}

                    {/* Aire remplie sous la courbe */}
                    <Area
                        type="monotone"
                        dataKey="priceUsd"
                        stroke="#a2decd"
                        fillOpacity={1}
                        fill="url(#colorUv)"
                    />

                    {/* Ligne principale du graphique */}
                    <Line
                        type="monotone"
                        dataKey="priceUsd"
                        stroke="#a2decd"
                        dot={false}
                        strokeWidth={2}
                        activeDot={{ r: 6, fill: "white", stroke: "#a2decd", strokeWidth: 3 }} // Style du point actif sur la ligne
                    />

                    {/* Tooltip qui apparaît lors du survol */}
                    <Tooltip
                        content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                                return (
                                    <div className="custom-tooltip">
                                        {formatPrice(payload[0].value)} {/* Affiche le prix au survol */}
                                    </div>
                                );
                            }
                            return null;
                        }}
                    />
                </LineChart>
            </ResponsiveContainer>

            {/* J'affiche les valeurs d'ouverture et de clôture ainsi que le pourcentage de changement */}
            <div className="closing-value">
                {openingValue && closingValue && (
                    <>
                        <span className="opening-value">{formatPrice(openingValue)}</span> {/* Valeur d'ouverture affichée en blanc */}
                        <span className="closing-value">{formatPrice(closingValue)}</span> {/* Valeur de clôture affichée en turquoise */}
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

// Youpi ! J'ai réussi à faire ce graphique avec plein d'infos intéressantes !
// J'espère que ça va bien fonctionner !
