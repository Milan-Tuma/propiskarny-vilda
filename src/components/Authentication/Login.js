import { useContext } from 'react';

import { AuthContext } from '../../utils/context/auth-context';

const loginData = {
	en: {
		login: 'Sign In',
		logout: 'Sign Out',
	},
	cs: {
		login: 'Přihlášení',
		logout: 'Odhlášení',
	},
};

const Login = ({ lang, openAuth }) => {
	const { user, setUser } = useContext(AuthContext);

	const openAuthHandler = () => {
		openAuth(true);
	};

	const logoutHandler = () => {
		setUser(null);
	};

	return (
		<div>
			{!user ? (
				<div onClick={openAuthHandler}>
					<i className="fa-solid fa-user"></i>
					<span> {loginData[lang].login}</span>
				</div>
			) : (
				<div onClick={logoutHandler}>
					<i className="fa-solid fa-user-slash"></i>
					<span> {loginData[lang].logout}</span>
				</div>
			)}
		</div>
	);
};

export default Login;
