// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/firestore';
import { GoogleAuthProvider ,FacebookAuthProvider} from "firebase/auth";
import { getStorage, ref } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8Cq2ulblY9qubYVEy_rOCBSuy6esxb7s",
  authDomain: "muscles-hub.firebaseapp.com",
  projectId: "muscles-hub",
  storageBucket: "muscles-hub.appspot.com",
  messagingSenderId: "374469484120",
  appId: "1:374469484120:web:55d44f8f1e03e5e290342d"
};
let app;
if(firebase.apps.length=== 0){
  app = firebase.initializeApp(firebaseConfig);
}else{
  app =firebase.app();
}
const passwordReset = (email) => {
  return firebase.auth().sendPasswordResetEmail(email)
}
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
provider.setCustomParameters({
  'login_hint': 'user@example.com'
});
const providerf = new FacebookAuthProvider();
providerf.addScope('user_birthday');
providerf.setCustomParameters({
  'display': 'popup'
});

const auth = firebase.auth();
const db =firebase.firestore();
auth.languageCode = 'it';
export const storage = getStorage(app);



export {auth,db,passwordReset,provider,providerf};