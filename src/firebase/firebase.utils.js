import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyCwpm_HAIr1-fhZQQtzckGPYZvJXaGOwIw",
    authDomain: "avi-clothing-db.firebaseapp.com",
    databaseURL: "https://avi-clothing-db.firebaseio.com",
    projectId: "avi-clothing-db",
    storageBucket: "avi-clothing-db.appspot.com",
    messagingSenderId: "637678998586",
    appId: "1:637678998586:web:489ba628eae3ccadf11103"
}

export const createUserProfileDocument = async (userAuth, additionalData ) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();    
    
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)

        }

    }
    return userRef
   
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
