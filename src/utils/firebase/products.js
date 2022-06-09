import { child, get, ref } from 'firebase/database';

import { db } from './index';

const dbRef = ref(db);
export const data = get(child(dbRef, 'pens'))
	.then((snapshot) => {
		if (snapshot.exists()) {
			return snapshot.val();
		} else {
			return [];
		}
	})
	.catch((error) => {
		console.log(error.message);
		return 'Something went wrong';
	});
