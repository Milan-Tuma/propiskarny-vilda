import { Link } from 'react-router-dom';

import CartItem from './CartItem';
import { StdButton } from '../UI/Buttons';

import classes from './CartList.module.css';

const cartData = {
	en: {
		title: 'Selected products in cart',
		price: 'Price per item',
		delete: 'Delete item',
		empty: "We didn't find any item",
		btn: 'Visit our e-shop',
	},
	cs: {
		title: 'Vybrané produkty v košíku',
		price: 'Cena za kus',
		delete: 'Odstranit předmět',
		empty: 'Nenašli jsme žádný předmět',
		btn: 'Navštivte náš e-shop',
	},
};

const CartList = ({ lang, items }) => {
	return (
		<div className={classes.wrapper}>
			{items.length > 0 ? (
				<>
					<h2>{cartData[lang].title}</h2>
					<ul>
						{items.map((item) => {
							return (
								<CartItem
									lang={lang}
									item={item}
									cartData={cartData}
									key={item.id}
								/>
							);
						})}
					</ul>
				</>
			) : (
				<div className={classes.empty}>
					<p>{cartData[lang].empty}</p>
					<div style={{ width: '20rem' }}>
						<Link to={'/'}>
							<StdButton>{cartData[lang].btn}</StdButton>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default CartList;
