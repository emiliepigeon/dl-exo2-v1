// J'importe React et les hooks dont j'ai besoin
// useEffect, c'est pour faire des choses quand mon composant se charge
// useState, c'est pour stocker des données qui peuvent changer
import React, { useEffect, useState } from 'react';

// J'importe les composants de Recharts pour faire mon graphique
// C'est une bibliothèque qui m'aide à créer des graphiques facilement
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from 'recharts';

// J'importe ma fonction pour récupérer les données
// Je l'ai mise dans un fichier séparé pour que ce soit plus organisé
import { fetchCryptoData } from '../utils/api';

// Je crée mon composant CryptoChart
// Il prend deux props : cryptoId et interval
const CryptoChart = ({ cryptoId, interval }) => {
    // J'utilise useState pour stocker mes données
    // Au début, c'est un tableau vide
    const [data, setData] = useState([]);
    // J'ajoute un état pour stocker la valeur du pointeur
    const [hoverValue, setHoverValue] = useState(null);

    // J'utilise useEffect pour aller chercher les données quand le composant se charge
    // Ou quand cryptoId ou interval changent
    useEffect(() => {
        // Je crée une fonction pour récupérer les données
        const fetchData = async () => {
            // J'appelle ma fonction fetchCryptoData et je stocke le résultat
            const result = await fetchCryptoData(cryptoId, interval);
            // Je mets à jour mon état avec les nouvelles données
            setData(result);
        };
        // J'appelle ma fonction fetchData
        fetchData();
        // Je mets cryptoId et interval dans le tableau de dépendances
        // Comme ça, les données sont mises à jour quand ces valeurs changent
    }, [cryptoId, interval]);

    // Je crée une fonction pour formater les prix en dollars
    const formatPrice = (price) => {
        return `$${parseFloat(price).toFixed(3)}`;
    };

    // Je vérifie si j'ai des données avant de calculer les paliers
    if (data.length === 0) {
        return <div>Chargement...</div>; // J'affiche un message de chargement si je n'ai pas encore de données
    }

    // Je calcule les valeurs min et max pour l'axe Y
    const minPrice = Math.min(...data.map(d => parseFloat(d.priceUsd)));
    const maxPrice = Math.max(...data.map(d => parseFloat(d.priceUsd)));

    // Je crée mes 4 paliers pour l'axe Y
    const yAxisTicks = [
        minPrice,
        minPrice + (maxPrice - minPrice) / 3,
        minPrice + 2 * (maxPrice - minPrice) / 3,
        maxPrice
    ];

    // Je retourne mon composant
    return (
        <div className="chart-container">
            {/* ResponsiveContainer fait que mon graphique s'adapte à la taille de l'écran */}
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    data={data}
                    onMouseMove={(e) => {
                        if (e.activePayload) {
                            setHoverValue(e.activePayload[0].value);
                        }
                    }}
                    onMouseLeave={() => setHoverValue(null)}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    {/* XAxis, c'est l'axe horizontal (les dates) */}
                    {/* Je le cache complètement comme on me l'a demandé */}
                    <XAxis dataKey="date" tick={false} axisLine={false} />

                    {/* YAxis, c'est l'axe vertical (les prix) */}
                    {/* Je configure l'axe Y comme dans le mockup */}
                    <YAxis
                        domain={[minPrice, maxPrice]}
                        ticks={yAxisTicks}
                        tickFormatter={(value) => `$ ${Math.round(value)}`}
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: 'white', fontSize: 12 }}
                    />

                    {/* J'ajoute les lignes de référence pour chaque palier */}
                    {/* J'utilise la couleur #5c6591 comme demandé */}
                    {yAxisTicks.map(tick => (
                        <ReferenceLine key={tick} y={tick} stroke="#5c6591" strokeWidth={1} />
                    ))}

                    {/* C'est ma ligne du graphique */}
                    <Line
                        type="monotone"
                        dataKey="priceUsd"
                        stroke="#a2decd"
                        dot={false}
                        strokeWidth={2}
                        activeDot={{ r: 8, fill: "white", stroke: "#a2decd", strokeWidth: 3 }}
                    />
                </LineChart>
            </ResponsiveContainer>
            {/* J'affiche la valeur du pointeur */}
            {hoverValue && (
                <div className="hover-value">
                    {formatPrice(hoverValue)}
                </div>
            )}
        </div>
    );
};

// J'exporte mon composant pour pouvoir l'utiliser dans App.js
export default CryptoChart;

// Waouh ! J'ai réussi à faire en sorte que ça marche pour toutes les périodes !
// C'était pas facile, mais maintenant ça s'affiche bien pour 1 semaine, 3 mois et 1 an aussi !
