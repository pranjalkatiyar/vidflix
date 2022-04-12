import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyC4Bm8qwV4EP7lfzQkenvLNownVU350ej0",
  authDomain: "vidflix-8bd35.firebaseapp.com",
  projectId: "vidflix-8bd35",
  storageBucket: "vidflix-8bd35.appspot.com",
  messagingSenderId: "344963013640",
  appId: "1:344963013640:web:1d32e00de1c17822cac5bd"
  };

 
const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export {firebase};
