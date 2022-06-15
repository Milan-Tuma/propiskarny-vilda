import { useContext } from 'react';

import { CartContext } from '../utils/context/cart-context';
import { LangContext } from '../utils/context/lang-context';

import CartList from '../components/Cart/CartList';

const ShoppingCart = () => {
	const { cartItems } = useContext(CartContext);
	const { language } = useContext(LangContext);

	return (
		<>
			<CartList items={cartItems} lang={language} />
		</>
	);
};

export default ShoppingCart;
