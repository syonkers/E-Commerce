import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD5acFVhwOqarpOzqKpP0ZDonffHfZhfMw",
    authDomain: "ecommerce-db-77d56.firebaseapp.com",
    databaseURL: "https://ecommerce-db-77d56.firebaseio.com",
    projectId: "ecommerce-db-77d56",
    storageBucket: "",
    messagingSenderId: "864021945990",
    appId: "1:864021945990:web:3b2eae5504e16a3f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;

