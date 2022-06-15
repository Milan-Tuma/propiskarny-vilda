import { useState, useContext } from 'react';

import { CartContext } from '../../utils/context/cart-context';

import classes from './CartItem.module.css';

const CartItem = ({ item, lang, cartData }) => {
	const [amount, setAmount] = useState(item.amount);

	const { clearItemFromCart } = useContext(CartContext);

	return (
		<li className={classes.card}>
			<span className={classes.title}>{item.lang[lang].productName}</span>
			<p className={classes.details}>
				<span className={classes.price}>
					{cartData[lang].price}: {item.price} Kč
				</span>
				<span>
					<input value={amount} onChange={(e) => setAmount(e.target.value)} />
				</span>
				<button
					onClick={() => clearItemFromCart(item)}
					aria-label={cartData[lang].delete}
					className={classes.delete}
				>
					<i className="fa-solid fa-trash"></i>
				</button>
			</p>
		</li>
	);
};

export default CartItem;
