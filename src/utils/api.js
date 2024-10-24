// J'importe axios pour faire des requêtes HTTP
// C'est plus facile à utiliser que fetch, on m'a dit
import axios from 'axios';

// Je crée une fonction pour récupérer les données de l'API
// Elle prend deux paramètres : cryptoId et interval
// J'ai mis une valeur par défaut pour interval au cas où on ne le spécifie pas
export const fetchCryptoData = async (cryptoId, interval = 'd1') => {
    try {
        // Je construis l'URL de l'API
        // J'utilise des backticks (`) pour pouvoir insérer des variables dans la chaîne
        const apiUrl = `https://api.coincap.io/v2/assets/${cryptoId}/history?interval=${interval}`;

        // J'utilise axios pour faire la requête
        // Le mot-clé 'await' me permet d'attendre que la requête soit terminée
        const response = await axios.get(apiUrl);

        // Je retourne les données
        // Les données sont dans response.data.data (c'est un peu bizarre, mais c'est comme ça que l'API les envoie)
        return response.data.data;

    } catch (error) {
        // Si quelque chose ne marche pas, j'affiche l'erreur dans la console
        // Ça m'aide à déboguer si quelque chose ne va pas
        console.error("Oups ! Il y a eu un problème :", error);

        // Je renvoie un tableau vide pour ne pas casser le reste de l'application
        // Comme ça, même si la requête échoue, mon app ne plante pas
        return [];
    }
};

// Je suis contente d'avoir réussi à faire cette fonction !
// C'est cool de voir comment je peux récupérer des données d'une vraie API
