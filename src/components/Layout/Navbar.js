import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { LangContext } from '../../utils/context/lang-context';

import classes from './Navbar.module.css';
import Auth from '../Authentication/Auth';
import Login from '../Authentication/Login';
import CartModal from '../Cart/CartModal';

const Navbar = () => {
	const { language, setLanguage } = useContext(LangContext);

	const [openAuth, setOpenAuth] = useState(false);
	const [openCart, setOpenCart] = useState(false);

	const navData = {
		en: {
			cart: 'Cart',
		},
		cs: {
			cart: 'Košík',
		},
	};

	return (
		<>
			<nav>
				<div className={classes.logo}>
					<Link to={'/'}>
						<img src="./Logo.jpeg" alt="Logo" />
					</Link>
				</div>
				<div className={classes.menu}>
					<div onClick={() => setOpenCart(!openCart)}>
						<i className="fa-solid fa-cart-shopping"></i>{' '}
						<span>{navData[language].cart}</span>
					</div>
					<Login lang={language} openAuth={setOpenAuth} />
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
			{openCart && <CartModal lang={language} onClose={setOpenCart} />}
		</>
	);
};

export default Navbar;
