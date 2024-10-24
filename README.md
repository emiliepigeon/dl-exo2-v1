Documentation Technique de Mon API Crypto
________________________________________________________________________________________
Salut ! C'est moi qui ai créé cette super API pour récupérer des données sur les cryptomonnaies. 
Je vais essayer d'expliquer comment ça marche, même si je suis encore en train d'apprendre 
et pour moi c'était une première.
_____________________________________________________________________________
Ce que fait mon API
________________________
Mon API permet de récupérer des informations sur le prix des cryptomonnaies. 
Pour l'instant, elle ne fait qu'une seule chose, mais c'est déjà pas mal !
///////////////////
La fonction principale : fetchCryptoData

J'ai créé une fonction qui s'appelle fetchCryptoData. Voici ce qu'elle fait :

1/ Elle va chercher des données sur une cryptomonnaie spécifique.
2/ Elle peut récupérer ces données pour différentes périodes de temps.

_____________________________________________________________________________
Comment l'utiliser
________________________
Pour utiliser cette fonction, il faut lui donner deux informations :

1/ cryptoId : C'est le nom de la cryptomonnaie que vous voulez (comme "bitcoin" ou "ethereum").
!!!!!!!!!!!!!!!!!! Pour l'instant ne fonctionne qu'avec les bitcoin.
2/ interval : C'est la période de temps pour laquelle vous voulez les données 
(par exemple, "d1" pour un jour).
3/ sous le graphique : j'affiche3 infos supplémentaires liées  à la crypto (la plus populaire / la plus interrssante et le marché avec prix élevé)

et le tout en temps reel avec l'utilisation del'api CoinCap API 2.0.

J'ulise aussi la bibliothèque Recharts https://recharts.org/en-US/ mais elle me pose un problème...
je n'arrive pas à ajouter un dégradé dans l'aire de la courbe.
_______________________________________

Voici un exemple de comment l'utiliser :
///////////////////////////////////////////////

javascript
const data = await fetchCryptoData('bitcoin', 'd1');

Ce que ça renvoie
La fonction renvoie un tableau avec plein d'informations sur le prix de la crypto. Chaque élément du tableau ressemble à ça :

javascript
{
  time: 1623456789000,
  date: "2021-06-11T12:33:09.000Z",
  priceUsd: "36789.1234567890"
}

- time : C'est un grand nombre qui représente la date et l'heure (je ne sais pas trop comment ça marche, mais apparemment c'est important).
- date : C'est la date et l'heure sous forme de texte, plus facile à lire pour nous.
- priceUsd : C'est le prix de la crypto en dollars américains.
_______________________________________________________________________________

Comment ça marche en coulisses / en arrière-plan derrière la vue 
    > mécanismes internes à l'API derrière le code
////////////////////////////////////////////////////////////
1/ J'utilise une chose qui s'appelle "axios" pour faire des requêtes à l'API de CoinCap. 
    C'est comme si on envoyait un message à CoinCap pour leur demander des infos.
2/ J'ai mis tout ça dans un grand "try/catch". 
    On m'a dit que c'était important pour gérer les erreurs, même si je ne comprends pas encore tout à fait comment ça marche.
3/ Si tout se passe bien, la fonction renvoie les données. 
    Si quelque chose ne va pas, elle affiche une erreur dans la console et renvoie un tableau vide.

PLUSTARD ÉVOLUTIONS//////////////////////////////////////////////////////////

Limites et choses à améliorer
Je sais que mon API n'est pas parfaite. 
Voici quelques trucs que je pourrais améliorer plus tard :

1/ Pour l'instant, on ne peut récupérer des infos que sur une seule crypto à la fois. 
    Ce serait cool de pouvoir en demander plusieurs d'un coup.
2/ Je ne gère pas très bien les erreurs. 
    Je pourrais essayer de donner plus d'informations quand quelque chose ne marche pas.
3/ Je pourrais ajouter d'autres fonctions pour récupérer d'autres types d'informations, 
pas seulement le prix.

////////////////////////////////////////////////////////////////////////
Comment j'ai testé
Pour être honnête, je n'ai pas fait de vrais tests automatisés 
(je ne sais pas encore comment faire ça). 
J'ai surtout vérifié que ça marchait en l'utilisant dans mon application et en regardant 
si les données s'affichaient correctement.
_________________________________________________________________________

Conclusion
Voilà, c'est mon API ! Je suis assez fière d'avoir réussi à la faire fonctionner, 
même si je sais qu'il y a encore plein de choses à améliorer. 
J'espère que cette documentation aide à comprendre comment ça marche. 

Cette documentation reflète le point de vue d'une débutante qui explique son travail. 

Elle est détaillée tout en restant accessible, 
et inclut des réflexions personnelles sur les limites actuelles et les améliorations possibles.