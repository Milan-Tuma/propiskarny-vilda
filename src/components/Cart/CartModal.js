import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../utils/context/cart-context';

import classes from './CartModal.module.css';

const cartData = {
	en: {
		empty: 'Add items to cart to display your order',
		total: 'Total',
		btn: 'Proceed to cart',
	},
	cs: {
		empty: 'Přidejte položky do košíku pro zobrazení',
		total: 'Celkem',
		btn: 'Pokračovat do košíku',
	},
};

const CartModal = ({ lang }) => {
	const { cartItems, clearItemFromCart, cartTotal, setCartOpen } =
		useContext(CartContext);

	const clearClickHandler = (product) => {
		clearItemFromCart(product);
	};

	const formatter = new Intl.NumberFormat('cs-CZ', {
		style: 'currency',
		currency: 'CZK',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	});
	const formattedTotal = formatter.format(cartTotal);

	const displayCartItems = cartItems.map((cartItem) => {
		return (
			<li key={cartItem.id} className={classes.item}>
				<span>{cartItem.lang[lang].productName}</span>
				<span>x {cartItem.amount}</span>
				<button
					className={classes['x-btn']}
					onClick={() => clearClickHandler(cartItem)}
				>
					<i className="fa-solid fa-xmark"></i>
				</button>
			</li>
		);
	});

	return (
		<>
			<div className={classes.wrapper}>
				{displayCartItems.length > 0 ? (
					<ul>{displayCartItems}</ul>
				) : (
					<p>{cartData[lang].empty}</p>
				)}
				<hr />
				<div className={classes['total-price']}>
					<span>{cartData[lang].total}</span>
					<span>{formattedTotal}</span>
				</div>
				<div className={classes['btn-wrap']}>
					<Link to={'/shopping-cart'}>
						<button className={classes.btn}>{cartData[lang].btn}</button>
					</Link>
				</div>
			</div>
			<div
				className={classes.background}
				onClick={() => setCartOpen(false)}
			></div>
		</>
	);
};

export default CartModal;
