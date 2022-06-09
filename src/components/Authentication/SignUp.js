import { useState, useContext } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { emailAuth } from '../../utils/firebase/auth';
import { AuthContext } from '../../utils/context/auth-context';

import classes from './SignUp.module.css';

const signUpData = {
	en: {
		email: 'Email address',
		pwd: 'Password (min length 6)',
		btn1: 'Sign Up',
	},
	cs: {
		email: 'Emailová adresa',
		pwd: 'Heslo (min 6 znaků)',
		btn1: 'Registrovat',
	},
};

const SignUp = ({ lang, onClose }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { setUser } = useContext(AuthContext);

	const signUpHandler = async (e) => {
		e.preventDefault();
		const authData = await emailAuth(
			createUserWithEmailAndPassword,
			email,
			password
		);
		if (authData.hasOwnProperty('user')) {
			setUser(authData.user);
		}
		onClose(false);
	};

	return (
		<div className={classes.wrapper}>
			<form onSubmit={signUpHandler}>
				<div className={classes.formInput}>
					<label>{signUpData[lang].email}</label>
					<input
						type="email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				</div>
				<div className={classes.formInput}>
					<label>{signUpData[lang].pwd}</label>
					<input
						type="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						minLength={6}
					/>
				</div>
				<button className={classes.btn}>{signUpData[lang].btn1}</button>
			</form>
		</div>
	);
};

export default SignUp;
