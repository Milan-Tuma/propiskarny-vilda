import { useState, useEffect, useContext } from 'react';

import { LangContext } from '../../utils/context/lang-context';
import { data } from '../../utils/firebase/products';

import ProductCard from './ProductCard';
import TrustBanner from './TrustBanner';

import classes from './ProductsArray.module.css';

const productData = {
	en: {
		title: 'Suitable pens for your business',
		data: [
			{
				icon: 'fa-solid fa-circle-check',
				content:
					'As manufacturer we are compliant with ISO norms and other certificates.',
			},
			{
				icon: 'fa-solid fa-award',
				content:
					'Design and user acceptance are key of each product. Our pens are proven by customers.',
			},
			{
				icon: 'fa-solid fa-earth-europe',
				content:
					'All of our products are made from recycled materials, which are environment friendly.',
			},
		],
	},
	cs: {
		title: 'Propisky pro vaši společnost',
		data: [
			{
				icon: 'fa-solid fa-certificate',
				content:
					'Jako výrobce splňujeme ISO normy a certifikáty spojené s výrobou.',
			},
			{
				icon: 'fa-solid fa-award',
				content:
					'Design i uživatelská přívětivost je základ každého produktu. Naše propisky jsou ověřené zákazníky.',
			},
			{
				icon: 'fa-solid fa-earth-europe',
				content:
					'Všechny naše produkty jsou vyrobené z recyklovatelných materiálů, které jsou šetrné k přírodě.',
			},
		],
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
				<TrustBanner data={productData[language].data} />
			</div>
		</div>
	);
};

export default ProductArray;
