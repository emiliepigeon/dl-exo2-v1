// J'importe React et les hooks dont j'ai besoin
// useEffect, c'est pour faire des choses quand mon composant se charge
// useState, c'est pour stocker des données qui peuvent changer
import React, { useEffect, useState } from 'react';

// J'importe les composants de Recharts pour faire mon graphique
// C'est une bibliothèque qui m'aide à créer des graphiques facilement
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area } from 'recharts';

// J'importe ma fonction pour récupérer les données
// Je l'ai mise dans un fichier séparé pour que ce soit plus organisé
import { fetchCryptoData } from '../utils/api';

// Je crée mon composant CryptoChart
// Il prend deux props : cryptoId et interval
const CryptoChart = ({ cryptoId, interval }) => {
    // J'utilise useState pour stocker mes données
    // Au début, c'est un tableau vide
    const [data, setData] = useState([]);

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

    // Je retourne mon composant
    return (
        <div className="chart-container">
            {/* ResponsiveContainer fait que mon graphique s'adapte à la taille de l'écran */}
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data}>
                    {/* Je crée un dégradé pour l'intérieur de mon graphique */}
                    <defs>
                        <linearGradient id="areaGradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#373f64" />
                            <stop offset="100%" stopColor="#3c4b6b" />
                        </linearGradient>
                    </defs>

                    {/* XAxis, c'est l'axe horizontal (les dates) */}
                    <XAxis dataKey="date" />
                    {/* YAxis, c'est l'axe vertical (les prix) */}
                    <YAxis />
                    {/* Tooltip, c'est ce qui s'affiche quand je survole un point */}
                    <Tooltip />
                    {/* Area, c'est la partie colorée sous la ligne */}
                    <Area type="monotone" dataKey="priceUsd" stroke="#a2decd" fillOpacity={1} fill="url(#areaGradient)" />
                    {/* Line, c'est la ligne elle-même */}
                    <Line type="monotone" dataKey="priceUsd" stroke="#a2decd" dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

// J'exporte mon composant pour pouvoir l'utiliser dans App.js
export default CryptoChart;

// Je suis super contente d'avoir réussi à faire ce graphique !
// C'était pas facile, mais le résultat est vraiment cool
