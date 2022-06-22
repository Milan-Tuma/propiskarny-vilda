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

const ProductCard = ({ data, language, index }) => {
	const [amount, setAmount] = useState(1);
	const { addItemToCart } = useContext(CartContext);

	const odd = index % 2 !== 0;

	const clickOrderHandler = () => {
		const newCartItem = { ...data, amount };
		addItemToCart(newCartItem);
	};

	return (
		<div className={classes.wrapper}>
			<div className={`${classes.content} ${odd ? classes.odd : ''}`}>
				<h2>{data.lang[language].productName}</h2>
				<p>{data.lang[language].description}</p>
				<div className={classes['amount-control']}>
					<button
						className={classes['btn-default']}
						onClick={() => setAmount(100)}
					>
						100
					</button>
					<button
						className={classes['btn-default']}
						onClick={() => setAmount(500)}
					>
						500
					</button>
					<button
						className={classes['btn-default']}
						onClick={() => setAmount(1000)}
					>
						1000
					</button>
					<div className={classes.amount}>
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
				</div>
				<div>
					<hr />
					<p className={classes['price-detail']}>
						{amount} &times; {data.price} &times; discount
					</p>
					<p className={classes['price-total']}>
						<span>{productData[language].price}</span>
						<span>{amount * data.price} Kč</span>
					</p>
				</div>
				<div className={classes.cta}>
					<StdButton onClick={clickOrderHandler}>
						{productData[language].order}
					</StdButton>
				</div>
			</div>
			<div className={classes.image}>
				<img src={data.imageUrl} alt={data.lang[language].productName} />
			</div>
		</div>
	);
};

export default ProductCard;
