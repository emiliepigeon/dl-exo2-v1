// J'importe axios, c'est comme ma baguette magique pour aller chercher des infos sur internet !
import axios from 'axios';

// Voici ma super fonction pour récupérer les données des cryptos
// C'est comme si je créais ma propre machine à remonter le temps des prix !
export const fetchCryptoData = async (cryptoId, interval) => {
    try {
        // L'adresse de base de l'API, c'est comme l'adresse d'un grand magasin de cryptos
        const baseUrl = 'https://api.coincap.io/v2/assets';

        // La date de fin, c'est maintenant ! Comme si je disais "Je veux les prix jusqu'à cette seconde !"
        const end = Date.now();

        // Maintenant, je vais décider depuis quand je veux voir les prix
        // C'est comme choisir à quel point je veux remonter dans le temps
        let start;
        let dataInterval; // Ça, c'est pour dire si je veux les prix toutes les heures ou tous les jours

        // C'est comme un menu où je choisis ma période
        switch (interval) {
            case 'd1':
                start = end - 24 * 60 * 60 * 1000; // Je remonte d'un jour (en millisecondes, c'est long à écrire !)
                dataInterval = 'h1'; // Je veux les prix heure par heure
                break;
            case 'w1':
                start = end - 7 * 24 * 60 * 60 * 1000; // Je remonte d'une semaine
                dataInterval = 'h1'; // Toujours heure par heure
                break;
            case 'm1':
                start = end - 30 * 24 * 60 * 60 * 1000; // Un mois en arrière, wahou !
                dataInterval = 'h1'; // Encore heure par heure
                break;
            case 'm3':
                start = end - 90 * 24 * 60 * 60 * 1000; // Trois mois, c'est loin ça !
                dataInterval = 'd1'; // Là, je prends jour par jour, sinon ça fait trop de données
                break;
            case 'y1':
                start = end - 365 * 24 * 60 * 60 * 1000; // Une année entière, comme une machine à remonter le temps !
                dataInterval = 'd1'; // Jour par jour aussi, pour ne pas faire exploser mon ordinateur
                break;
            default:
                start = end - 24 * 60 * 60 * 1000; // Si je me trompe, on prend un jour par défaut
                dataInterval = 'h1';
        }

        // Maintenant, je lance ma requête à l'API
        // C'est comme si j'envoyais un pigeon voyageur pour aller chercher les infos
        const response = await axios.get(`${baseUrl}/${cryptoId}/history`, {
            params: {
                interval: dataInterval, // Je dis si je veux les données par heure ou par jour
                start, // Depuis quand
                end // Jusqu'à quand
            }
        });

        // Je regarde combien de données j'ai reçu, c'est toujours bon de vérifier !
        console.log(`Youpi ! J'ai reçu ${response.data.data.length} prix pour la période ${interval} !`);

        // Je renvoie les données, c'est comme si je donnais mon trésor à celui qui a appelé la fonction
        return response.data.data;

    } catch (error) {
        // Oh non ! Quelque chose s'est mal passé :(
        // C'est comme si mon pigeon voyageur s'était perdu en chemin
        console.error("Zut alors ! Il y a eu un problème :", error);
        // Je renvoie un tableau vide, comme ça mon application ne va pas planter
        // C'est mieux que rien !
        return [];
    }
};

// Hourra ! J'ai réussi à créer ma fonction pour récupérer les données des cryptos !
// C'est comme si j'avais construit ma propre machine à voyager dans le temps des prix !
// J'ai hâte de voir ça fonctionner dans mon application !
