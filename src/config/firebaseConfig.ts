import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPymvUTV_YvRg6tVVM3snsfwctTZkV66s",
    authDomain: "new-year-app-646e2.firebaseapp.com",
    projectId: "new-year-app-646e2",
    storageBucket: "new-year-app-646e2.appspot.com",
    messagingSenderId: "20370713733",
    appId: "1:20370713733:web:1dd227318ff79d1f558dec",
    measurementId: "G-B42TDR3NJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});
const firestore = getFirestore(app);

export { app, auth, firestore };

