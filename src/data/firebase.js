import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDBkHd3rUW8dZ5D07SUpNkPG7yMxRuWbdM",
  authDomain: "panier-achat-lt.firebaseapp.com",
  databaseURL: "https://panier-achat-lt-default-rtdb.firebaseio.com",
  projectId: "panier-achat-lt",
  storageBucket: "panier-achat-lt.appspot.com",
  messagingSenderId: "531000313975",
  appId: "1:531000313975:web:b29c2de23e52c9b8791e72",
  measurementId: "G-KLNJ2561WS"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default bd;