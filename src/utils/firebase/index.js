import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

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

export const auth = getAuth(app);
export const db = getDatabase(app);
