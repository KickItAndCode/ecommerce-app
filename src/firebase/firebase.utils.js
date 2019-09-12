import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAD4nKIcmsndmVSxp9d57n1sogjAKxHKTI",
  authDomain: "ecommerce-f0aad.firebaseapp.com",
  databaseURL: "https://ecommerce-f0aad.firebaseio.com",
  projectId: "ecommerce-f0aad",
  storageBucket: "ecommerce-f0aad.appspot.com",
  messagingSenderId: "475563881779",
  appId: "1:475563881779:web:b838560429823c28757a46"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
