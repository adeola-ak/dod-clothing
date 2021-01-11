import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyDBBC-e0EK1rSOb_cNewUFtK6IjcjIukS4",
	authDomain: "dod-clothing.firebaseapp.com",
	projectId: "dod-clothing",
	storageBucket: "dod-clothing.appspot.com",
	messagingSenderId: "185017994885",
	appId: "1:185017994885:web:7e2d016ea12775de1123ec",
	measurementId: "G-D45CEVH46S",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
