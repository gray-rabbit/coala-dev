import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import type { FirebaseApp } from 'firebase/app';

import { writable } from 'svelte/store';

const firebaseConfig = {
    apiKey: "AIzaSyAlA4rU5aPGvpypZwoiC-6BHOZlDTLOIlo",
    authDomain: "coala-apply.firebaseapp.com",
    databaseURL: "https://coala-apply.firebaseio.com",
    projectId: "coala-apply",
    storageBucket: "coala-apply.appspot.com",
    messagingSenderId: "1079919061756",
    appId: "1:1079919061756:web:a9ca8a29547d79dc",
    measurementId: "G-2XWKNB8G6N"
};

let app: FirebaseApp;
if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
}
let auth = getAuth(app);

let currentUser = writable(auth.currentUser);

auth.onAuthStateChanged(user => {
    currentUser.set(user);
})

let firestore = getFirestore(app);

export {
    app,
    auth,
    firestore,
}