import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
	apiKey: 'AIzaSyCCQ_8gJ7JJbrGdm0LqFjow-MnsbFT_T3s',
	authDomain: 'firestreamapp-96090.firebaseapp.com',
	projectId: 'firestreamapp-96090',
	storageBucket: 'firestreamapp-96090.appspot.com',
	messagingSenderId: '576488576751',
	appId: '1:576488576751:web:5cc7b43372a21252b42d1a',
	measurementId: 'G-RVN51ZZ4QD'
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)