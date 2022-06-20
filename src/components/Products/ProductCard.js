import { useState, useContext } from 'react';

import { CartContext } from '../../utils/context/cart-context';
import { StdButton } from '../UI/Buttons';

import classes from './ProductCard.module.css';

const productData = {
	en: {
		label: 'Amount',
		btnadd: 'Add',
		btnsubs: 'Substract',
		price: 'Total price',
		order: 'Add to cart',
	},
	cs: {
		label: 'Množství',
		btnadd: 'Přidat',
		btnsubs: 'Odebrat',
		price: 'Celková cena',
		order: 'Přidat do košíku',
	},
};

const ProductCard = ({ data, language }) => {
	const [amount, setAmount] = useState(1);
	const { addItemToCart } = useContext(CartContext);

	const clickOrderHandler = () => {
		const newCartItem = { ...data, amount };
		addItemToCart(newCartItem);
	};

	return (
		<div className={classes.wrapper}>
			<div className={classes.image}>
				<img src={data.imageUrl} alt={data.lang[language].productName} />
			</div>
			<div className={classes.control}>
				<h2>{data.lang[language].productName}</h2>
				<div className={classes['amount-control']}>
					<label htmlFor={`order-amount-${data.id}`}>
						{productData[language].label}
					</label>
					<button
						aria-label={productData[language].btnsubs}
						onClick={() => setAmount(amount - 1)}
					>
						<i className="fa-solid fa-chevron-left" />
					</button>
					<input
						type="text"
						onChange={(e) => {
							setAmount(Number(e.target.value));
						}}
						value={amount}
						id={`order-amount-${data.id}`}
					/>
					<button
						aria-label={productData[language].btnadd}
						onClick={() => setAmount(amount + 1)}
					>
						<i className="fa-solid fa-chevron-right" />
					</button>
				</div>
				<p className={classes.price}>
					<span>{productData[language].price}:</span> {data.price} CZK x{' '}
					{amount} = {Number(data.price) * amount} CZK
				</p>
				<div style={{ flex: 1 }}>
					<StdButton onClick={clickOrderHandler}>
						{productData[language].order}
					</StdButton>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
