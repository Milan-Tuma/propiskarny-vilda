import { useEffect, useState, useContext } from 'react';

import { data } from '../../utils/firebase/products';
import { LangContext } from '../../utils/context/lang-context';
import ProductCard from './ProductCard';

import classes from './ProductList.module.css';

const ProductList = () => {
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
			<h2></h2>
			<div className={classes.grid}>
				{pens &&
					pens.map((pen) => {
						return <ProductCard data={pen} language={language} key={pen.id} />;
					})}
			</div>
		</div>
	);
};

export default ProductList;
