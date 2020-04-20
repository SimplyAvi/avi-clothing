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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
