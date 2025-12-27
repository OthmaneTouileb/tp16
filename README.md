# Application de Gestion de Comptes Bancaires

Une application web moderne développée avec React pour la gestion de comptes bancaires. Cette application permet de créer, consulter, modifier et supprimer des comptes, ainsi que d'effectuer des opérations de dépôt et de retrait.

## 🚀 Fonctionnalités

- **Gestion des comptes** : Création, consultation et suppression de comptes bancaires
- **Opérations bancaires** : Effectuer des dépôts et des retraits sur les comptes
- **Interface moderne** : Design responsive et intuitif avec une interface utilisateur élégante
- **Affichage en temps réel** : Mise à jour immédiate des soldes après chaque opération
- **Validation des données** : Contrôle des montants et prévention des soldes négatifs

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (version 14 ou supérieure)
- **npm** (généralement inclus avec Node.js) ou **yarn**

## 🛠️ Installation

1. Clonez ou téléchargez le projet dans votre répertoire local
2. Ouvrez un terminal dans le dossier du projet
3. Installez les dépendances :

```bash
npm install
```

## ▶️ Démarrage

Pour lancer l'application en mode développement :

```bash
npm start
```

L'application sera accessible à l'adresse : **http://localhost:3000**

La page se rechargera automatiquement lorsque vous modifiez les fichiers source. Les erreurs éventuelles s'afficheront dans la console du navigateur.

## 📦 Scripts disponibles

### `npm start`
Démarre l'application en mode développement avec le serveur de développement React.

### `npm test`
Lance la suite de tests en mode interactif. Consultez la [documentation de Create React App](https://facebook.github.io/create-react-app/docs/running-tests) pour plus d'informations.

### `npm run build`
Génère une version optimisée de l'application pour la production dans le dossier `build`. Cette version est :
- Minifiée
- Optimisée pour les performances
- Prête pour le déploiement

### `npm run eject`
⚠️ **ATTENTION : Cette opération est irréversible.**

Permet d'accéder à tous les fichiers de configuration (Webpack, Babel, ESLint, etc.) pour une personnalisation avancée. Cette étape n'est généralement pas nécessaire pour la plupart des projets.

## 🎯 Utilisation

### Ajouter un nouveau compte
1. Cliquez sur le bouton **"+ Nouveau Compte"**
2. Remplissez le formulaire avec :
   - Le numéro de compte
   - Le nom du titulaire
   - Le solde initial (optionnel, 0 par défaut)
3. Cliquez sur **"Ajouter"**

### Effectuer une opération
1. Cliquez sur le bouton **"Opération"** sur la carte du compte concerné
2. Sélectionnez le type d'opération (Dépôt ou Retrait)
3. Entrez le montant
4. Cliquez sur **"Valider"**

### Supprimer un compte
Cliquez sur le bouton **"Supprimer"** sur la carte du compte à supprimer.

## 🏗️ Structure du projet

```
TP16/
├── public/          # Fichiers statiques publics
├── src/
│   ├── App.js      # Composant principal de l'application
│   ├── App.css     # Styles de l'application
│   ├── index.js    # Point d'entrée de l'application
│   └── ...
├── package.json    # Dépendances et scripts du projet
└── README.md       # Ce fichier
```

## 🛡️ Technologies utilisées

- **React 18.2.0** - Bibliothèque JavaScript pour construire des interfaces utilisateur
- **Create React App** - Outil de configuration pour React
- **CSS3** - Styles modernes avec animations et design responsive

## 📝 Notes

- Les soldes ne peuvent pas devenir négatifs (les retraits sont limités au solde disponible)
- Les montants sont affichés avec 2 décimales
- L'application utilise le stockage local du navigateur (les données sont perdues lors du rafraîchissement de la page)

## 🔧 Personnalisation

Pour personnaliser l'application :
- Modifiez `src/App.js` pour changer la logique métier
- Modifiez `src/App.css` pour personnaliser le style
- Ajoutez de nouveaux composants dans le dossier `src/`

## 📚 Ressources

- [Documentation React](https://react.dev/)
- [Documentation Create React App](https://create-react-app.dev/)
- [React Hooks](https://react.dev/reference/react)

## 📄 Licence

Ce projet est un travail pratique éducatif.

---


https://github.com/user-attachments/assets/50404a93-f0fa-4a5d-9691-43c994f3be30


