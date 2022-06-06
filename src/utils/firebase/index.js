// import firebaseui from 'firebaseui';
// import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDLj-y-c-tmq7PlUH-lsVn-a1Sao-nzFW8',
	authDomain: 'propiskarny-vilda.firebaseapp.com',
	databaseURL:
		'https://propiskarny-vilda-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'propiskarny-vilda',
	storageBucket: 'propiskarny-vilda.appspot.com',
	messagingSenderId: '3087261511',
	appId: '1:3087261511:web:5d07ad751fd44e34373662',
};

const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
const auth = getAuth(app);

// const ui = new firebaseui.auth.AuthUI(firebase.auth());

// ui.start('#firebaseui-auth-container', {
// 	signInOptions: [
// 		{
// 			provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
// 			requireDisplayName: false,
// 		},
// 	],
// });

export { auth };
