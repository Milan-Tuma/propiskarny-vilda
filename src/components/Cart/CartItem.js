import { useState, useContext } from 'react';

import { CartContext } from '../../utils/context/cart-context';
import { IconButton } from '../UI/Buttons';

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
				<IconButton
					onClick={() => clearItemFromCart(item)}
					aria-label={cartData[lang].delete}
					animated={true}
				>
					<i className="fa-solid fa-trash" />
				</IconButton>
			</p>
		</li>
	);
};

export default CartItem;
