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

export const createUserProfileDocument = async (userAuth, additionData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;

