import { signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { auth } from './index';

const provider = new GoogleAuthProvider();

export const emailAuth = async (authFunc, email, password) => {
	try {
		const userData = await authFunc(auth, email, password);
		const user = userData.user;
		return { user };
	} catch (error) {
		const errorMessage = error.message;
		return { error: errorMessage };
	}
};

export const googleSignIn = () => {
	signInWithPopup(auth, provider)
		.then((result) => {
			const user = result.user;
			return user;
		})
		.catch((error) => {
			const errorMessage = error.message;
			return errorMessage;
		});
};
