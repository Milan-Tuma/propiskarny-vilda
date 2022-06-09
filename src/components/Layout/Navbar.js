import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { LangContext } from '../../utils/context/lang-context';

import classes from './Navbar.module.css';
import Auth from '../Authentication/Auth';

const navData = {
	en: {
		cart: 'Cart',
		auth: 'Login',
	},
	cs: {
		cart: 'Košík',
		auth: 'Přihlášení',
	},
};

const Navbar = () => {
	const { language, setLanguage } = useContext(LangContext);
	const [openAuth, setOpenAuth] = useState(false);

	console.log(navData[language]);

	return (
		<>
			<nav>
				<div className={classes.logo}>
					<Link to={'/'}>
						<img src="./Logo.jpeg" alt="Logo" />
					</Link>
				</div>
				<div className={classes.menu}>
					<div>
						<i className="fa-solid fa-cart-shopping"></i>{' '}
						<span>{navData[language].cart}</span>
					</div>
					<div onClick={() => setOpenAuth(true)}>
						<i className="fa-solid fa-user"></i>{' '}
						<span>{navData[language].auth}</span>
					</div>
					<div>
						<ul className={classes.lang}>
							<li onClick={() => setLanguage('cs')}>
								<img src="Flag_of_the_Czech_Republic.svg.webp" alt="Čeština" />
							</li>
							<li onClick={() => setLanguage('en')}>
								<img src="Flag_of_the_United_Kingdom.svg.webp" alt="English" />
							</li>
						</ul>
					</div>
				</div>
			</nav>
			{openAuth && <Auth lang={language} onClose={setOpenAuth} />}
		</>
	);
};

export default Navbar;
