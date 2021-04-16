
import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAEziEoKUwmaeO2i6877kWC50_EdzLRlhw",
    authDomain: "netflix-3c2ac.firebaseapp.com",
    projectId: "netflix-3c2ac",
    storageBucket: "netflix-3c2ac.appspot.com",
    messagingSenderId: "22607671541",
    appId: "1:22607671541:web:6917df808924ce56b8d5bc"
};
const firebase = Firebase.initializeApp(firebaseConfig);
console.log(firebase.firestore());
export {firebase}