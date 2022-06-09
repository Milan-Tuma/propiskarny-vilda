import { useState } from 'react';

import SignIn from './SignIn';
import SignUp from './SignUp';

import classes from './Auth.module.css';

const signInData = {
	en: {
		reg: "Don't have account yet? Register for free",
		sign: 'Already have account? Sign in here',
	},
	cs: {
		reg: 'Nemáte vytvořený účet? Registrujte se zdarma',
		sign: 'Již máte účet? Přihlašte se zde',
	},
};

const Auth = ({ lang, onClose }) => {
	const [register, setRegister] = useState(false);

	const onRegisterClick = () => {
		setRegister(!register);
	};

	return (
		<>
			<div className={classes.wrapper}>
				<div>
					{register ? (
						<SignUp lang={lang} onClose={onClose} />
					) : (
						<SignIn lang={lang} onClose={onClose} />
					)}
				</div>
				<p onClick={onRegisterClick} className={classes.register}>
					{register ? signInData[lang].sign : signInData[lang].reg}
				</p>
			</div>
			<div className={classes.background} onClick={() => onClose(false)} />
		</>
	);
};

export default Auth;
