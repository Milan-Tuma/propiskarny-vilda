import { useState, useEffect, useContext } from 'react';

import { LangContext } from '../../utils/context/lang-context';
import { data } from '../../utils/firebase/products';

import ProductCard from './ProductCard';
import TrustBanner from './TrustBanner';

import classes from './ProductsArray.module.css';

const productData = {
	en: {
		title: 'Suitable pens for your business',
	},
	cs: {
		title: 'Propisky pro vaši společnost',
	},
};

const ProductArray = () => {
	const [pens, setPens] = useState();

	const { language } = useContext(LangContext);

	useEffect(() => {
		(async () => {
			const res = await data;
			setPens(Object.values(res));
		})();
	}, []);

	return (
		<div className={classes.wrapper}>
			<h1 className={classes.title}>{productData[language].title}</h1>
			<div>
				{pens &&
					pens.map((pen, index) => {
						return (
							<ProductCard
								key={pen.id}
								data={pen}
								language={language}
								index={index}
							/>
						);
					})}
			</div>
			<div>
				<TrustBanner />
			</div>
		</div>
	);
};

export default ProductArray;
