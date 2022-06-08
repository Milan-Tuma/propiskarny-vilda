import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { emailAuth, googleSignIn } from '../utils/firebase/auth';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';

import { AuthContext } from '../utils/context/auth-context';

const Auth = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [notification, setNotification] = useState();

	const { user, setUser } = useContext(AuthContext);

	const signUpHandler = async (e) => {
		e.preventDefault();
		const authData = await emailAuth(
			createUserWithEmailAndPassword,
			email,
			password
		);
		if (authData.hasOwnProperty('user')) {
			setNotification('Created user successfully');
			setEmail('');
			setPassword('');
			setUser(authData.user);
		}
		setNotification(authData.error);
	};

	const signInFormHandler = async () => {
		const authData = await emailAuth(
			signInWithEmailAndPassword,
			email,
			password
		);
		setNotification('Sign in successfully');
		setUser(authData.user);
	};

	const googleSignInHandler = async () => {
		const authData = await googleSignIn();
		setNotification('Sign in successfully');
		setUser(authData.user);
	};

	const signOutHandler = () => {
		setUser(null);
		setNotification('Logged out');
	};

	console.log(user);

	return (
		<div>
			<nav>
				<Link to={'/'}>Home</Link>
			</nav>
			<form onSubmit={signUpHandler}>
				<input
					type="email"
					placeholder="Enter email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Enter password"
					onChange={(e) => setPassword(e.target.value)}
					minLength={6}
				/>
				<button>Sign Up</button>
				{notification && <div>{notification}</div>}
			</form>
			<button onClick={signInFormHandler}>Sign In</button>
			<button onClick={googleSignInHandler}>Sign In With Google</button>
			{user && <button onClick={signOutHandler}>Sign Out</button>}
		</div>
	);
};

export default Auth;
