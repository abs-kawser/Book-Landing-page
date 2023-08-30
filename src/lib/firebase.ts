import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyB85jAVGFKyxuvdbrTsTjFiBKAwWUXI1A4",
  authDomain: "book-landing-page-925b2.firebaseapp.com",
  projectId: "book-landing-page-925b2",
  storageBucket: "book-landing-page-925b2.appspot.com",
  messagingSenderId: "373839141984",
  appId: "1:373839141984:web:124184e639faa0477a7705"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);