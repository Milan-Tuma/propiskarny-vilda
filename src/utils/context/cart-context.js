import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productAdd) => {
	const existingItem = cartItems.find(
		(cartItem) => cartItem.id === productAdd.id
	);

	if (existingItem) {
		const updatedItems = cartItems.map((cartItem) => {
			return cartItem.id === productAdd.id
				? { ...cartItem, amount: cartItem.amount + productAdd.amount }
				: { ...cartItem };
		});
		return updatedItems;
	}

	return [...cartItems, productAdd];
};

const clearCartItem = (cartItems, productRemove) => {
	const filteredItems = cartItems.filter((cartItem) => {
		return cartItem.id !== productRemove.id;
	});
	return filteredItems;
};

export const CartContext = createContext({
	cartItems: [],
	addCartItem: () => {},
	clearCartItem: () => {},
	cartOpen: false,
	setCartOpen: () => {},
});

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [cartTotal, setCartTotal] = useState(0);
	const [cartOpen, setCartOpen] = useState(false);

	useEffect(() => {
		const newCartTotal = cartItems.reduce(
			(total, cartItem) => total + cartItem.price * cartItem.amount,
			0
		);
		setCartTotal(newCartTotal);
	}, [cartItems]);

	const addItemToCart = (productAdd) => {
		setCartItems(addCartItem(cartItems, productAdd));
	};

	const clearItemFromCart = (productRemove) => {
		setCartItems(clearCartItem(cartItems, productRemove));
	};

	const value = {
		cartItems,
		addItemToCart,
		clearItemFromCart,
		cartTotal,
		cartOpen,
		setCartOpen,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
