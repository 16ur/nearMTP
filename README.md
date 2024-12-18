# 📌 **nearMTP - Moteur de Recherche d'Activités autour de Montpellier**

###### **nearMTP** est une application web permettant aux utilisateurs de **rechercher des activités** autour de Montpellier. Elle offre une interface permettant d'explorer, de filtrer et découvrir des activités locales !

---

## **Fonctionnalités Principales**

1. **Rechercher des activités** par mots-clés ou par catégories.
2. **Affichage dynamique des activités** sous forme de cartes.
3. **Filtrage par catégorie**.
4. **Page Détails** pour chaque activité, incluant si possible:
   - Description complète
   - Lien vers le site web officiel
   - Adresse Google Maps
   - Numéro de téléphone.
5. **Design responsive** pour une expérience utilisateur optimale sur tous types d'appareils.

---

## 🛠️ **Technologies Utilisées**

### **Frontend**

- **React** (Vite)
- **CSS** : Responsive avec Media Queries
- **Framer Motion** : Animations des cartes
- **Axios** : Requêtes HTTP

### **Backend**

- **Node.js** avec **Express**
- **MongoDB** (Base de données)
- **Mongoose** : ORM pour MongoDB

---

## 🔧 **Installation et Exécution**

### **Prérequis**

- **Node.js** installé
- **MongoDB** installé et en cours d'exécution
- **npm** ou **yarn**

---

### **1. Cloner le projet**

```bash
git clone https://github.com/16ur/nearMTP
cd nearMTP
```

---

### **2. Installation des dépendances**

**Frontend** :

```bash
cd client
npm install
```

**Backend** :

```bash
cd server
npm install
```

---

## **3. Importation des Données**

Ouvrez une application de gestion de base de donnée MongoDB (comme `MongoDB Compass`), puis créer une base de donnée nommée `nearMTP` et une collection `activities`. Ensuite, importer le fichier `activities.json` situé dans le dossier `server/data`.

---

### **4. Configuration des Variables d'Environnement**

Dans le dossier `server`, créez un fichier `.env` :

```env
MONGODB_URI=mongodb://localhost:27017/nearMTP
PORT=3001
```

---

### **5. Démarrage du Projet**

**Backend** :

```bash
cd server
npm run dev
```

**Frontend** :

```bash
cd client
npm run dev
```

Ouvrez votre navigateur à l'adresse : `http://localhost:5173`

---

## 🎨 **Design et Responsivité**

- Les pages sont **responsives** grâce à l'utilisation des **media queries**.
- Des animations CSS apportent des transitions fluides sur les cartes.

---

## 💡 **Améliorations Futures**

- Ajout d'un système de **commentaires et notes** pour les activités.
- Intégration d'une carte interactive avec **Google Maps**.
- Authentification utilisateur avec un espace administrateur pour gérer les activités.

---

## 📄 **Licence**

Ce projet est sous licence **MIT**. Vous êtes libre de l'utiliser, le modifier et le partager.

---

## 🚀 **Auteur**

- **MANGUIAN Axel** - Développeur Web Fullstack

---

Si vous avez des questions ou des suggestions, n'hésitez pas à me contacter.
