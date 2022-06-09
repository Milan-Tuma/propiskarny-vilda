import { useState, useContext } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { AuthContext } from '../../utils/context/auth-context';
import { emailAuth, googleSignIn } from '../../utils/firebase/auth';

import classes from './SignIn.module.css';

const signInData = {
	en: {
		email: 'Email address',
		pwd: 'Password (min length 6)',
		btn1: 'Sign In',
		btn2: 'Google sign-in',
	},
	cs: {
		email: 'Emailová adresa',
		pwd: 'Heslo (min 6 znaků)',
		btn1: 'Přihlášení',
		btn2: 'Přihlášení pomocí Google',
	},
};

const SignIn = ({ lang, onClose }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { user, setUser } = useContext(AuthContext);

	const signInFormHandler = async (e) => {
		e.preventDefault();
		const authData = await emailAuth(
			signInWithEmailAndPassword,
			email,
			password
		);
		setUser(authData.user);
	};

	const googleSignInHandler = async () => {
		const authData = await googleSignIn();
		setUser(authData.user);
		onClose(false);
	};

	console.log(user);

	return (
		<div className={classes.wrapper}>
			<form onSubmit={signInFormHandler}>
				<div className={classes.formInput}>
					<label>{signInData[lang].email}</label>
					<input
						type="email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				</div>
				<div className={classes.formInput}>
					<label>{signInData[lang].pwd}</label>
					<input
						type="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						minLength={6}
					/>
				</div>
				<button className={classes.btn}>{signInData[lang].btn1}</button>
			</form>
			<button
				className={`${classes.btn} ${classes['btn-google']}`}
				onClick={googleSignInHandler}
			>
				{signInData[lang].btn2}
			</button>
		</div>
	);
};

export default SignIn;
