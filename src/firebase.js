// -----------------------------------------------------------------------
// FIREBASE SETUP
// -----------------------------------------------------------------------
// 1. Go to https://console.firebase.google.com and create/open your project.
// 2. Add a Web app (</> icon) and copy YOUR config values into
//    firebaseConfig below.
// 3. Build -> Authentication -> Sign-in method -> enable "Google" and
//    "Phone". Note: Phone Authentication requires the Blaze (pay-as-you-go)
//    billing plan - see Firebase's billing docs.
// 4. Build -> Authentication -> Settings -> SMS region policy -> make sure
//    Uzbekistan (+998) is allowed.
// -----------------------------------------------------------------------
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA39ZwwtRUO4ccrkvUtQtNAh6xtOQHQCYI",
  authDomain: "hudhud-edu-39a87.firebaseapp.com",
  projectId: "hudhud-edu-39a87",
  storageBucket: "hudhud-edu-39a87.firebasestorage.app",
  messagingSenderId: "1023386707364",
  appId: "1:1023386707364:web:4f7ad59c1c5551fd1c8d31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();