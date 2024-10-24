# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


/////////////////////////////////////////////////////////////////////////////////

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
│   │   └── TimeframeSelector.js
│   │
│   ├── utils/
│   │   └── api.js
│   │
│   ├── App.js
│   ├── index.js
│   └── styles.css
│
├── package.json
└── README.md

////////////////////////////////////

Etape 1:  Création du projet et installation des dépendances
Node.js et npm sont déjà installés sou mon PC

# Initialiser un nouveau projet React
npx create-react-app dl-exo2-v1

# Naviguer dans le dossier du projet
cd dl-exo2-v1

# Installer les dépendances supplémentaires
npm install react-router-dom axios recharts

# Démarrer le serveur de développement
npm start
_______________________________________________________________________________
J'ai déjà créermon dossier de travail et je suis dans le bon répertoire DONC:

# Initialiser un nouveau projet React
npx create-react-app .

# Installer les dépendances supplémentaires
npm install react-router-dom axios recharts
>>> problème de vulnérabilités:
TERMINAL= added 38 packages, and audited 1579 packages in 5s
            8 vulnerabilities (2 moderate, 6 high)
            To address all issues (including breaking changes), run:
                npm audit fix --force
                Run `npm audit` for details.

# Démarrer le serveur de développement
npm start
__________________________________________________________________________________

Pour l'instant tout est OK. 
  Local:            http://localhost:3000
  On Your Network:  http://172.30.96.1:3000

/////////////////////////////////////////////////////////


