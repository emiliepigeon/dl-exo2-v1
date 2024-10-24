Choix techno REACT
_____________________________________________________________________
Structure du projet par rapport à l'énoncé du problème:

dl-exo2-v1/
│
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── CryptoChart.js
│   │   ├── CryptoSelector.js
│   │   ├── TimeframeSelector.js
│   │   └── TopCryptos.js
│   │
│   ├── pages/
│   │   ├── Home.js
│   │   └── Map.js
│   │
│   ├── utils/
│   │   └── api.js
│   │
│   ├── App.js
│   ├── index.js
│   └── App.css
│
├── package.json
├── README.md
└── .gitignore

////////////////////////////////////

Etape 1:  Création du projet et installation des dépendances
Node.js et npm sont déjà installés sou mon PC

npx create-react-app dl-exo2-v1
cd dl-exo2-v1

J'ai déjà créermon dossier de travail et je suis dans le bon répertoire DONC:

# Initialiser un nouveau projet React
npx create-react-app .

# Installer les dépendances supplémentaires
npm install react-router-dom axios recharts

# Démarrer le serveur de développement
npm start



