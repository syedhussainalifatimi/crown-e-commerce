import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyDSuWHqEJ7wpZtR_2a8fmsyO4hzqbcETio",
    authDomain: "crown-db-57757.firebaseapp.com",
    projectId: "crown-db-57757",
    storageBucket: "crown-db-57757.appspot.com",
    messagingSenderId: "575755422493",
    appId: "1:575755422493:web:fbb0bae106c5943323eff4",
    measurementId: "G-CE912BK26P"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
      } catch(error){
        console.log('error creating user', error.message);
      } 
    }
    return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


