import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBrqlnsLH7wB9xk5h929nmIcJQLuqbmXz8",
    authDomain: "crwn-clothing-db-dc264.firebaseapp.com",
    projectId: "crwn-clothing-db-dc264",
    storageBucket: "crwn-clothing-db-dc264.appspot.com",
    messagingSenderId: "527332887747",
    appId: "1:527332887747:web:91bcc5cd0932ce0801a676"
};

const firebaseApp = initializeApp(firebaseConfig);
  
const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);