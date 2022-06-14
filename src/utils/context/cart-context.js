import { createContext, useState } from 'react';

const addCartItem = (cartItems, productAdd) => {
	const existingItem = cartItems.find(
		(cartItem) => cartItem.id === productAdd.id
	);

	if (existingItem) {
		const updatedItems = cartItems.map((cartItem) => {
			return cartItem.id === productAdd.id
				? { ...cartItem, amount: cartItem.amount + productAdd.amount }
				: { cartItem };
		});
		return updatedItems;
	}

	return [...cartItems, productAdd];
};

export const CartContext = createContext({
	cartItems: [],
	addCartItem: () => {},
});

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	const addItemToCart = (productAdd) => {
		setCartItems(addCartItem(cartItems, productAdd));
	};

	const value = { cartItems, addItemToCart };

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
